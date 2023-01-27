import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hooks from "./components/hooks";

import Home from "./pages/home";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/notFound/notFoundPage";
import SearchPage from "./pages/search/searchPage";

import * as routes from "./routes/routes";

import "./styles/base/base.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: routes.ROUTES_HOME_PAGE,
      element: <Home />,
    },
    {
      path: routes.ROUTES_SEARCH_PAGE,
      element: <SearchPage />,
    },
    {
      path: routes.ROUTES_LOGIN_PAGE,
      element: <LoginPage />,
    },
    {
      path: routes.ROUTES_HOOKS,
      element: <Hooks />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
  );
}

export default App;
