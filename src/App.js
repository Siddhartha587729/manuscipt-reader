import * as React from "react";
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard, { dashboardAction } from './Pages/Dashboard';
import Login from "./Pages/Login";
import Main from "./Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    action: dashboardAction,
  },
  {
    path: "/login",
    element: <Login/>,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
