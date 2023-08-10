import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "../auth/Login";
import { UserProvider } from "./app-store";

const router= createBrowserRouter ([
  { 
    path: "/",
    element: <UserProvider> <App/> </UserProvider>  
  },
  {
    path: "/app/login",
    element: <UserProvider> <Login/> </UserProvider>
  }
]);

const AppRoutes: React.FC = () => {
  return (
    <RouterProvider router={router} />
    
  );
};

export default AppRoutes;
