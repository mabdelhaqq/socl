import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../auth/Login';
import HomePage from '../posts/HomePage';
import MasterLayout from '../layout/MasterLayout';
import PostDetails from '../posts/PostDetails';
import AddNewPost from '../posts/AddNewPost';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    children: [
      { path: '/posts', element: <PrivateRoute path="/" element={<HomePage />} /> },
      { path: '/posts/:id', element: <PrivateRoute path="/" element={<PostDetails />} /> },
      { path: '/create', element: <PrivateRoute path="/" element={<AddNewPost />} /> }
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