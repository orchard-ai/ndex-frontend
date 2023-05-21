import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import {
    addIntegrationForUser,
    fetchNotionAccessToken,
    getUserIntegrations,
    indexAccount,
    obtainGoogleAccessToken
} from "api";
import {
    AddIntegrationRequest,
    FetchState,
    IndexRequest,
    Integration,
    IntegrationPlatform,
    IntegrationTempCode,
    Scope
} from "api/models";
import jwtDecode from 'jwt-decode';
import { RootState } from "store";

export const addIntegration = createAsyncThunk(
    'userData/addIntegration',
    async(form: IntegrationTempCode, { getState, rejectWithValue }) => {
        const { token } = (getState() as RootState).userAuth;

        if(token) {
            // NOTION INTEGRATION
            switch(form.platform) {
                case IntegrationPlatform.Notion: {
                    try {
                        const notionAuthResponse = await fetchNotionAccessToken(form.temp_code);
                        const { access_token, ...extra } = notionAuthResponse;

                        const { email } = extra.owner.user.person;

                        const newIntegration: AddIntegrationRequest = {
                            email: email,
                            oauth_provider_id: null,
                            platform: IntegrationPlatform.Notion,
                            scopes: [],
                            access_token: access_token,
                            extra: extra
                        }

                        // TODO: NEED TO ASSERT OK
                        await addIntegrationForUser(token, newIntegration);

                        return {
                            email: email,
                            oauth_provider_id: null,
                            platform: IntegrationPlatform.Notion,
                            scopes: []
                        } as Integration;
                    } catch {
                        return rejectWithValue('Error occurred while trying to add integration');
                    }
                }
                case IntegrationPlatform.Google: {
                    try {
                        // fetch the access token
                        const googleTokenResponse = await obtainGoogleAccessToken(form.temp_code);

                        // get the relevant data
                        const { access_token, ...extra } = googleTokenResponse;
                        const { id_token, scope } = extra;

                        // get scope
                        // get rid of the basic scopes requested (openId and user info)
                        const scopes: string[] = scope.split(' ');
                        const requestedScope = scopes.filter((s: string) => s !== Scope.UserInfo && s !== Scope.openId);

                        // obtain user information by decoding id_token
                        const decodedToken: { email: string } = jwtDecode(id_token);
                        const email = decodedToken.email;

                        // find if there is already a google integration with this email
                        const { integrations } = (getState() as RootState).userData;
                        const googIntegs = integrations.filter(i => i.platform === IntegrationPlatform.Google);
                        const existingIntegration = googIntegs.find(i => i.email === email);

                        // check if scope already in integration
                        // can take the first element or requestedScope bc assumption of only requesting one scope at a time
                        if(existingIntegration && existingIntegration.scopes.includes(requestedScope[0])) {
                            return rejectWithValue('Scope already integrated');
                        }

                        // create new integration. append new scopes if integration already exists.
                        const newIntegration: AddIntegrationRequest = {
                            email: email,
                            oauth_provider_id: null,
                            platform: IntegrationPlatform.Google,
                            scopes: existingIntegration === undefined ? [...requestedScope] : existingIntegration.scopes.concat(requestedScope),
                            access_token: access_token,
                            extra: extra
                        };

                        // TODO: NEED TO ASSERT OK
                        const integration = await addIntegrationForUser(token, newIntegration);

                        return convertIntegration(integration);
                    } catch {
                        return rejectWithValue('Error occurred while trying to add integration');
                    }
                }
            }
        }

        throw new Error('User token not found');
    }
);

export const getIntegrations = createAsyncThunk(
    'userData/getIntegrations',
    async(_, { getState }) => {
        const { token } = (getState() as RootState).userAuth;

        if(token) {
            const response = await getUserIntegrations(token);

            // ASSERT OK
            // maybe better handling here
            return response.integrations.map((res: any) => convertIntegration(res));
        }

        return null;
    }
);

const convertIntegration = (integrationJson: any) => {
    const { email, oauth_provider_id, platform, scopes } = integrationJson;

    if(email === undefined || oauth_provider_id === undefined || platform === undefined || scopes === undefined) {
        throw new Error('Integration data absent')
    }

    return {
        email,
        oauth_provider_id,
        platform: platformStrToEnum(platform),
        scopes
    } as Integration;
};

const platformStrToEnum = (platform: string) => {
    switch(platform) {
        case 'notion':
            return IntegrationPlatform.Notion
        case 'google':
            return IntegrationPlatform.Google
    }
}

export const indexData = createAsyncThunk(
    'userData/index',
    async(request: IndexRequest, { getState }) => {
        const { token } = (getState() as RootState).userAuth;

        if(token) {
            const res = await indexAccount(token, request);

            console.log('indexData', res);

            // ASSERT OK
            // maybe better handling here
            return res;
        }

        return null;
    }
)

interface UserDataState {
    userEmail: string
    integrations: Integration[];
    fetchStatus: FetchState;
}

const initialState: UserDataState = {
    userEmail: '',
    integrations: [],
    fetchStatus: FetchState.Idle
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addIntegration.fulfilled, (state) => {
            state.fetchStatus = FetchState.Complete;
        }),
        builder.addCase(addIntegration.rejected, (state) => {
            state.fetchStatus = FetchState.Failed;
        }),
        builder.addCase(getIntegrations.fulfilled, (state, action) => {
            state.fetchStatus = FetchState.Complete;
            state.integrations = action.payload;
        }),
        builder.addCase(indexData.fulfilled, (state) => {
            state.fetchStatus = FetchState.Complete;
        })
    }
});

// SELECTORS
export const userDataFetchStatusSelector = (state: RootState) => state.userData.fetchStatus;
export const userDataIntegrationsSelector = (state: RootState) => state.userData.integrations;
export const userDataIntegrationByPlatformSelector = (platform: IntegrationPlatform) => createSelector(
    userDataIntegrationsSelector,
    (integrations: Integration[]) => integrations.filter(integration => integration.platform === platform)
);

export default userDataSlice.reducer;