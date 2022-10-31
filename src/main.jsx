import React from 'react'
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Invoices from './invoices/Invoices';
import InvoiceForm from './invoice-form/InvoiceForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Invoices />
  },
  {
    path: "/invoiceform",
    element: <InvoiceForm />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>
)
