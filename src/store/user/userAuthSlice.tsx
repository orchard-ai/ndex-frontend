import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { signupUser } from 'api';
import { UserSignupRequest } from 'api/models';
import { RootState } from 'store';

export const createUser = createAsyncThunk(
    'user/createUser',
    async (form: UserSignupRequest, { rejectWithValue }) => {

        const response = await signupUser(form);

        if (!response.ok) {
            const error = await response.text();
            return rejectWithValue(error);
        }

        return response;
    }
);

interface GoogleAuthState {
    clientId: string | null;
    credential: string | null;
}

const initialGoogleAuthState: GoogleAuthState = {
    clientId: null,
    credential: null
}

interface UserAuthState {
    userId: string | null;
    email: string | null;
    ndexToken: string | null;
    error: string | null;
    googleAuth: GoogleAuthState;
}

const initialState: UserAuthState = {
    userId: "TEMPID",
    email: null,
    ndexToken: "TEMPTOKEN",
    error: null,
    googleAuth: initialGoogleAuthState
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        clearUserAuth: (state) => {
            state.userId = null;
            state.error = null;
            state.ndexToken = null;
            state.googleAuth = initialGoogleAuthState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.userId = action.payload.userId;
            state.email = action.payload.email;
            state.ndexToken = action.payload.ndexToken;
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
export const userIdSelector = (state: RootState) => state.userAuth.userId;
export const userNdexTokenSelector = (state: RootState) => state.userAuth.ndexToken;
export const userErrorSelector = (state: RootState) => state.userAuth.error;

export default userAuthSlice.reducer;