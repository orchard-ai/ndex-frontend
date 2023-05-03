import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchNotionAccessToken } from 'api';
import { RootState } from 'store';

export const obtainAccessToken = createAsyncThunk(
    'notion/obtainAccessToken',
    async (tempCode: string) => {
        const response = await fetchNotionAccessToken(tempCode);

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }

        return response;
    }
);

interface NotionState {
    accessToken: string | null
}

const initialState: NotionState = {
    accessToken: null
};

export const notionSlice = createSlice({
    name: 'notion',
    initialState,
    reducers: {
        clearNotionAccessToken: (state) => {
            state.accessToken = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(obtainAccessToken.fulfilled, (state, action) => {
            state.accessToken = action.payload.access_token;
        })
    }
});

// ACTIONS
export const {
    clearNotionAccessToken
} = notionSlice.actions;

// SELECTORS
export const notionAccessTokenSelector = (state: RootState) => state.notion.accessToken;

export default notionSlice.reducer;