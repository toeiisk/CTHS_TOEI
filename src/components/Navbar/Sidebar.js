import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Divider, Drawer, Hidden, List, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';

// icon
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IconContext } from 'react-icons';
import { HiHome, HiDocumentReport } from 'react-icons/hi';
import { FaUserInjured, FaUserShield, FaUserMd } from 'react-icons/fa';
import { IoBandageSharp } from 'react-icons/io5';
import { GiMedicines } from 'react-icons/gi';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

const user = {
	avatar: '',
	jobTitle: 'Senior Developer',
	name: 'Katarina Smith',
};

const useStyles = makeStyles(() => ({
	mobileDrawer: {
		width: 256,
	},
	desktopDrawer: {
		width: 256,
		top: 90,
		height: 'calc(100% - 90px)',
	},
	avatar: {
		cursor: 'pointer',
		width: 90,
		height: 90,
	},
	navTab: {
		padding: 10,
		paddingBottom: 20,
	},
	name: {
		margin: 5,
		color: 'white',
	},
	textsidebar: {
		fontWeight: 'bold',
		color: 'white',
	},
	nested: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 30,
	},
}));

const Sidebar = ({ onMobileClose, openMobile }) => {
	const classes = useStyles();
	const location = useLocation();
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	useEffect(() => {
		if (openMobile && onMobileClose) {
			onMobileClose();
		}
	}, [location.pathname]);

	const content = (
		<Box height="100vh" display="flex" flexDirection="column" style={{ backgroundColor: '#0f123f' }}>
			<Box alignItems="center" display="flex" flexDirection="column" p={5}>
				<Avatar className={classes.avatar} component={RouterLink} src={user.avatar} to="" />
				<Typography className={classes.name} color="textPrimary" variant="h5">
					{user.name}
				</Typography>
				<Typography className={classes.name} color="textSecondary" variant="body2">
					{user.jobTitle}
				</Typography>
			</Box>
			<Divider style={{ backgroundColor: 'white' }} />
			<Box p={2}>
				<List>
					<ListItem button component={Link} className={classes.navTab} to="/">
						<ListItemIcon>
							<IconContext.Provider value={{ color: 'white', size: '30' }}>
								<HiHome />
							</IconContext.Provider>
						</ListItemIcon>
						<ListItemText>
							<Typography className={classes.textsidebar}>Home</Typography>
						</ListItemText>
					</ListItem>

					<ListItem button component={Link} className={classes.navTab} to="/app/patients">
						<ListItemIcon>
							<IconContext.Provider value={{ color: 'white', size: '30' }}>
								<FaUserInjured />
							</IconContext.Provider>
						</ListItemIcon>
						<ListItemText>
							<Typography className={classes.textsidebar}>Patients</Typography>
						</ListItemText>
					</ListItem>

					<ListItem button component={Link} className={classes.navTab} to="/app/treatment">
						<ListItemIcon>
							<IconContext.Provider value={{ color: 'white', size: '30' }}>
								<IoBandageSharp />
							</IconContext.Provider>
						</ListItemIcon>
						<ListItemText>
							<Typography className={classes.textsidebar}>Treatment</Typography>
						</ListItemText>
					</ListItem>

					<ListItem button component={Link} className={classes.navTab} to="/app/diagnosis">
						<ListItemIcon>
							<IconContext.Provider value={{ color: 'white', size: '30' }}>
								<FaUserMd />
							</IconContext.Provider>
						</ListItemIcon>
						<ListItemText>
							<Typography className={classes.textsidebar}>Diagnosis</Typography>
						</ListItemText>
					</ListItem>

					<ListItem
						button
						component={Link}
						className={classes.navTab}
						to="/app/medicine"
						onClick={handleClick}
					>
						<ListItemIcon>
							<IconContext.Provider value={{ color: 'white', size: '30' }}>
								<AiOutlineMedicineBox />
							</IconContext.Provider>
						</ListItemIcon>
						<ListItemText>
							<Typography className={classes.textsidebar}>Medicine</Typography>
						</ListItemText>
						{open ? (
							<IconContext.Provider value={{ color: 'white', size: '30' }}>
								<MdExpandLess />
							</IconContext.Provider>
						) : (
							<IconContext.Provider value={{ color: 'white', size: '30' }}>
								<MdExpandMore />
							</IconContext.Provider>
						)}
					</ListItem>

					<Collapse in={open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button component={Link} className={classes.nested} to="/app/medicine">
								<ListItemIcon>
									<IconContext.Provider value={{ color: 'white', size: '30' }}>
										<GiMedicines />
									</IconContext.Provider>
								</ListItemIcon>
								<ListItemText>
									<Typography className={classes.textsidebar}>Medicine 1</Typography>
								</ListItemText>
							</ListItem>
							<ListItem button component={Link} className={classes.nested} to="/app/medicine">
								<ListItemIcon>
									<IconContext.Provider value={{ color: 'white', size: '30' }}>
										<GiMedicines />
									</IconContext.Provider>
								</ListItemIcon>
								<ListItemText>
									<Typography className={classes.textsidebar}>Medicine 2</Typography>
								</ListItemText>
							</ListItem>
						</List>
					</Collapse>

					<ListItem button component={Link} className={classes.navTab} to="/app/report">
						<ListItemIcon>
							<IconContext.Provider value={{ color: 'white', size: '30' }}>
								<HiDocumentReport />
							</IconContext.Provider>
						</ListItemIcon>
						<ListItemText>
							<Typography className={classes.textsidebar}>Report</Typography>
						</ListItemText>
					</ListItem>

					<ListItem button component={Link} className={classes.navTab} to="/app/admin">
						<ListItemIcon>
							<IconContext.Provider value={{ color: 'white', size: '30' }}>
								<FaUserShield />
							</IconContext.Provider>
						</ListItemIcon>
						<ListItemText>
							<Typography className={classes.textsidebar}>Administor</Typography>
						</ListItemText>
					</ListItem>
				</List>
			</Box>
			<Divider style={{ backgroundColor: 'white' }} />
			<Box p={2} m={2} bgcolor="background.dark">
				<Box display="flex" flexDirection="column" justifyContent="center" mt={2}>
					<Button
						component="a"
						href="/login"
						variant="contained"
						style={{
							marginBottom: 10,
							fontWeight: 'bold',
							backgroundColor: '#017efa',
							color: 'white',
						}}
					>
						LOG IN
					</Button>
					<Button component="a" href="/register" className={classes.textsidebar}>
						Don't Have an Account?
					</Button>
				</Box>
			</Box>
		</Box>
	);

	return (
		<>
			<Hidden lgUp>
				<Drawer
					anchor="left"
					classes={{ paper: classes.mobileDrawer }}
					onClose={onMobileClose}
					open={openMobile}
					variant="temporary"
				>
					{content}
				</Drawer>
			</Hidden>
			<Hidden mdDown>
				<Drawer anchor="left" classes={{ paper: classes.desktopDrawer }} open variant="persistent">
					{content}
				</Drawer>
			</Hidden>
		</>
	);
};

Sidebar.propTypes = {
	onMobileClose: PropTypes.func,
	openMobile: PropTypes.bool,
};

Sidebar.defaultProps = {
	onMobileClose: () => {},
	openMobile: false,
};

export default Sidebar;
