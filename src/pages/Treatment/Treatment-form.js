import React, { useCallback, useEffect, useState } from 'react'
import {
    Grid,
    FormControl,
    NativeSelect,
    InputBase,
    InputLabel,
    Button,
    FormControlLabel
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import { useMutation } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD_TREATMENT, UPDATE_TREATMENT } from './GraphQL/Mutation'
import { GET_TREATMENT_BY_ID } from './GraphQL/Querie'
import GeneralForm from './GenaralForm'
import EyesForm from './EyesForm'
import SkinForm from './SkinForm'
import AccidentForm from './AccidentForm'
import ConAccidentForm from './ConAccidentForm'
import FeverForm from './FeverForm';
import DiarrheaForm from './Diarrhea'
import PainForm from './PainForm'

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

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: "100%",
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const TreatmentForm = (props) => {
    const { mode, defaultdata } = props
    const classes = useStyles();
    let navigate = useNavigate();
    const [addTreatment] = useMutation(ADD_TREATMENT);
    const [updateTreatment] = useMutation(UPDATE_TREATMENT)
    let { id } = useParams();
    const [status, setStatus] = useState('')
    const [form, setForm] = useState('General')

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

    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleChangeForm = (event) => {
        setForm(event.target.value);
    };
    const onSubmitCreate = useCallback(
        async (value) => {
            let medicerti = value.medicalCertificate ? true : false
            console.log(value)
            // const variables = {
            //     record: {
            //         patientId: id,
            //         weight: value.weight,
            //         height: value.height,
            //         bloodPressure: value.bloodPressure,
            //         pulseRate: value.pulseRate,
            //         tempurature: value.tempurature,
            //         respiratoryRate: value.respiratoryRate,
            //         bmi: value.bmi,
            //         oxygenSaturation: value.oxygenSaturation,
            //         medicalCertificate: medicerti
            //     }
            // }
            // try {
            //     await addTreatment({ variables })
            //     alert('บันทึกข้อมูลสำเร็จ')
            //     navigate(`/app/patients/detail/${id}`)
            // } catch (err) {
            //     console.log(err)
            //     alert('เกิดข้อผิดพลาด' + err.message)
            // }
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
                await updateTreatment({ variables })
                alert('บันทึกข้อมูลสำเร็จ')
                navigate(`/app/patients/detail/${defaultdata.treatmentById.patientId}`)
            } catch (err) {
                console.log(err)
                alert('เกิดข้อผิดพลาด     ' + err.message)
            }
        },
        [updateTreatment]
    )
    const onSubmit = onSubmitCreate
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
                                ) : (
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
                                ) : (
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
                                ) : (
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
                                ) : (
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
                                ) : (
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
                                ) : (
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
                                ) : (
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
                                ) : (
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
                            <Grid item xs={6}>
                                <FormControl style={{ width: "100%" }}>
                                    <InputLabel id="demo-mutiple-name-label">สถานะ</InputLabel>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        input={<BootstrapInput />}
                                        value={status}
                                        onChange={handleChangeStatus}
                                        required={true}
                                    >
                                        <option aria-label="None" value=" " />
                                        <option value={'DIAGNOSIS'}>วินิจฉัย</option>
                                        <option value={'MEDICINE'}>จ่ายยา</option>
                                        <option value={'COMPLETE'}>สำเร็จ</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl style={{ width: "100%" }}>
                                    <InputLabel id="demo-mutiple-name-label">แบบฟอร์มการตรวจ</InputLabel>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        input={<BootstrapInput />}
                                        value={form}
                                        onChange={handleChangeForm}
                                        required={true}
                                    >
                                        <option aria-label="None" value=" " />
                                        <option value={'General'}>ทั่วไป</option>
                                        <option value={'Skin'}>ผิวหนัง</option>
                                        <option value={'Accident'}>อุบัติเหตุ</option>
                                        <option value={'ContinueAccident'}>อุบัติเหตุต่อเนื่อง</option>
                                        <option value={'Eyes'}>อาการทางสายตา</option>
                                        <option value={'Fever'}>ไข้</option>
                                        <option value={'Diarrhea'}>ท้องร่วง</option>
                                        <option value={'Pain'}>เจ็บ-ปวด</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid container={'true'} item sx={12} spacing={2}>
                                {form === 'General' ? <GeneralForm /> :
                                    form === 'Eyes' ? <EyesForm /> : 
                                    form === 'Skin' ? <SkinForm /> : 
                                    form === 'Accident' ? <AccidentForm /> : 
                                    form === 'ContinueAccident' ? <ConAccidentForm /> : 
                                    form === 'Fever' ? <FeverForm /> : 
                                    form === 'Diarrhea' ? <DiarrheaForm /> : 
                                    form === 'Pain' ? <PainForm /> : null
                                }
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
                                ) : (
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