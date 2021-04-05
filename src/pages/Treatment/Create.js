import React from 'react';
import { Box, Grid, Typography, Button, TextField as MuiTextField } from '@material-ui/core';
import { InfoCard } from '@mystiny/ui';
import DescriptionIcon from '@material-ui/icons/Description';
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { useQuery } from '@apollo/client';
import { GET_PATIENT } from '../Patients/GraphQL/Querie'
import moment from 'moment';
import TreatmentForm from './Treatment-form'
const useStyles = makeStyles((theme) => ({
    create: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}));


const CreateTreatmentPage = () => {
    const navigate = useNavigate();
    const classes = useStyles();
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
                            <DescriptionIcon color="primary" fontSize="small" /> สร้างประวัติการรักษา
                        </Typography>
                    </Grid>
                    <Grid item xs={6} align='right'>
                        <Box style={{ alignItems: 'center', justifyContent: 'flex-end' }}>

                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <InfoCard title={
                            <React.Fragment>
                                <Box display="flex " style={{ fontSize: '1em', justifyContent: 'center', alignItems: 'center' }}>
                                    <h4>ข้อมูลผู้ป่วย</h4>
                                    <Button variant="contained" color="secondary" onClick={() => navigate(-1)} style={{ marginLeft: 20 }} className={classes.create}>
                                        ดูข้อมูลเพิ่มเติม
                                    </Button>
                                </Box>
                            </React.Fragment>
                        }
                        actionTopRight={
                            <Box display="flex">
                                <Button variant="contained" color="secondary" onClick={() => navigate(-1)} >
                                    ย้อนกลับ
                                </Button>
                            </Box>
                        }>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <MuiTextField
                                        id="standard-read-only-input"
                                        label="ชื่อ"
                                        defaultValue={data.patientById.firstname}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MuiTextField
                                        id="standard-read-only-input"
                                        label="นามสกุล"
                                        defaultValue={data.patientById.lastname}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MuiTextField
                                        id="standard-read-only-input"
                                        label="โรคประจำตัว"
                                        defaultValue={data.patientById.congenitalDisease.toString()}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MuiTextField
                                        id="standard-read-only-input"
                                        label="วัน/เดือน/ปีเกิด"
                                        defaultValue={`${moment(new Date(data.patientById.birthdate)).format("DD-MM-YYYY")}`}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </InfoCard>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }}>
                        <InfoCard
                            title={
                                <React.Fragment>
                                    <Box display="flex " style={{ fontSize: '1em', justifyContent: 'center', alignItems: 'center' }}>
                                        <h4>ประวัติการรักษา</h4>
                                    </Box>
                                </React.Fragment>
                            }
                        >
                            <TreatmentForm />
                        </InfoCard>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default CreateTreatmentPage