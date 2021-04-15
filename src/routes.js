import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarMain from './components/Navbar/Main/index';
import Homepage from './pages/Homepage';

import Patients from './pages/Patients/Patients';
import CreatePatients from './pages/Patients/Create';
import PatientDetail from './pages/Patients/Detail';

import User from './pages/Admins/User';
import UserCreate from './pages/Admins/Creat';
import UserDetail from './pages/Admins/Detail';

import Medicine from './pages/Medicine/DrugStore/Medicine';
import MedicineDetail from './pages/Medicine/DrugStore/Detail';
import CreateMedicine from './pages/Medicine/DrugStore/Create';

import Prescription from './pages/Medicine/Prescription/Prescription';
import DetailPrescription from './pages/Medicine/Prescription/Detail';
import Treatment from './pages/Treatment/Treatments';
import CreateTreatment from './pages/Treatment/Create';
import DetailTreatment from './pages/Treatment/Detail'

import Diagnosis from './pages/Dianosis/Dianosis';
import DetailDiagnosis from './pages/Dianosis/Detail'

import Report from './pages/Report';
import Login from './pages/Login';
import Register from './pages/Register';

const routes = (user) => [
	{
		path: 'app',
		element: user === null ? <Navigate to="/login" /> : <Navbar />,
		children: [
			{ path: 'medicine', element: <Prescription /> },
			{ path: 'medicine/drugstore', element: <Medicine /> },
			{ path: 'medicine/detail/:id', element: <DetailPrescription /> },
			{ path: 'medicine/drugstore/detail/:id', element: <MedicineDetail /> },
			{ path: 'medicine/drugstore/create', element: <CreateMedicine /> },
			{ path: 'homepage', element: <Homepage /> },
			{ path: 'patients', element: <Patients /> },
			{ path: 'patients/createpatients', element: <CreatePatients /> },
			{ path: 'patients/detail/:id', element: <PatientDetail /> },
			{ path: 'admin', element: <User /> },
			{ path: 'admin/create', element: <UserCreate /> },
			{ path: 'admin/detail/:id', element: <UserDetail /> },
			{ path: 'diagnosis', element: <Diagnosis /> },
			{ path: 'diagnosis/detail/:id', element: <DetailDiagnosis/> },
			{ path: '/treatment/create/patientId/:id', element: <CreateTreatment /> },
			{ path: 'treatment/detail/:id', element: <DetailTreatment /> },
			{ path: 'treatment', element: <Treatment /> },
			{ path: 'report', element: <Report /> },
		],
	},
	{
		path: '/',
		element:  user === null ? <NavbarMain /> : <Navigate to="/app/homepage" />,
		children: [
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Register /> },
			{ path: '/', element: <Navigate to="/app/homepage" /> },
		],
	},
];

export default routes;
