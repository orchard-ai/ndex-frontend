import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { signupUser } from 'api';
import { UserSignupRequest } from 'api/models';
import { RootState } from 'store';

export const createUser = createAsyncThunk(
    'user/createUser',
    async (form: UserSignupRequest) => {

        const response = await signupUser(form);

        return response;
    }
);

interface UserAuthState {
    token: string | null;
    error: string | null;
}

const initialState: UserAuthState = {
    token: null,
    error: null,
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

            localStorage.setItem('userAuth.token', action.payload.token);
        }),
        builder.addCase(createUser.rejected, (state) => {
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

export default userAuthSlice.reducer;