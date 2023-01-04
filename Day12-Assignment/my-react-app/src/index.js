import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./utils/constant";
//import App from './App';
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <RouterProvider router={appRouter} />;
  </React.StrictMode>
);









