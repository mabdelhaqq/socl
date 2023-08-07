import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";

const router= createBrowserRouter ([
  { 
    path: "/",
    element: <App/>  
  },
]);

const AppRoutes: React.FC = () => {
  return (
    <RouterProvider router={router} />
    
  );
};

export default AppRoutes;
