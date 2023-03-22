import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { ProtectedRoute } from "components/Auth/ProtectedRoute"
import { AuthLayout } from "components/Auth/AuthLayer"

import Settings from "routes/Settings"
import Home from "routes/Home"
import { Route } from "react-router-dom"

const clientID = import.meta.env.VITE_CLIENT_ID

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      ></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
