import React, { useCallback, useEffect } from 'react'
import {
    Grid,
    FormControl,
    NativeSelect,
    InputBase,
    InputLabel,
    Button,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField } from 'final-form-material-ui';
import { useMutation } from '@apollo/client';
import { ADD_USER, UPDATE_USER_BY_ID} from './GraphQL/Mutation'
import { GET_USERS } from './GraphQL/Querie'
import { useNavigate } from "react-router-dom";

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

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    if (!values.tell) {
        errors.tell = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.username) {
        errors.username = 'Required'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    return errors
}



const UserForm = (props) => {
    
    const {mode, defaultdata} = props
    
    let navigate = useNavigate();
    const classes = useStyles();
    const [select, setSelect] = React.useState('')
   
    const [addUser] = useMutation(ADD_USER);
    const [updateUser] = useMutation(UPDATE_USER_BY_ID);
    const handleChange = (event) => {
        setSelect(event.target.value);
    };


    useEffect(() => {
        if(mode === 'update'){
            setSelect(defaultdata.userById.roles)
            console.log(defaultdata.userById)
        }else{
            return null
        }
    }, [])

    const onSubmitCreate = useCallback(
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
                    password: value.password,
                    isStaff: true
                }
            }
            try {
                await addUser({ variables, refetchQueries: [{ query: GET_USERS }] })
                setSelect('')
                console.log('create')
                alert('บันทึกข้อมูลสำเร็จ')
                navigate(`/app/admin/`)
            } catch (err) {
                console.log(err)
                alert('เกิดข้อผิดพลาด')
            }
        },
        [addUser, select]
    )
    const onSubmitUpdate = useCallback(
        async (value) => {
            const variables = {
                id: defaultdata.userById._id,
                record: {
                    username: value.username,
                    email: value.email,
                    firstname: value.firstName,
                    lastname: value.lastName,
                    phone: value.tell,
                    roles: select,
                    address: value.address,
                    password: value.password,
                    isStaff: true
                }
            }
            try {
                await updateUser({ variables, refetchQueries: [{ query: GET_USERS }] })
                setSelect('')
                alert('บันทึกข้อมูลสำเร็จ')
                navigate(`/app/admin/`)
            } catch (err) {
                console.log(err)
                alert('เกิดข้อผิดพลาด' + select)
            }
        },
        [updateUser, select]
    )
    const onSubmit = mode === 'update' ? onSubmitUpdate : onSubmitCreate
    return (
        <React.Fragment>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, submitting, submitError }) => {
                    return (
                        <form className={classes.root} noValidate autoComplete="true" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                {mode === 'update' ? (
                                    <Field
                                        fullWidth
                                        required
                                        name="username"
                                        component={TextField}
                                        type="text"
                                        label="ยูซเซอร์เนม"
                                        variant="outlined"
                                        initialValue={defaultdata.userById.username}
                                    />
                                ): (
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
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                {mode === 'update' ? (
                                   null
                                ):(
                                    <Field
                                        name="password"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        type="password"
                                        component={TextField}
                                        label="รหัส"
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                {mode === "update" ? (
                                     <Field
                                        fullWidth
                                        required
                                        name="firstName"
                                        component={TextField}
                                        type="text"
                                        label="ชื่อ"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        initialValue={defaultdata.userById.firstname}
                                     />
                                ):(
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
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                {mode === "update" ? (
                                    <Field
                                        name="lastName"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        component={TextField}
                                        label="นามสกุล"
                                        initialValue={defaultdata.userById.lastname}
                                    />
                                ):(
                                    <Field
                                        name="lastName"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        component={TextField}
                                        label="นามสกุล"
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                {mode === 'update' ? (
                                    <Field
                                        label="เบอร์โทร"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="tell"
                                        component={TextField}
                                        initialValue={defaultdata.userById.phone}
                                    />
                                ):(
                                    <Field
                                        label="เบอร์โทร"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="tell"
                                        component={TextField}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                {mode === 'update' ? (
                                     <Field
                                        label="อีเมล"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="email"
                                        component={TextField}
                                        initialValue={defaultdata.userById.email}
                                     />
                                ):(
                                    <Field
                                        label="อีเมล"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="email"
                                        component={TextField}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                {mode === 'update' ? (
                                    <Field
                                        label="ที่อยู่"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="address"
                                        component={TextField}
                                        multiline
                                        rows={4}
                                        initialValue={defaultdata.userById.address}
                                     />
                                ):(
                                    <Field
                                        label="ที่อยู่"
                                        type="text"
                                        variant="outlined"
                                        style={{ width: '100%' }}
                                        required
                                        name="address"
                                        component={TextField}
                                        multiline
                                        rows={4}
                                    />
                                )}
                            </Grid>
                            <Grid item xs={12} >
                                {mode === 'update' ? (
                                    <FormControl style={{ width: "100%" }}>
                                        <InputLabel htmlFor="demo-customized-select-native">หน้าที่</InputLabel>
                                        <NativeSelect
                                            id="demo-customized-select-native"
                                            input={<BootstrapInput />}
                                            value={select}
                                            onChange={handleChange}
                                            required={true}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={'DOCTOR'}>หมอ</option>
                                            <option value={'NURSE'}>พยาบาล</option>
                                            <option value={'STAFF'}>เจ้าหน้าที่</option>
                                        </NativeSelect>
                                    </FormControl>
                                ):(
                                    <FormControl style={{ width: "100%" }}>
                                        <InputLabel htmlFor="demo-customized-select-native">หน้าที่</InputLabel>
                                        <NativeSelect
                                            id="demo-customized-select-native"
                                            input={<BootstrapInput />}
                                            value={select}
                                            onChange={handleChange}
                                            required={true}
                                        >
                                            <option aria-label="None" value="" />
                                            <option value={'DOCTOR'}>หมอ</option>
                                            <option value={'NURSE'}>พยาบาล</option>
                                            <option value={'STAFF'}>เจ้าหน้าที่</option>
                                        </NativeSelect>
                                    </FormControl>
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
                }}
            />
        </React.Fragment>
    )
}
export default UserForm

