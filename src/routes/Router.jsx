import {createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/secret/Secret";
import Register from "../pages/register/Register";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import Allusers from "../pages/dashboard/allUsers/Allusers";
import Additems from "../pages/dashboard/addItems/Additems";
import AdminRoute from "./AdminRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
       
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        // normal users routes
       {
        path:'cart',
        element: <Cart></Cart>
       },
      //  Only admin routes
      {
        path: 'users',
        element: <AdminRoute><Allusers></Allusers></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><Additems></Additems></AdminRoute>
      }
      ]

    }
  ]);