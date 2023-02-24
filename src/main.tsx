import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Settings from "routes/Settings";
import SearchCommandPalette from "components/SearchCommand";
import { KBarProvider } from "kbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <KBarProvider actions={[]}>
        <Home />
      </KBarProvider>
    ),
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
