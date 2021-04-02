import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import {GET_PATIENTS} from './GraphQL/Querie'
import { useQuery } from '@apollo/client';

const useStyles = makeStyles((theme) => ({
	root: {
		boxAdmin: {},
		display: 'flex',
		'& div.MuiDataGrid-cell': {
			color: 'white',
		},
		'& div.MuiDataGrid-colCellTitle': {
			color: 'black',
		},
		'& div.MuiToolbar-root': {
			color: 'white',
		},
		'& div.MuiTablePagination-actions': {
			color: 'white',
		},
		'& div.MuiIconButton-label': {
			color: 'white',
		},
		'& div.MuiDataGrid-colCellWrapper': {
			backgroundColor: 'white',
		},
	},
}));

const columns = [
	{ field: "id", headerName: "ID", width: 200, flex: 1, resizable: true },
	{
		field: 'idcardNumber',
		headerName: 'ID Card',
		width: 200,
		flex: 1,
		resizable: true,
	},
	{
		field: 'firstname',
		headerName: 'First Name',
		width: 200,
		flex: 1,
		resizable: true,
	},
	{
		field: 'lastname',
		headerName: 'Last Lastname',
		width: 200,
		flex: 1,
		resizable: true,
	},
	{
		field: 'phone',
		headerName: 'Phone',
		width: 200,
		flex: 1,
		resizable: true,
	},
];

const Patientpage = () => {
	const classes = useStyles();
	let navigate = useNavigate();
	const { loading, error, data } = useQuery(GET_PATIENTS);
	if (loading) return 'Loading...';
  	if (error) return `Error! ${error.message}`;

	console.log(data)
	return (
		<React.Fragment className={classes.root}>
			<Box className={classes.boxAdmin}>
				<Grid container spacing={0} alignItems="center" justify="center">
					<Grid item xs={6}>
						<Typography variant="h5" paragraph style={{ fontWeight: 'bolder' }}>
							Patient list
						</Typography>
					</Grid>
					<Grid item xs={6} align="right">
						<Box style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
							<Link to="/app/patients/createpatients" style={{ textDecoration: 'none' }}>
								<Button startIcon={<AddIcon />} variant="contained" color="primary">
									Create new patients
								</Button>
							</Link>
						</Box>
					</Grid>
				</Grid>
				<Grid container spacing={0} alignItems="center" justify="center" style={{marginTop: 20}}>
        <Grid item xs={12}>
						<Typography variant="h6" paragraph style={{ fontWeight: 'light' }}>
							Patients for today
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<div style={{ height: 400, width: '100%', backgroundColor: 'white' }}>
							<DataGrid
								rows={data.allPatients.map((item) => ({
									id: item._id,
									idcardNumber: item.idcardNumber,
									firstname: item.firstname,
									lastname: item.lastname,
									phone: item.phone
								}))}
								columns={columns}
								pagination
								pageSize={10}
								onRowClick={(row) => navigate(`/app/patients/detail/${row.row.id}`)}
							/>
						</div>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default Patientpage;
