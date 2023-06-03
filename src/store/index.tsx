import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import notionReducer from "./notion/notionSlice";
import userAuthReducer from "./user/userAuthSlice";
import userDataReducer from "./user/userDataSlice";
import localSettingsReducer from "./local/localSettingsSlice";

import { isUsingDarkModeSelector } from "./local/localSettingsSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["localSettings"],
};

const userPersistConfig = {
  key: "userAuth",
  storage,
  whitelist: ["token", "userId"],
};

const rootReducer = combineReducers({
  userAuth: persistReducer(userPersistConfig, userAuthReducer),
  userData: userDataReducer,
  notion: notionReducer,
  localSettings: localSettingsReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// REHYDRATES LOCAL STATE CORRECTLY
store.subscribe(() => {
  if (store.getState()._persist.rehydrated) {
    const isDarkMode = isUsingDarkModeSelector(store.getState());

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark-background");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark-background");
    }
  }
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, persistor };
