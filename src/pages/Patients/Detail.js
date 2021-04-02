import React from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { InfoCard } from '@mystiny/ui';
import DescriptionIcon from '@material-ui/icons/Description';
import PatientsForm from './Patients-form'
import { useNavigate, useParams } from 'react-router-dom';
import {GET_PATIENT} from './GraphQL/Querie'
import { useQuery } from '@apollo/client';


const PatientDetailPage = () => {
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
    
    console.log(data)
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
                            <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
                                ย้อนกลับ
                            </Button>
                        }>
                            <PatientsForm defaultdata={data} mode={'update'}/>
                        </InfoCard>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default PatientDetailPage