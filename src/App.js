import * as React from "react";
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Login from "./Pages/Login";
import Main from "./Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
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
