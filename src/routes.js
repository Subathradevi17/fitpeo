import React, { Suspense } from "react";
import DrawerComponent from "./Layout/Drawercomponents";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Products from "./screens/Products";

function Routes(props) {
  const routerConfig = [
    {
      path: "/",
      element: <DrawerComponent />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/product",
          element: <Products />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routerConfig);

  return (
    <Suspense>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}

export default Routes;
