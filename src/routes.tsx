import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { HomePage } from "./pages/HomePage";
import { GamesPage } from "./pages/GamesPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:id",
        element: <GamesPage />,
      },
    ],
  },
]);

export default routes;
