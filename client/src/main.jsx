import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import HomePage from "./screens/HomePage.jsx";
import RootLayout from "./screens/RootLayout";
import { themeOptions } from "./theme";
import { Provider } from "react-redux";
import Login from "./screens/Login.jsx";
import Register from "./screens/Register.jsx";
import { store } from "./store/index.js";
import { Toaster } from "react-hot-toast";
import Profile from "./screens/Profile";
import PrivateRoute from "./components/PrivateRoute";
import PageNotFOund from "./screens/PageNotFOund";
import Reset from "./screens/Reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "*",
        element: <PageNotFOund />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "reset",
        element: <Reset />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "",
        element: <PrivateRoute />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={themeOptions}>
        <CssBaseline />
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
