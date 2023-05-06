import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import { store, persistor } from './store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import Settings from "routes/settings/Settings"
import Search from "routes/search/Search"
import NotionRedirect from "routes/redirects/NotionRedirect"
import AddFirstConnection from "routes/cta/AddFirstConnection"
import AuthScreen from "routes/authScreen"
import NotFound from "routes/notFound"

import PrivateRoute from "components/auth/PrivateRoute"
import { ROUTES } from "utils/constants"

const clientID = import.meta.env.VITE_CLIENT_ID;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* public routes */}
      <Route path={ROUTES.AUTHENTICATE} element={<AuthScreen/>} />
      <Route path={"/"} element={<AuthScreen/>} />

      {/* private routes */}
      <Route element={<PrivateRoute/>}>
        <Route path={ROUTES.SEARCH} element={<Search/>} />
        <Route path={ROUTES.ADD_FIRST_CONNECTION} element={<AddFirstConnection/>} />
        <Route path={ROUTES.SETTINGS} element={<Settings/>} />
        <Route path={ROUTES.NOTION_REDIRECT} element={<NotionRedirect/>} />
      </Route>

      {/* catch-all route */}
      <Route path="*" element={<NotFound/>} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientID}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
