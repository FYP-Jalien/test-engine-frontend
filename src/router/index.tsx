import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ReplicaTests from "../pages/container-info";
import TestSuite from "../pages/test-suite";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { path: "", element: <ReplicaTests /> },
      { path: "/test-suite", element: <TestSuite /> },
    ],
  },
]);

export default routes;
