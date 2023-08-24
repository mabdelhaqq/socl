import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../auth/Login';
import HomePage from '../posts/HomePage';
import MasterLayout from '../layout/MasterLayout';
import PostDetails from '../posts/PostDetails';
import AddNewPost from '../posts/AddNewPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    children: [
      { path: '/posts', element: <HomePage /> },
      { path: '/posts/:id', element: <PostDetails/>},
      { path: '/create', element: <AddNewPost/>}
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