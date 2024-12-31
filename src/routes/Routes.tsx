import RootLayout from "@/layouts/RootLayout";
import DishDetail from "@/pages/DishDetail";
import Dishes from "@/pages/Dishes";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dishes",
        element: <Dishes />,
      },
      {
        path: "/dishes/:categoryName",
        element: <Dishes />,
      },
      {
        path: "/dish/:id",
        element: <DishDetail />,
      },
    ],
  },
]);
