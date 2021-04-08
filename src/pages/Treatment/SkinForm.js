import React from 'react'
import {
    Grid,
    FormControlLabel,
    Button,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';


const SkinForm = () => {
    return (
        <React.Fragment>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="rashArea"
                    component={TextField}
                    type="text"
                    label="บริเวณผื่น"
                    variant="outlined"
                    style={{ width: '100%' }}
                    multiline
                    rows={2}
                />
            </Grid>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="rashDate"
                    component={TextField}
                    type="text"
                    label="เป็นมานาน (วัน)"
                    variant="outlined"
                    style={{ width: '100%' }}
                    multiline
                    rows={2}
                />
            </Grid>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="rashDetail"
                    component={TextField}
                    type="text"
                    label="สัมผัสโดน"
                    variant="outlined"
                    style={{ width: '100%' }}
                    multiline
                    rows={2}
                />
            </Grid>
            <Grid item={'true'} xs={6}>
                <Field
                    fullWidth
                    required
                    name="physicalExamination"
                    component={TextField}
                    type="text"
                    label="การตรวจสอบทางกายภาพ"
                    variant="outlined"
                    style={{ width: '100%' }}
                    multiline
                    rows={2}
                />
            </Grid>
            <Grid item={'true'} xs={12} align='center'>
                <FormControlLabel
                    label="มีอาการคัน"
                    control={
                        <Field
                            name="isItching"
                            component={Checkbox}
                            type="checkbox"
                        />
                    }
                />
                <FormControlLabel
                    label="มีอาการปวด"
                    control={
                        <Field
                            name="isPain"
                            component={Checkbox}
                            type="checkbox"
                        />
                    }
                />
                <FormControlLabel
                    label="มีอารการแสบ"
                    control={
                        <Field
                            name="isStinging"
                            component={Checkbox}
                            type="checkbox"
                        />
                    }
                />
                <FormControlLabel
                    label="มีอาการปวด"
                    control={
                        <Field
                            name="isSwelling"
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
        </React.Fragment>
    )
}
export default SkinForm