import React from 'react'
import {
    Grid,
    Typography,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    NativeSelect,
    InputBase,
    InputLabel
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import { CountryRegionData } from "react-country-region-selector";
import { TextField, Radio, Select } from 'final-form-material-ui';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '25ch',
        },
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
      // Use the system font instead of the default Roboto font.
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
    const classes = useStyles();
    const GroupBlood = ['A', 'B', "AB", 'O']
    const onSubmit = (value) => {
        console.log(value)
    }

    return (
        <React.Fragment>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form className={classes.root} noValidate autoComplete="true" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    fullWidth
                                    required
                                    name="username"
                                    component={TextField}
                                    type="text"
                                    label="ยูซเซอร์เนม"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="password"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    type="password"
                                    component={TextField}
                                    label="รหัส"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    fullWidth
                                    required
                                    name="firstName"
                                    component={TextField}
                                    type="text"
                                    label="ชื่อ"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name="lastName"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    component={TextField}
                                    label="นามสกุล"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    label="เบอร์โทร"
                                    type="text"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    name="tell"
                                    component={TextField}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    label="อีเมล"
                                    type="text"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    name="Email"
                                    component={TextField}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <FormControl style={{width: "100%"}}>
                                    <InputLabel htmlFor="demo-customized-select-native">หน้าที่</InputLabel>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        input={<BootstrapInput />}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={10}>หมอ</option>
                                        <option value={20}>พยาบาล</option>
                                        <option value={30}>เจ้าหน้าที่</option>
                                    </NativeSelect>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                )}
            />
        </React.Fragment>
    )
}
export default PatientsForm