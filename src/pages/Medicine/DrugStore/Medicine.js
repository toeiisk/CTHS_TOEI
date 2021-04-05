import React from "react";
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';

const useStyles = makeStyles(() => ({
  root: {
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
  boxAdmin: {},
}));

const columns = [
	{ field: 'id', headerName: 'ID', width: 250, resizable: true },
	{
		field: 'name',
		headerName: 'Name',
		width: 200,
		resizable: true,
	},
	{
		field: 'description',
		headerName: 'Description',
		width: 200,
		resizable: true,
	},
	{
		field: 'amount',
		headerName: 'Amount',
		width: 200,
  },
  {
		field: 'unitType',
		headerName: 'Unit Type',
		resizable: true,
		width: 200,

	},
];

const rows = [{id: '1', name:'Sara', description:'แก้ปวด', amount: 500, unitType: 'ขวด'}, {id: '2', name:'Para', description:'แก้ปวด', amount: 500, unitType: 'ขวด'}]

const Medicinepage = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  return (
    <React.Fragment className={classes.root}>
      <Box className={classes.boxAdmin}>
      <Grid container spacing={0} alignItems="center" justify="center">
					<Grid item xs={12} md={6}>
						<Typography variant="h5" paragraph style={{ fontWeight: 'bolder' }}>
							Drug Storehouse
						</Typography>
					</Grid>
					<Grid item xs={12} md={6} align="right">
						<Box style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
							<Link to="/app/medicine/drugstore/create" style={{ textDecoration: 'none' }}>
								<Button startIcon={<AddIcon />} variant="contained" color="primary">
									Create new medicine
								</Button>
							</Link>
						</Box>
					</Grid>
				</Grid>
				<Grid container spacing={0} alignItems="center" justify="center" style={{ marginTop: 20 }}>
					<Grid item xs={12}>
						<div style={{ height: 500, width: '100%', backgroundColor: 'white' }}>
							<DataGrid
								rows={rows}
								columns={columns}
								pagination
								pageSize={10}
								// onRowClick={(row) => navigate(`/app/patients/detail/${row.row.id}`)}
							/>
						</div>
					</Grid>
				</Grid>
      </Box>
    </React.Fragment>
  );
};

export default Medicinepage;
