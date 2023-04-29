import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { ProtectedRoute } from "components/auth/ProtectedRoute"
import { AuthLayout } from "components/auth/AuthLayer"

import { store } from './store';
import { Provider } from 'react-redux';

import Settings from "routes/settings/Settings"
import Home from "routes/home/Home"
import { Route } from "react-router-dom"
import NotionRedirect from "routes/redirects/NotionRedirect"
import AddFirstConnection from "routes/cta/AddFirstConnection"

const clientID = import.meta.env.VITE_CLIENT_ID

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/addconnection" element={<AddFirstConnection/>}></Route>
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      ></Route>
      <Route path='/notion-access-redirect' element={<NotionRedirect/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientID}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
