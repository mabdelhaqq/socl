import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "../auth/Login";
import HomePage from "../posts/HomePage";

const router= createBrowserRouter ([
  { 
    path: "/",
    element: <App/>  
  },
  {
    path: "/app/login",
    element: <Login/>
  },
  {
    path: "/posts",
    element: <HomePage/>
  }
]);

const AppRoutes: React.FC = () => {
  return (
    <RouterProvider router={router} />
    
  );
};

export default AppRoutes;
