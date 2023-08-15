import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../auth/Login';
import HomePage from '../posts/HomePage';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/posts', element: <HomePage /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
