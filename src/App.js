import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home";
import NotFoundPage from "./pages/notFound/notFoundPage";
import SearchPage from "./pages/search/searchPage";

import { ROUTES_SEARCH_PAGE, ROUTES_HOME_PAGE } from "./routes/routes";

import "./styles/base/base.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES_HOME_PAGE,
      element: <Home />,
    },
    {
      path: ROUTES_SEARCH_PAGE,
      element: <SearchPage />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  return <></>;
}

export default App;
