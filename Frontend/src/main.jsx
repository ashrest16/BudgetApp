import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import "./index.css";

const container = document.getElementById('root'); // Get the root element from your HTML
const root = createRoot(container); // Create a root using createRoot

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
