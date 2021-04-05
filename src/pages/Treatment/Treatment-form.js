import React, { useCallback, useEffect, useState } from 'react'
import {
    Grid,
    FormControlLabel,
    Button,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import { useMutation } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD_TREATMENT, UPDATE_TREATMENT} from './GraphQL/Mutation'
import {GET_TREATMENT_BY_ID} from './GraphQL/Querie'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
}));

const TreatmentForm = (props) => {
    const {mode, defaultdata} = props
    const classes = useStyles();
    let navigate = useNavigate();
    const [addTreatment] = useMutation(ADD_TREATMENT);
    const [updateTreatment] = useMutation(UPDATE_TREATMENT)
    let { id } = useParams();

    const normalizeheight = (value) => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");
        let number = parseInt(onlyNums)
        return number
    }
    const normalizeweight = (value) => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");
        let number = parseInt(onlyNums)
        return number
    }
    const normalizebloodpressure = (value) => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");
        let number = parseInt(onlyNums)
        return number
    }
    const normalizepulserate = (value) => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");
        let number = parseInt(onlyNums)
        return number
    }
    const normalizetempuraturet = (value) => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");
        let number = parseInt(onlyNums)
        return number
    }
    const normalizerespiratoryrate = (value) => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");
        let number = parseInt(onlyNums)
        return number
    }
    const normalizebmi = (value) => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");
        let number = parseInt(onlyNums)
        return number
    }
    const normalizeoxygensaturation = (value) => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");
        let number = parseInt(onlyNums)
        return number
    }

    const onSubmitCreate = useCallback(
        async (value) => {
            let medicerti = value.medicalCertificate ? true : false
            const variables = {
                record: {
                    patientId: id,
                    weight: value.weight,
                    height: value.height,
                    bloodPressure: value.bloodPressure,
                    pulseRate: value.pulseRate,
                    tempurature: value.tempurature,
                    respiratoryRate: value.respiratoryRate,
                    bmi: value.bmi,
                    oxygenSaturation: value.oxygenSaturation,
                    medicalCertificate: medicerti
                }
            }
            try {
                await addTreatment({ variables })
                alert('บันทึกข้อมูลสำเร็จ')
                navigate(`/app/patients/detail/${id}`)
            } catch (err) {
                console.log(err)
                alert('เกิดข้อผิดพลาด' + err.message)
            }
        },
        [addTreatment]
    )
    const onSubmitUpdate = useCallback(
        async (value) => {
            let medicerti = value.medicalCertificate ? true : false
            const variables = {
                id: defaultdata.treatmentById._id,
                record: {
                    patientId: defaultdata.treatmentById.patientId,
                    weight: value.weight,
                    height: value.height,
                    bloodPressure: value.bloodPressure,
                    pulseRate: value.pulseRate,
                    tempurature: value.tempurature,
                    respiratoryRate: value.respiratoryRate,
                    bmi: value.bmi,
                    oxygenSaturation: value.oxygenSaturation,
                    medicalCertificate: medicerti
                }
            }
            try {
                await updateTreatment({ variables})
                alert('บันทึกข้อมูลสำเร็จ')
                navigate(`/app/patients/detail/${defaultdata.treatmentById.patientId}`)
            } catch (err) {
                console.log(err)
                alert('เกิดข้อผิดพลาด     ' + err.message)
            }
        },
        [updateTreatment]
    )

    const onSubmit = mode === 'update' ? onSubmitUpdate : onSubmitCreate
    return (
        <React.Fragment>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, submitting }) => (
                    <form className={classes.root} noValidate autoComplete="true" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        fullWidth
                                        required
                                        name="weight"
                                        component={TextField}
                                        type="text"
                                        label="น้ำหนัก"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizeweight}
                                        initialValue={defaultdata.treatmentById.weight}
                                    />
                                ):(
                                    <Field
                                        fullWidth
                                        required
                                        name="weight"
                                        component={TextField}
                                        type="text"
                                        label="น้ำหนัก"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizeweight}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        fullWidth
                                        required
                                        name="height"
                                        component={TextField}
                                        type="text"
                                        label="ส่วนสูง"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizeheight}
                                        initialValue={defaultdata.treatmentById.height}
                                    />
                                ):(
                                    <Field
                                        fullWidth
                                        required
                                        name="height"
                                        component={TextField}
                                        type="text"
                                        label="ส่วนสูง"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizeheight}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        fullWidth
                                        required
                                        name="bloodPressure"
                                        component={TextField}
                                        type="text"
                                        label="ความดันโลหิต"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizebloodpressure}
                                        initialValue={defaultdata.treatmentById.bloodPressure}
                                    />
                                ):(
                                    <Field
                                        fullWidth
                                        required
                                        name="bloodPressure"
                                        component={TextField}
                                        type="text"
                                        label="ความดันโลหิต"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizebloodpressure}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        fullWidth
                                        required
                                        name="pulseRate"
                                        component={TextField}
                                        type="text"
                                        label="อัตราชีพจร"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizepulserate}
                                        initialValue={defaultdata.treatmentById.pulseRate}
                                    />
                                ):(
                                    <Field
                                        fullWidth
                                        required
                                        name="pulseRate"
                                        component={TextField}
                                        type="text"
                                        label="อัตราชีพจร"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizepulserate}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        fullWidth
                                        required
                                        name="tempurature"
                                        component={TextField}
                                        type="text"
                                        label="อุณหภูมิร่างกาย"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizetempuraturet}
                                        initialValue={defaultdata.treatmentById.tempurature}
                                    />
                                ):(
                                    <Field
                                        fullWidth
                                        required
                                        name="tempurature"
                                        component={TextField}
                                        type="text"
                                        label="อุณหภูมิร่างกาย"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizetempuraturet}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        fullWidth
                                        required
                                        name="respiratoryRate"
                                        component={TextField}
                                        type="text"
                                        label="อัตราการหายใจ"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizerespiratoryrate}
                                        initialValue={defaultdata.treatmentById.respiratoryRate}
                                    />
                                ):(
                                    <Field
                                        fullWidth
                                        required
                                        name="respiratoryRate"
                                        component={TextField}
                                        type="text"
                                        label="อัตราการหายใจ"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizerespiratoryrate}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        fullWidth
                                        required
                                        name="bmi"
                                        component={TextField}
                                        type="text"
                                        label="ดัชนีมวลกาย"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizebmi}
                                        initialValue={defaultdata.treatmentById.bmi}
                                    />
                                ):(
                                    <Field
                                        fullWidth
                                        required
                                        name="bmi"
                                        component={TextField}
                                        type="text"
                                        label="ดัชนีมวลกาย"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizebmi}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        fullWidth
                                        required
                                        name="oxygenSaturation"
                                        component={TextField}
                                        type="text"
                                        label="ออกซิเจนในเลือด"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizeoxygensaturation}
                                        initialValue={defaultdata.treatmentById.oxygenSaturation}
                                    />
                                ):(
                                    <Field
                                        fullWidth
                                        required
                                        name="oxygenSaturation"
                                        component={TextField}
                                        type="text"
                                        label="ออกซิเจนในเลือด"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        parse={normalizeoxygensaturation}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                {mode === 'update' ? (
                                    <FormControlLabel
                                        label="ต้องการใบรับรองแพทย์"
                                        control={
                                            <Field
                                                name="medicalCertificate"
                                                component={Checkbox}
                                                type="checkbox"
                                                initialValue={defaultdata.treatmentById.medicalCertificate}
                                            />
                                        }
                                    />
                                ):(
                                    <FormControlLabel
                                        label="ต้องการใบรับรองแพทย์"
                                        control={
                                            <Field
                                                name="medicalCertificate"
                                                component={Checkbox}
                                                type="checkbox"
                                            />
                                        }
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12} style={{ marginTop: 16, textAlign: 'center', width: '100%' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={submitting}
                                >
                                    บันทึกข้อมูล
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )
                }
            />
        </React.Fragment >
    )
}
export default TreatmentForm