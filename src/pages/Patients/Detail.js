import React from 'react';
import { Box, Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { InfoCard } from '@mystiny/ui';
import DescriptionIcon from '@material-ui/icons/Description';
import PatientsForm from './Patients-form'
import { useNavigate, useParams } from 'react-router-dom';
import { GET_PATIENT } from './GraphQL/Querie'
import { useQuery } from '@apollo/client';
import { green } from '@material-ui/core/colors';
import { DataGrid } from '@material-ui/data-grid';
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
    create: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
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
        field: 'weight',
        headerName: 'Weight',
        width: 200,
        resizable: true,
    },
    {
        field: 'height',
        headerName: 'Height',
        width: 200,
        resizable: true,
    },
    {
        field: 'tempurature',
        headerName: 'Tempurature',
        width: 200,
    },
];

const PatientDetailPage = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    let { id } = useParams();
    const { loading, error, data } = useQuery(GET_PATIENT, {
        variables: {
            id
        },
        fetchPolicy: 'cache-and-network',
    });

    if (loading) return "...Loading";
    if (error) return `Error! ${error}`;

    return (
        <React.Fragment>
            <Box >
                <Grid container spacing={0} alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Typography paragraph style={{ fontWeight: 'bold', fontSize: '2em' }} >
                            <DescriptionIcon color="primary" fontSize="small" /> รายละเอียดผู้ป่วย
                        </Typography>
                    </Grid>
                    <Grid item xs={6} align='right'>
                        <Box style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <InfoCard title='ข้อมูลผู้ป่วย' actionTopRight={
                            <Box display="flex">
                                <Button variant="contained" color="primary" onClick={() => navigate(`/app/treatment/create/patientId/${id}`)} style={{ marginRight: 10 }} className={classes.create}>
                                    สร้างประวัติการรักษา
                                </Button>
                                <Button variant="contained" color="secondary" onClick={() => navigate(-1)} >
                                    ย้อนกลับ
                                </Button>
                            </Box>
                        }>
                            <PatientsForm defaultdata={data} mode={'update'} />
                        </InfoCard>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }}>
                        <InfoCard title='ประวัติการรักษา'>
                            <Grid container spacing={0} alignItems="center" justify="center" style={{ marginTop: 20 }}>
                                <Grid item xs={12}>
                                    <div style={{ height: 500, width: '100%', backgroundColor: 'white' }}>
                                        <DataGrid
                                            rows={data.patientById.treatment?.map((item) => ({
                                                id: item._id,
                                                createdAt: moment(new Date(item.createdAt)).format('DD/MM/YYYY'),
                                                weight: item.weight,
                                                height: item.height,
                                                tempurature: item.tempurature
                                            }))}
                                            columns={columns}
                                            pagination
                                            pageSize={10}
                                            onRowClick={(row) => navigate(`/app/treatment/detail/${row.row.id}`)}
                                        />
                                    </div>
                                </Grid>
                            </Grid>
                        </InfoCard>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default PatientDetailPage