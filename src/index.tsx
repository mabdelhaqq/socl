import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import AppRoutes from './helpers/AppRoutes';
import { AppProvider } from './helpers/app-store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
  </React.StrictMode>
);
