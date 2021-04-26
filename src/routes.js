import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarMain from './components/Navbar/Main/index';

const Homepage = React.lazy(() => import('./pages/Homepage'));
const Patients = React.lazy(() => import ('./pages/Patients/Patients'));
const CreatePatients = React.lazy(() => import('./pages/Patients/Create'));
const PatientDetail = React.lazy(() => import('./pages/Patients/Detail'));

const User = React.lazy(() => import('./pages/Admins/User'));
const UserCreate = React.lazy(() => import( './pages/Admins/Creat'));
const UserDetail = React.lazy(() => import('./pages/Admins/Detail'));

const Medicine = React.lazy(() => import('./pages/Medicine/DrugStore/Medicine'));
const MedicineDetail = React.lazy(() => import('./pages/Medicine/DrugStore/Detail'));
const CreateMedicine = React.lazy(() => import('./pages/Medicine/DrugStore/Create'));

const Prescription = React.lazy(() => import('./pages/Medicine/Prescription/Prescription'));
const DetailPrescription = React.lazy(() => import('./pages/Medicine/Prescription/Detail'));
const Treatment = React.lazy(() => import('./pages/Treatment/Treatments'));
const CreateTreatment = React.lazy(() => import('./pages/Treatment/Create'));
const DetailTreatment = React.lazy(() => import('./pages/Treatment/Detail'))

const Diagnosis = React.lazy(() => import('./pages/Dianosis/Dianosis'));
const DetailDiagnosis = React.lazy(() => import( './pages/Dianosis/Detail'))

const Report = React.lazy(() => import('./pages/Report'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));

const routes = (user) => [
	{
		path: 'app',
		element: user === null ? <Navigate to="/login" /> : <Navbar />,
		children: [
			{ path: 'medicine', element:  <React.Suspense fallback={<h1>Loading ...</h1>}><Prescription /></React.Suspense> },
			{ path: 'medicine/drugstore', element: <React.Suspense fallback={<h1>Loading ...</h1>}><Medicine /></React.Suspense> },
			{ path: 'medicine/detail/:id', element: <React.Suspense fallback={<h1>Loading ...</h1>}><DetailPrescription /> </React.Suspense>},
			{ path: 'medicine/drugstore/detail/:id', element: <React.Suspense fallback={<h1>Loading ...</h1>}><MedicineDetail /></React.Suspense> },
			{ path: 'medicine/drugstore/create', element: <React.Suspense fallback={<h1>Loading ...</h1>}><CreateMedicine /> </React.Suspense>},
			{ path: 'homepage', element: <React.Suspense fallback={<h1>Loading ...</h1>}><Homepage /> </React.Suspense>},
			{ path: 'patients', element: <React.Suspense fallback={<h1>Loading ...</h1>}><Patients /> </React.Suspense>},
			{ path: 'patients/createpatients', element: <React.Suspense fallback={<h1>Loading ...</h1>}><CreatePatients /> </React.Suspense>},
			{ path: 'patients/detail/:id', element: <React.Suspense fallback={<h1>Loading ...</h1>}><PatientDetail /> </React.Suspense>},
			{ path: 'admin', element: <React.Suspense fallback={<h1>Loading ...</h1>}><User /> </React.Suspense>},
			{ path: 'admin/create', element: <React.Suspense fallback={<h1>Loading ...</h1>}><UserCreate /> </React.Suspense>},
			{ path: 'admin/detail/:id', element: <React.Suspense fallback={<h1>Loading ...</h1>}><UserDetail /> </React.Suspense>},
			{ path: 'diagnosis', element: <React.Suspense fallback={<h1>Loading ...</h1>}><Diagnosis /> </React.Suspense>},
			{ path: 'diagnosis/detail/:id', element:<React.Suspense fallback={<h1>Loading ...</h1>}> <DetailDiagnosis/> </React.Suspense>},
			{ path: '/treatment/create/patientId/:id', element: <React.Suspense fallback={<h1>Loading ...</h1>}><CreateTreatment /> </React.Suspense>},
			{ path: 'treatment/detail/:id', element: <React.Suspense fallback={<h1>Loading ...</h1>}><DetailTreatment /> </React.Suspense>},
			{ path: 'treatment', element: <React.Suspense fallback={<h1>Loading ...</h1>}><Treatment /> </React.Suspense>},
			{ path: 'report', element: <React.Suspense fallback={<h1>Loading ...</h1>}><Report /> </React.Suspense>},
		],
	},
	{
		path: '/',
		element:  user === null ? <NavbarMain /> : <Navigate to="/app/homepage" />,
		children: [
			{ path: 'login', element: <React.Suspense fallback={<h1>Loading ...</h1>}><Login /></React.Suspense> },
			{ path: 'register', element: <React.Suspense fallback={<h1>Loading ...</h1>}><Register /> </React.Suspense>},
			{ path: '/', element: <Navigate to="/app/homepage" /> },
		],
	},
];

export default routes;
