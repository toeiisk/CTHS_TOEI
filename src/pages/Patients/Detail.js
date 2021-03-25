import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { InfoCard } from '@mystiny/ui';
import DescriptionIcon from '@material-ui/icons/Description';
import PatientsForm from './Patients-form'

const PatientDetailPage = () => {

    return(
        <React.Fragment>
            <Box >
                <Grid container spacing={0}  alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Typography paragraph style={{fontWeight: 'bold', fontSize: '2em'}} >
                            <DescriptionIcon color="primary" fontSize="small" /> ลายระเอียดผู้ป่วย
                        </Typography>
                    </Grid>
                    <Grid item xs={6}  align='right'>
                        <Box style={{alignItems:'center', justifyContent:'flex-end'}}>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <InfoCard title='ข้อมูลผู้ป่วย'>
                            <PatientsForm />
                        </InfoCard>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default PatientDetailPage