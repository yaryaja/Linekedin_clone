
import Login from '../Pages/Login'

import Register from '../Pages/Register';
import Home from '../Pages/Home';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Profile from '../Pages/Profile';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Login/>

      </div>,
    },
    {
      path: "/register",
      element: <div>
        <Register/>

      </div>,
    },
    {
      path: "/home",
      element: <div>
        <Home/>

      </div>,
    },
    {
      path: "/profile",
      element: <div>
        <Profile/>

      </div>,
    },
  ]);
  
