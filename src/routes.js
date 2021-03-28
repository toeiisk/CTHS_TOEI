import React from "react";
import { Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import NavbarMain from "./components/Navbar/Main/index";
// Page
import Homepage from "./pages/Homepage";

import Patients from "./pages/Patients/Patients";
import CreatePatients from "./pages/Patients/Create";
import PatientDetail from "./pages/Patients/Detail"

import User from "./pages/Admins/User";
import UserCreate from "./pages/Admins/Creat"
import UserDetail from "./pages/Admins/Detail"

import Diagnosis from "./pages/Diagnosis";
import Medicine from "./pages/Medicine";
import Treatment from "./pages/Treatment";
import Report from "./pages/Report";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routes = [
  {
    path: "app",
    element: <Navbar />,
    children: [
      { path: "medicine", element: <Medicine /> },
      { path: "homepage", element: <Homepage /> },
      { path: "patients", element: <Patients /> },
      { path: "patients/createpatients", element: <CreatePatients /> },
      { path: "patients/detail/:id", element: <PatientDetail /> },
      { path: "admin", element: <User /> },
      { path: "admin/create", element: <UserCreate /> },
      { path: "admin/detail/:id", element: <UserDetail /> },
      { path: "diagnosis", element: <Diagnosis /> },
      { path: "treatment", element: <Treatment /> },
      { path: "report", element: <Report /> },
    ],
  },
  {
    path: "/",
    element: <NavbarMain />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: '/', element: <Navigate to="/app/homepage" /> },
    ],
  },
];

export default routes;
