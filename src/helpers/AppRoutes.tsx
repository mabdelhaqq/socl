import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Login from "../auth/Login";
import { AppProvider } from "./app-store";

const router= createBrowserRouter ([
  { 
    path: "/",
    element: <AppProvider> <App/> </AppProvider>  
  },
  {
    path: "/app/login",
    element: <AppProvider> <Login/> </AppProvider>
  }
]);

const AppRoutes: React.FC = () => {
  return (
    <RouterProvider router={router} />
    
  );
};

export default AppRoutes;
