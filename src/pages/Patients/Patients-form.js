import React, { useCallback, useEffect, useState } from 'react'
import {
    Grid,
    Typography,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Button,
    Chip,
    NativeSelect,
    InputBase,
    InputLabel,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Radio, Select } from 'final-form-material-ui';
import MultiSelect from "../../MulitiSelect";
import "../../App.css"
import { ADD_PATIENT, UPDATE_PATIENT_BY_ID } from './GraphQL/Mutation'
import { useMutation } from '@apollo/client';
import { GET_PATIENTS } from './GraphQL/Querie'
import { useNavigate } from "react-router-dom";
import moment from 'moment';


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

const PatientsForm = (props) => {
    const { mode, defaultdata } = props
    const classes = useStyles();
    let navigate = useNavigate();
    const test = ['????????????????????????', '??????????????????????????????', '??????????????????????????????', '?????????????????????'];
    const [select, setSelect] = React.useState('')
    const [status, setStatus] = React.useState('')
    const [addPatient] = useMutation(ADD_PATIENT);
    const [updatePatient] = useMutation(UPDATE_PATIENT_BY_ID)
    const [nationality, setNationality] = React.useState([])
    const [selectNationality, setSelectNationality] = React.useState('')
    const [selectRace, setSelectRace] = React.useState('')

    let data = require('npm-nationality-list')

    useEffect(() => {
        if (mode === 'update') {
            setSelect(defaultdata.patientById.bloodType)
            setStatus(defaultdata.patientById.status)
            setSelectNationality(defaultdata.patientById.nationality)
            setSelectRace(defaultdata.patientById.race)
        } else {
            return null
        }
    }, [])

    useEffect(() => {
        data.getList().map((item) => setNationality((prev) => [...prev, item]))
    }, [])

    const onSubmitCreate = useCallback(
        async (value) => {
            const variables = {
                record: {
                    firstname: value.firstname,
                    lastname: value.lastname,
                    idcardNumber: value.idcardNumber,
                    birthdate: value.birthdate,
                    nationality: selectNationality,
                    race: selectRace,
                    status: status,
                    bloodType: select,
                    phone: value.phone,
                    address: value.address,
                    hospitalRefer: value.hospitalRefer,
                    congenitalDisease: value.congenitalDisease,
                }
            }
            try {
                await addPatient({ variables, refetchQueries: [{ query: GET_PATIENTS }] })
                alert('??????????????????????????????????????????????????????')
                setSelectNationality('')
                setSelectRace('')
                navigate(`/app/patients`)
            } catch (err) {
                console.log(err)
                alert('??????????????????????????????????????????' + err.message)
            }
        },
        [addPatient, select]
    )

    const onSubmitUpdate = useCallback(
        async (value) => {
            const variables = {
                id: defaultdata.patientById._id,
                record: {
                    firstname: value.firstname,
                    lastname: value.lastname,
                    idcardNumber: value.idcardNumber,
                    birthdate: value.birthdate,
                    nationality: selectNationality,
                    race: selectRace,
                    status: status,
                    bloodType: select,
                    phone: value.phone,
                    address: value.address,
                    hospitalRefer: value.hospitalRefer,
                    congenitalDisease: value.congenitalDisease,
                }
            }
            try {
                await updatePatient({ variables, refetchQueries: [{ query: GET_PATIENTS }] })
                alert('??????????????????????????????????????????????????????')
                setSelectNationality('')
                setSelectRace('')
                navigate(`/app/patients`)
            } catch (err) {
                console.log(err)
                alert('??????????????????????????????????????????     ' + err.message)
            }
        },
        [addPatient, select, selectNationality, selectRace]
    )

    const onSubmit = mode === 'update' ? onSubmitUpdate : onSubmitCreate

    const handleChangeblood = (event) => {
        setSelect(event.target.value);
    };

    const handleChangestatus = (event) => {
        setStatus(event.target.value)
    }

    const handleSelectNationality = (event) => {
        setSelectNationality(event.target.value)
    }
    const handleSelectRace = (event) => {
        setSelectRace(event.target.value)
    }

    const normalizeIdcard = value => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");
        if (onlyNums.length <= 13) return onlyNums;
    }

    const normalizePhone = value => {
        if (!value) return value;
        const onlyNums = value.replace(/[^\d]/g, "");
        if (onlyNums.length <= 10) return onlyNums;
    }


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
                                        name="firstname"
                                        component={TextField}
                                        type="text"
                                        label="????????????"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        initialValue={defaultdata.patientById.firstname}
                                    />
                                ) : (
                                    <Field
                                        fullWidth
                                        required
                                        name="firstname"
                                        component={TextField}
                                        type="text"
                                        label="????????????"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        name="lastname"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        component={TextField}
                                        label="?????????????????????"
                                        initialValue={defaultdata.patientById.lastname}
                                    />
                                ) : (
                                    <Field
                                        name="lastname"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        component={TextField}
                                        label="?????????????????????"
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        label="?????????????????????????????????????????????"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="idcardNumber"
                                        component={TextField}
                                        initialValue={defaultdata.patientById.idcardNumber}
                                        parse={normalizeIdcard}
                                    />
                                ) : (
                                    <Field
                                        label="?????????????????????????????????????????????"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="idcardNumber"
                                        component={TextField}
                                        parse={normalizeIdcard}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        id="date"
                                        type="date"
                                        label="?????????/???????????????/??????????????????"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required={true}
                                        component={TextField}
                                        name='birthdate'
                                        defaultValue={`${moment(defaultdata.patientById.birthdate).format("YYYY-MM-DD")}`}
                                    />
                                ) : (
                                    <Field
                                        id="date"
                                        type="date"
                                        variant="outlined"
                                        label="?????????/???????????????/??????????????????"
                                        style={{ width: '100%' }}
                                        required={true}
                                        component={TextField}
                                        name='birthdate'
                                        defaultValue={`${moment(new Date()).format("YYYY-MM-DD")}`}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl style={{ width: "100%" }}>
                                    <InputLabel id="demo-mutiple-name-label">?????????????????????</InputLabel>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        input={<BootstrapInput />}
                                        value={selectNationality}
                                        onChange={handleSelectNationality}
                                        required={true}
                                    >
                                        <option aria-label="None" value=" " />
                                        {nationality?.map((data, index) => (
                                            <option value={`${data.nationality}`}>
                                                {data.nationality}
                                            </option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl style={{ width: "100%" }}>
                                    <InputLabel id="demo-mutiple-name-label">???????????????????????????</InputLabel>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        input={<BootstrapInput />}
                                        value={selectRace}
                                        onChange={handleSelectRace}
                                        required={true}
                                    >
                                        <option aria-label="None" value=" " />
                                        {nationality?.map((data, index) => (
                                            <option value={`${data.nationality}`}>
                                                {data.nationality}
                                            </option>
                                        ))}
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl style={{ width: "100%" }}>
                                    <InputLabel id="demo-mutiple-name-label">???????????????</InputLabel>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        input={<BootstrapInput />}
                                        value={status}
                                        onChange={handleChangestatus}
                                        required={true}
                                    >
                                        <option aria-label="None" value="??????????????????????????????" />
                                        <option value={'SINGLE'}>?????????</option>
                                        <option value={'MARRIED'}>????????????</option>
                                        <option value={'OTHER'}>???????????? ???</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl style={{ width: "100%" }}>
                                    <InputLabel id="demo-mutiple-name-label">??????????????????????????????</InputLabel>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        input={<BootstrapInput />}
                                        value={select}
                                        onChange={handleChangeblood}
                                        required={true}
                                    >
                                        <option aria-label="None" value=" " />
                                        <option value={'O'}>O</option>
                                        <option value={'A'}>A</option>
                                        <option value={'B'}>B</option>
                                        <option value={'AB'}>AB</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        label="???????????????????????????????????????"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="phone"
                                        component={TextField}
                                        initialValue={defaultdata.patientById.phone}
                                        parse={normalizePhone}

                                    />
                                ) : (
                                    <Field
                                        label="???????????????????????????????????????"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="phone"
                                        component={TextField}
                                        parse={normalizePhone}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={6}>
                                {mode === 'update' ? (
                                    <Field
                                        label="??????????????????????????????????????????????????????"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="hospitalRefer"
                                        component={TextField}
                                        initialValue={defaultdata.patientById.hospitalRefer}
                                    />
                                ) : (
                                    <Field
                                        label="??????????????????????????????????????????????????????"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="hospitalRefer"
                                        component={TextField}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                {mode === 'update' ? (
                                    <Field
                                        name="congenitalDisease"
                                        styling="field"
                                        labelname="?????????????????????????????????"
                                        component={MultiSelect}
                                        variant="outlined"
                                        initialValue={defaultdata.patientById.congenitalDisease}
                                        renderValue={selected => (
                                            <div className="multi-select-chips">
                                                {selected.map(value => (
                                                    <Chip
                                                        key={value}
                                                        label={value}
                                                        className="multi-select-chip"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    >
                                        {test.map((data, index) => (
                                            <MenuItem key={index} value={data}>
                                                {data}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                ) : (
                                    <Field
                                        name="congenitalDisease"
                                        styling="field"
                                        labelname="?????????????????????????????????"
                                        component={MultiSelect}
                                        variant="outlined"
                                        renderValue={selected => (
                                            <div className="multi-select-chips">
                                                {selected.map(value => (
                                                    <Chip
                                                        key={value}
                                                        label={value}
                                                        className="multi-select-chip"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    >
                                        {test.map((data, index) => (
                                            <MenuItem key={index} value={data}>
                                                {data}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                {mode === 'update' ? (
                                    <Field
                                        label="?????????????????????"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="address"
                                        component={TextField}
                                        initialValue={defaultdata.patientById.address}

                                    />
                                ) : (
                                    <Field
                                        label="?????????????????????"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="address"
                                        component={TextField}
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
                                    ????????????????????????????????????
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
export default PatientsForm