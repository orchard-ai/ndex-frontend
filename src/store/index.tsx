import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import notionReducer from './notion/notionSlice';
import userAuthReducer from './user/userAuthSlice';
import localSettingsReducer from './local/localSettingsSlice';

import { isUsingDarkModeSelector } from './local/localSettingsSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
	key: 'root',
	storage,
  whitelist: ['localSettings']
};

const userPersistConfig = {
  key: 'userAuth',
  storage,
  whitelist: ['token']
};

const rootReducer = combineReducers({
  userAuth: persistReducer(userPersistConfig, userAuthReducer),
  notion: notionReducer,
  localSettings: localSettingsReducer,
});

const persistedReducer = persistReducer(
	rootPersistConfig,
	rootReducer
);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

// REHYDRATES LOCAL STATE CORRECTLY
store.subscribe(() => {
  if(store.getState()._persist.rehydrated) {
    const isDarkMode = isUsingDarkModeSelector(store.getState());

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
})

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store, persistor };