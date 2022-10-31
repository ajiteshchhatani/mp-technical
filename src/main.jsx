import React from 'react'
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Invoices from './invoices/Invoices';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Invoices />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>
)
