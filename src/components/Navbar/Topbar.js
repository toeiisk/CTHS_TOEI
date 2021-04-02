import React from 'react';
import { AppBar, Hidden, Toolbar, makeStyles, IconButton, Box, Typography } from '@material-ui/core';
import Icon from '../../img/logo.png';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// icon
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: '#FFF',
		padding: 10,
	},
}));

const Layout = ({ className, onMobileNavOpen, ...rest }) => {
	const classes = useStyles();

	return (
		<AppBar className={clsx(classes.root, className)} {...rest}>
			<Toolbar>
				<Link to="/app/homepage" style={{ textDecoration: 'none' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img src={Icon} alt="icon" style={{ height: 70, width: 70 }} />
						<Typography
							variant="h6"
							style={{
								fontWeight: 'bold',
								textTransform: 'uppercase',
								color: '#000',
								marginLeft: 15,
							}}
						>
							Clinic Treatment History
						</Typography>
					</div>
				</Link>
				<Box flexGrow={1} />
				<Hidden lgUp>
					<IconContext.Provider value={{ color: 'red', size: '30' }}>
						<GiHamburgerMenu onClick={onMobileNavOpen} />
					</IconContext.Provider>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

Layout.propTypes = {
	className: PropTypes.string,
	onMobileNavOpen: PropTypes.func,
};

export default Layout;
