import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import { addIntegrationForUser, fetchNotionAccessToken, getUserIntegrations, indexNotion } from "api";
import { AddIntegrationRequest, FetchState, IndexRequest, Integration, IntegrationPlatform, IntegrationTempCode } from "api/models";
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
                        const { access_token, ...extras } = notionAuthResponse;

                        const { email } = extras.owner.user.person;

                        const newIntegration: AddIntegrationRequest = {
                            email: email,
                            oauth_provider_id: null,
                            platform: IntegrationPlatform.Notion,
                            scopes: [],
                            access_token: access_token,
                            extras: extras
                        }

                        // NEED TO ASSERT OK
                        await addIntegrationForUser(token, newIntegration);

                        return {
                            email: email,
                            oauth_provider_id: null,
                            platform: IntegrationPlatform.Notion,
                            scopes: []
                        } as Integration;
                    } catch {
                        rejectWithValue('Error occurred while trying to add integration');
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
            return response.integrations.map(res => convertIntegration(res));
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
    }
}

export const indexData = createAsyncThunk(
    'userData/index',
    async(request: IndexRequest, { getState }) => {
        const { token } = (getState() as RootState).userAuth;

        if(token) {
            const response = await indexNotion(token, request);

            console.log('indexData', response);

            // ASSERT OK
            // maybe better handling here
            return response;
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
        builder.addCase(addIntegration.fulfilled, (state, action) => {
            state.fetchStatus = FetchState.Complete;
            state.integrations = [...state.integrations, action.payload];
        }),
        builder.addCase(addIntegration.rejected, (state) => {
            state.fetchStatus = FetchState.Failed;
        }),
        builder.addCase(getIntegrations.fulfilled, (state, action) => {
            state.fetchStatus = FetchState.Complete;
            state.integrations = action.payload;
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