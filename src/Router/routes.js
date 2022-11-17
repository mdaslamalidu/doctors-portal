import { createBrowserRouter } from "react-router-dom";
import DahsboardLayout from "../Layout/DahsboardLayout";
import Main from "../Layout/Main";
import Appoinments from "../Pages/Appoinments/Appoinments/Appoinments";
import MyAppointment from "../Pages/Dashbord/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/appoinment",
        element: <Appoinments></Appoinments>,
      },
    ],
  },
  {
    path: "/dashbord",
    element: (
      <PrivateRoute>
        <DahsboardLayout></DahsboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashbord",
        element: <MyAppointment></MyAppointment>,
      },
    ],
  },
]);
