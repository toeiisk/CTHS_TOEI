import React, { useCallback, useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_MEDICINE, UPDATE_MEDICINE_BY_ID } from './graphql/Mutation';
import { GET_MEDICINES } from './graphql/Queries';

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
		width: '100%',
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

const normalizeAmount = (value) => {
	if (!value) return value;
	const onlyNums = value.replace(/[^\d]/g, '');
	return onlyNums;
};

const MedicineForm = (props) => {
	const { mode, defaultdata } = props;

	let navigate = useNavigate();
	const classes = useStyles();
	const [metType, setMedType] = useState('');

	const [addMedicine] = useMutation(ADD_MEDICINE);
	const [updateMedicine] = useMutation(UPDATE_MEDICINE_BY_ID);

	const handleChange = (event) => {
		setMedType(event.target.value);
	};

	const normalizeAmount = (value) => {
		if (!value) return value;
		const onlyNums = value.replace(/[^\d]/g, '');
		let number = parseFloat(onlyNums);
		return number;
	};

	useEffect(() => {
		if (mode === 'update') {
			setMedType(defaultdata.medicineById.medType);
			console.log(defaultdata.medicineById);
		} else {
			return null;
		}
	}, []);

	const onSubmitCreate = useCallback(
		async (value) => {
			const variables = {
				record: {
					medType: metType,
					name: value.name,
					description: value.description,
					amount: value.amount,
					unitType: value.unitType,
				},
			};
			try {
				await addMedicine({ variables, refetchQueries: [{ query: GET_MEDICINES }] });
				setMedType('');
				console.log('create');
				alert('บันทึกข้อมูลสำเร็จ');
				navigate(`/app/medicine/`);
			} catch (err) {
				console.log(err);
				alert('เกิดข้อผิดพลาด');
			}
		},
		[addMedicine, metType]
	);

	const onSubmitUpdate = useCallback(
		async (value) => {
			const variables = {
				id: defaultdata.medicineById._id,
				record: {
					medType: metType,
					name: value.name,
					description: value.description,
					amount: value.amount,
					unitType: value.unitType,
				},
			};
			try {
				await updateMedicine({ variables, refetchQueries: [{ query: GET_MEDICINES }] });
				setMedType('');
				alert('บันทึกข้อมูลสำเร็จ');
				navigate(`/app/medicine/drugstore`);
			} catch (err) {
				console.log(err);
				alert('เกิดข้อผิดพลาด' + metType);
			}
		},
		[updateMedicine, metType]
	);
	const onSubmit = mode === 'update' ? onSubmitUpdate : onSubmitCreate;
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
										name="name"
										component={TextField}
										type="text"
										label="ชื่อ"
										variant="outlined"
										initialValue={defaultdata.medicineById.name}
										style={{ width: '100%' }}
									/>
								) : (
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
								)}
							</Grid>
							<Grid item xs={6}>
								{mode === 'update' ? (
									<Field
										fullWidth
										required
										name="description"
										component={TextField}
										type="text"
										label="คำอธิบายยา"
										variant="outlined"
										initialValue={defaultdata.medicineById.description}
										style={{ width: '100%' }}
									/>
								) : (
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
								)}
							</Grid>
							<Grid item xs={6}>
								{mode === 'update' ? (
									<Field
										fullWidth
										required
										name="amount"
										component={TextField}
										type="text"
										label="จำนวน"
										variant="outlined"
										initialValue={defaultdata.medicineById.amount}
										style={{ width: '100%' }}
										parse={normalizeAmount}
									/>
								) : (
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
								)}
							</Grid>
							<Grid item xs={6}>
								{mode === 'update' ? (
									<Field
										fullWidth
										required
										name="unitType"
										component={TextField}
										type="text"
										label="ประเภทหน่วย"
										initialValue={defaultdata.medicineById.unitType}
										variant="outlined"
										style={{ width: '100%' }}
									/>
								) : (
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
								)}
							</Grid>
							<Grid item xs={12}>
								{mode === 'update' ? (
									<FormControl style={{ width: '100%' }}>
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
								) : (
									<FormControl style={{ width: '100%' }}>
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
								)}
							</Grid>
							<Grid item xs={12} style={{ marginTop: 16, textAlign: 'center', width: '100%' }}>
								<Button variant="contained" color="primary" type="submit" disabled={submitting}>
									บันทึกข้อมูล
								</Button>
							</Grid>
						</Grid>
					</form>
				)}
			/>
		</React.Fragment>
	);
};
export default MedicineForm;
