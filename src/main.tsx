import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"

import Search from "./routes/Search"
import Settings from "routes/Settings"
import Home from "routes/Home"

const clientID = import.meta.env.VITE_CLIENT_ID

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
