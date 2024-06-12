import * as React from "react";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Dashboard, { dashboardAction } from './Pages/Dashboard';
import Login from "./Pages/Login";
import Main from "./Layout/Main";
import Display from "./Pages/Display";
import UploadForm from "./Pages/UploadForm";
import Team from "./Components/Team";
import Signup from "./Pages/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        index: true,
        element: <Dashboard/>,
        action: dashboardAction,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/team",
        element: <Team/>,
      },
      {
        path: "/display/:id",
        element: <Display/>
      },
      {
        path:'/upload',
        element:<UploadForm/>
      }
    ]
  },
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
