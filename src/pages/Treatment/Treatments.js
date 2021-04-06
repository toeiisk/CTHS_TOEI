import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { GET_TREATMENTS } from './GraphQL/Querie'
import { useQuery } from '@apollo/client';
import moment from 'moment'

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
    { field: 'id', headerName: 'ID', width: 250, resizable: true },
    {
        field: 'createdAt',
        headerName: 'Date',
        width: 200,
        resizable: true,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
        resizable: true,
    },
    {
        field: 'lastname',
        headerName: 'Lastname',
        width: 200,
        resizable: true,
    },
    {
        field: 'idcardNumber',
        headerName: 'Idcard Number',
        width: 200,
    },
];

const Treatmentpage = () => {
    const classes = useStyles();
    let navigate = useNavigate();
    const { loading, error, data } = useQuery(GET_TREATMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data)
    return (
        <React.Fragment className={classes.root}>
            <Box className={classes.boxAdmin}>
                <Grid container spacing={0} alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Typography paragraph style={{ fontWeight: 'bold' }} variant="h5">
                          Treatment
                        </Typography>
                    </Grid>
                    <Grid item xs={6} align='right'>
                        <Box style={{ alignItems: 'center', justifyContent: 'flex-end' }}>

                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={0} alignItems="center" justify="center" style={{ marginTop: 20 }}>
                    <Grid item xs={12}>
                        <div style={{ height: 500, width: '100%', backgroundColor: 'white' }}>
                            <DataGrid
								rows={data.allTreatments.map((item) => ({
                                    id: item._id,
                                    createdAt: moment(new Date(item.createdAt)).format('DD/MM/YYYY'),
                                    name: item.patient.firstname,
                                    lastname: item.patient.lastname,
                                    idcardNumber: item.patient.idcardNumber
                                }))}
                                columns={columns}
                                pagination
                                pageSize={10}
                                onRowClick={(row) => navigate(`/app/treatment/detail/${row.row.id}`)}
							/>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

export default Treatmentpage;