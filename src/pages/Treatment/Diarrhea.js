import React from 'react'
import {
    Grid,
    FormControlLabel,
    Button,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';


const DiarrheaForm = () => {
    return (
        <React.Fragment>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="diarrheaAmount"
                    component={TextField}
                    type="text"
                    label="จำนวนครั้งในการถ่าย"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="diarrheaDetail"
                    component={TextField}
                    type="text"
                    label="ลักษณะอุจจาระ"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="stomachache"
                    component={TextField}
                    type="text"
                    label="ลักษณะการปวดท้อง"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="bowelSound"
                    component={TextField}
                    type="text"
                    label="bowel sound"
                    variant="outlined"
                    style={{ width: '100%' }}
                />
            </Grid>
            <Grid item={'true'} xs={12} align='center'>
                <FormControlLabel
                    label="คลื่นไส้/อาเจียน"
                    control={
                        <Field
                            name="isVomit"
                            component={Checkbox}
                            type="checkbox"
                        />
                    }
                />
                <FormControlLabel
                    label="อุจาระมีมูลเลือด"
                    control={
                        <Field
                            name="isFluxStool"
                            component={Checkbox}
                            type="checkbox"
                        />
                    }
                />
                <FormControlLabel
                    label="มีไข้"
                    control={
                        <Field
                            name="isFever"
                            component={Checkbox}
                            type="checkbox"
                        />
                    }
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
export default DiarrheaForm