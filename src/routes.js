import React from "react";
// import { Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Medicine from "./pages/Medicine";

const routes = [
  {
    path: "app",
    element: <Navbar />,
    children: [{ path: "medicine", element: <Medicine /> }],
  },
];

export default routes;
