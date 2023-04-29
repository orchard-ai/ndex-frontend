import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signupUser } from 'api';
import { UserSignupRequest } from 'api/models';
import { RootState } from 'store';

export const createUser = createAsyncThunk(
    'user/createUser',
    async (form: UserSignupRequest) => {

        const response = await signupUser(form);

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }

        return response;
    }
);

interface UserAuthState {
    userId: string | null
}

const initialState: UserAuthState = {
    userId: null
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        clearUserAuth: (state) => {
            state.userId = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.userId = action.payload.userId;
        })
    }
});

// ACTIONS
export const {
    clearUserAuth
} = userAuthSlice.actions;

// SELECTORS
export const userIdSelector = (state: RootState) => state.userAuth.userId;

export default userAuthSlice.reducer;