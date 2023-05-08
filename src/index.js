import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", // main page
    element: <App />,
    errorElement: <h1>404 Not found page</h1>,
  },
  {
    path: "/videos/:keyword", //search page
    element: <div>Vidoes</div>,
  },
  {
    path: "/watch/:videoId", // watching video page
    element: <div>Watch</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
