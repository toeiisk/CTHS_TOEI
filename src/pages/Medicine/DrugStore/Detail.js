import React from 'react';
import { Box, Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { InfoCard } from '@mystiny/ui';
import DescriptionIcon from '@material-ui/icons/Description';
import MedicineForm from './Medicine-form';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_MEDICINE } from './graphql/Queries';
import { useQuery } from '@apollo/client';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	create: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700],
		},
	},
}));

const MedicineDetailPage = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	let { id } = useParams();
	const { loading, error, data } = useQuery(GET_MEDICINE, {
		variables: {
			id,
		},
		fetchPolicy: 'cache-and-network',
	});

	if (loading) return '...Loading';
	if (error) return `Error! ${error}`;
    
    console.log(data)
	return (
		<React.Fragment>
			<Box>
				<Grid container spacing={0} alignItems="center" justify="center">
					<Grid item xs={6}>
						<Typography paragraph style={{ fontWeight: 'bold', fontSize: '2em' }}>
							<DescriptionIcon color="primary" fontSize="small" /> รายละเอียดยา
						</Typography>
					</Grid>
					<Grid item xs={6} align="right">
						<Box style={{ alignItems: 'center', justifyContent: 'flex-end' }}></Box>
					</Grid>
					<Grid item xs={12}>
						<InfoCard
							title="ข้อมูลยา"
							actionTopRight={
								<Box display="flex">
									{/* <Button
										variant="contained"
										color="primary"
										onClick={() => navigate(`/app/treatment/create/patientId/${id}`)}
										style={{ marginRight: 10 }}
										className={classes.create}
									>
										สร้างประวัติการรักษา
									</Button> */}
									<Button variant="contained" color="secondary" onClick={() => navigate(-1)}>
										ย้อนกลับ
									</Button>
								</Box>
							}
						>
							<MedicineForm defaultdata={data} mode={'update'} />
						</InfoCard>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default MedicineDetailPage;
