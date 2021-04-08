import React from 'react'
import {
    Grid,
    FormControlLabel,
    Button,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';


const PainForm = () => {
    return (
        <React.Fragment>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="acheArea"
                    component={TextField}
                    type="text"
                    label="ปวดบริเวณ"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="acheDate"
                    component={TextField}
                    type="text"
                    label="เป็นมานาน (วัน)"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="painScore"
                    component={TextField}
                    type="text"
                    label="Pain score"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="acheDetail"
                    component={TextField}
                    type="text"
                    label="ลักษณะการปวด"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="trigger"
                    component={TextField}
                    type="text"
                    label="สิ่งที่กระตุ้น/สิ่งที่บรรเทา"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="crackDetail"
                    component={TextField}
                    type="text"
                    label="ร้าวไป"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item={'true'} xs={12}>
                <Field
                    fullWidth
                    required
                    name="physicalExamination"
                    component={TextField}
                    type="text"
                    label="การตรวจสอบทางกายภาพ"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </Grid>
        </React.Fragment>
    )
}
export default PainForm