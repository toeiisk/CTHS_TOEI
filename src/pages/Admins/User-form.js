import React, { useCallback } from 'react'
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
    InputLabel,
    Button
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Radio, Select } from 'final-form-material-ui';
import { useMutation } from '@apollo/client';
import {ADD_USER} from './GraphQL/Mutation'
import {GET_USERS} from './GraphQL/Querie'


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

const UserForm = () => {
    const classes = useStyles();
    const [select, setSelect] = React.useState('')
    const [addUser, { data }] = useMutation(ADD_USER);
    const handleChange = (event) => {
        setSelect(event.target.value);
    };
    const onSubmit = useCallback(
        async (value) => {
            const variables = {
                record: {
                    username: value.username,
                    email: value.email,
                    firstname: value.firstName,
                    lastname: value.lastName,
                    phone: value.tell,
                    roles: select,
                    address: value.address,
                    password: value.password
                }
            }
            await addUser({ variables, refetchQueries: [{query : GET_USERS}] })
            setSelect('')
        },
        [addUser, select]
    )

    return (
        <React.Fragment>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, submitting }) => (
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
                                    name="email"
                                    component={TextField}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    label="ที่อยู่"
                                    type="text"
                                    variant="outlined"
                                    style={{ width: '100%' }}
                                    required
                                    name="address"
                                    component={TextField}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <FormControl style={{ width: "100%" }}>
                                    <InputLabel htmlFor="demo-customized-select-native">หน้าที่</InputLabel>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                        input={<BootstrapInput />}
                                        value={select}
                                        onChange={handleChange}
                                    >
                                        <option aria-label="None" value="" />
                                        <option value={'หมอ'}>หมอ</option>
                                        <option value={'พยาบาล'}>พยาบาล</option>
                                        <option value={'เจ้าหน้าที่'}>เจ้าหน้าที่</option>
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
                )}
            />
        </React.Fragment>
    )
}
export default UserForm