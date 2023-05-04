import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { signupUser, signinUser } from 'api';
import { FetchState, UserAuthRequest } from 'api/models';
import { RootState } from 'store';

export const createUser = createAsyncThunk(
    'user/createUser',
    async (form: UserAuthRequest) => {

        const response = await signupUser(form);

        return response;
    }
);

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (form: UserAuthRequest) => {

        const response = await signinUser(form);

        return response;
    }
);

interface UserAuthState {
    token: string | null;
    error: string | null;
    fetchStatus: FetchState;
}

const initialState: UserAuthState = {
    token: null,
    error: null,
    fetchStatus: FetchState.Idle
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        clearUserAuth: (state) => {
            state.error = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.error = null;
            state.fetchStatus = FetchState.Complete;
        }),
        builder.addCase(createUser.pending, (state) => {
            state.error = null;
            state.fetchStatus = FetchState.Pending;
        })
        builder.addCase(createUser.rejected, (state) => {
            state.token = null;
            state.error = 'Something went wrong';
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.error = null;
            state.fetchStatus = FetchState.Complete;
        }),
        builder.addCase(loginUser.pending, (state) => {
            state.error = null;
            state.fetchStatus = FetchState.Pending;
        })
        builder.addCase(loginUser.rejected, (state) => {
            state.token = null;
            state.error = 'Something went wrong';
        });
    }
});

// ACTIONS
export const {
    clearUserAuth
} = userAuthSlice.actions;

// SELECTORS
export const usertokenSelector = (state: RootState) => state.userAuth.token;
export const userErrorSelector = (state: RootState) => state.userAuth.error;
export const userFetchStatusSelector = (state: RootState) => state.userAuth.fetchStatus;

export default userAuthSlice.reducer;