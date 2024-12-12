import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Chart from "./pages/Chart/Chart";
import Error from "./pages/Error/Error";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: "/chart/:symbol",
    element: <Chart />,
    errorElement: <Error />,
  },
];

const router = createBrowserRouter(routes);

export default router;
