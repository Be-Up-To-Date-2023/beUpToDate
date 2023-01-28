import React, { createContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import UseEffectComponent from "./components/hooks/useEffectComponent";
import UseRefComponent from "./components/hooks/useRefComponent";
import UseCallBackComponent from "./components/hooks/useCallBackComponent";
import NotFoundPage from "./pages/notFound/notFoundPage";
import Ordersprovider from "./components/hooks/useContextComponent";

import * as routes from "./routes/routes";

import "./styles/base/base.scss";
import OrdersComponent from "./components/orders";


function App() {
  const NumberContext = createContext();

  const router = createBrowserRouter([
    {
      path: routes.ROUTES_HOME_PAGE,
      element: <Home />,
    },
    {
      path: routes.ROUTES_USEREF,
      element: <UseRefComponent />,
    },
    {
      path: routes.ROUTES_USEEFFECT,
      element: <UseEffectComponent />,
    },
    {
      path: routes.ROUTES_USECALLBACK,
      element: <UseCallBackComponent />,
    },
    {
      path: routes.ROUTES_ORDERS,
      element: <OrdersComponent />,
    },

    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    // <React.StrictMode>
    <>
      <Ordersprovider>
        <Navbar />
        <RouterProvider router={router} />
      </Ordersprovider>
    </>
    // </React.StrictMode>
  );
}

export default App;
