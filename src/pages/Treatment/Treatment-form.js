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
import { useNavigate } from "react-router-dom";


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


const normalizeAmount = value => {
    if(!value) return value;
    const onlyNums = value.replace(/[^\d]/g, "");
    return onlyNums
}

const TreatmentForm = (props) => {

    const classes = useStyles();
    let navigate = useNavigate();
    const [metType, setMedType] = useState('')
    const handleChange = (event) => {
        setMedType(event.target.value);
    };
    
    const onSubmitCreate = (value) => {
        console.log(value)
    }

    const onSubmit = onSubmitCreate
    return (
        <React.Fragment>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, submitting }) => (
                    <form className={classes.root} noValidate autoComplete="true" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="name"
                                    component={TextField}
                                    type="text"
                                    label="ชื่อ"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="description"
                                    component={TextField}
                                    type="text"
                                    label="คำอธิบายยา"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="amount"
                                    component={TextField}
                                    type="text"
                                    label="จำนวน"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    parse={normalizeAmount}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    required
                                    name="unitType"
                                    component={TextField}
                                    type="text"
                                    label="ประเภทหน่วย"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl style={{ width: "100%" }}>
                                    <InputLabel id="demo-mutiple-name-label">ประเภท</InputLabel>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        input={<BootstrapInput />}
                                        value={metType}
                                        onChange={handleChange}
                                        required={true}
                                    >
                                        <option aria-label="None" value=" " />
                                        <option value={'MEDICINE'}>ยา</option>
                                        <option value={'SUPPLY'}>เวชภัณฑ์</option>
                                    </NativeSelect>
                                </FormControl>
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