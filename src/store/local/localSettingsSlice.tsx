import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

interface LocalSettingsState {
  darkMode: boolean;
}

const initialState: LocalSettingsState = {
  darkMode: false,
};

export const localSettingsSlice = createSlice({
  name: "localSettings",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      if (state.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

// ACTIONS
export const { toggleTheme } = localSettingsSlice.actions;

// SELECTORS
export const isUsingDarkModeSelector = (state: RootState) =>
  state.localSettings.darkMode;

export default localSettingsSlice.reducer;
