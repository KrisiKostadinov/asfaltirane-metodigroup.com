import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Home, About, Gallery, Contacts, Rouds } from "./pages/index";
import MainLayout from "./layouts/MainLayout";
import Street from "./pages/asphaltings/Street";
import Yard from "./pages/asphaltings/Yard";
import Alley from "./pages/asphaltings/Alley";
import Sidewalk from "./pages/asphaltings/Sidewalk";
import SmallAndBig from "./pages/asphaltings/SmallAndBig";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/za-nas",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/asfaltirane-na-patishta",
        element: <Rouds />,
      },
      {
        path: "/asfaltirane-na-ulitsi",
        element: <Street />,
      },
      {
        path: "/afaltirane-na-dvor",
        element: <Yard />,
      },
      {
        path: "/asfaltirane-na-alei",
        element: <Alley />,
      },
      {
        path: "/narezhdane-na-trotoar",
        element: <Sidewalk />,
      },
      {
        path: "/asfaltirane-na-malki-i-golemi-ploshti",
        element: <SmallAndBig />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </>
);
