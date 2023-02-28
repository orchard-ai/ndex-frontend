import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Search from "./routes/Search"
import Settings from "routes/Settings"
import Home from "routes/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
