import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "../auth/Login";

const router= createBrowserRouter ([
  { 
    path: "/",
    element: <App/>  
  },
  {
    path: "/app/login",
    element: <Login/>
  }
]);

const AppRoutes: React.FC = () => {
  return (
    <RouterProvider router={router} />
    
  );
};

export default AppRoutes;
