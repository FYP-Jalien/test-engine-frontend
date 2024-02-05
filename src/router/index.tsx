import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import ReplicaTests from "../pages/replica-tests";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [{ path: "", element: <ReplicaTests /> }],
  },
]);

export default routes;
