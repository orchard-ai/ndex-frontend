import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { signupUser, signinUser } from "api";
import { FetchState, UserAuthRequest } from "api/models";
import { RootState } from "store";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (form: UserAuthRequest, { rejectWithValue }) => {
    try {
      const response = await signupUser(form);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (form: UserAuthRequest, { rejectWithValue }) => {
    try {
      const response = await signinUser(form);
      console.log(response);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface UserAuthState {
  userId: string | null;
  token: string | null;
  error: string | null;
  fetchStatus: FetchState;
}

const initialState: UserAuthState = {
  userId: null,
  token: null,
  error: null,
  fetchStatus: FetchState.Idle,
};

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    clearUserAuth: (state) => {
      state.error = null;
      state.token = null;
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.userId = action.payload.user_id;
      state.token = action.payload.token;
      state.error = null;
      state.fetchStatus = FetchState.Complete;
    }),
      builder.addCase(createUser.pending, (state) => {
        state.error = null;
        state.fetchStatus = FetchState.Pending;
      });
    builder.addCase(createUser.rejected, (state, action) => {
      state.token = null;
      state.error = action.error.message ?? "Unknown error";
      state.fetchStatus = FetchState.Failed;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userId = action.payload.user_id;
      state.token = action.payload.token;
      state.error = null;
      state.fetchStatus = FetchState.Complete;
    }),
      builder.addCase(loginUser.pending, (state) => {
        state.error = null;
        state.fetchStatus = FetchState.Pending;
      });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.token = null;
      state.error = action.error.message ?? "Unknown error";
      state.fetchStatus = FetchState.Failed;
    });
  },
});

// ACTIONS
export const { clearUserAuth } = userAuthSlice.actions;

// SELECTORS
export const userIdSelector = (state: RootState) => state.userAuth.userId;
export const userTokenSelector = (state: RootState) => state.userAuth.token;
export const userErrorSelector = (state: RootState) => state.userAuth.error;
export const userFetchStatusSelector = (state: RootState) =>
  state.userAuth.fetchStatus;

export default userAuthSlice.reducer;
