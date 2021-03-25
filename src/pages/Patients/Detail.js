import React from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { InfoCard } from '@mystiny/ui';
import DescriptionIcon from '@material-ui/icons/Description';
import PatientsForm from './Patients-form'
import { useNavigate } from 'react-router-dom';


const PatientDetailPage = () => {
    const navigate = useNavigate();
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
                            <PatientsForm />
                        </InfoCard>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default PatientDetailPage