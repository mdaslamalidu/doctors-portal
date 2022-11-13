import { createBrowserRouter } from "react-router-dom";
import Appoinments from "../Pages/Appoinments/Appoinments";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/appoinment",
        element: <Appoinments></Appoinments>,
      },
    ],
  },
]);
