import React, { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

// icon
import { HiHome } from 'react-icons/hi';
import { FaUserInjured } from 'react-icons/fa';
import { IoBandageSharp } from 'react-icons/io5';
import { FaUserMd } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';
import { HiDocumentReport } from 'react-icons/hi';
import { FaUserShield } from 'react-icons/fa';

const user = {
  avatar: "",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
};

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 90,
    height: "calc(100% - 90px)",
  },
  avatar: {
    cursor: "pointer",
    width: 90,
    height: 90,
  },
  navTab: {
    padding: 10,
  },
  name: {
    margin: 5
  }
}));

const Sidebar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={5}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to=""
        />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography className={classes.name} color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          <ListItem button component={Link} className={classes.navTab} to="/">
            <ListItemIcon>
              <HiHome fontSize={30}/>
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>

          <ListItem
            button
            component={Link}
            className={classes.navTab}
            to="/app/patients"
          >
            <ListItemIcon>
              <FaUserInjured fontSize={30}/>
            </ListItemIcon>
            <ListItemText>Patients</ListItemText>
          </ListItem>

          <ListItem
            button
            component={Link}
            className={classes.navTab}
            to="/app/treatment"
          >
            <ListItemIcon>
              <IoBandageSharp fontSize={30}/>
            </ListItemIcon>
            <ListItemText>Treatment</ListItemText>
          </ListItem>

          <ListItem
            button
            component={Link}
            className={classes.navTab}
            to="/app/diagnosis"
          >
            <ListItemIcon>
              <FaUserMd fontSize={30}/>
            </ListItemIcon>
            <ListItemText>Diagnosis</ListItemText>
          </ListItem>

          <ListItem
            button
            component={Link}
            className={classes.navTab}
            to="/app/medicine"
          >
            <ListItemIcon>
              <GiMedicines fontSize={30}/>
            </ListItemIcon>
            <ListItemText>Medicine</ListItemText>
          </ListItem>

          <ListItem
            button
            component={Link}
            className={classes.navTab}
            to="/app/report"
          >
            <ListItemIcon>
              <HiDocumentReport fontSize={30}/>
            </ListItemIcon>
            <ListItemText>Report</ListItemText>
          </ListItem>

          <ListItem
            button
            component={Link}
            className={classes.navTab}
            to="/app/admin"
          >
            <ListItemIcon>
              <FaUserShield fontSize={30}/>
            </ListItemIcon>
            <ListItemText>Administor</ListItemText>
          </ListItem>
        </List>
      </Box>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2} m={2} bgcolor="background.dark">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mt={2}
        >
          <Button
            color="primary"
            component="a"
            href="/login"
            variant="contained"
            style={{ marginBottom: 10 }}
          >
            LOG IN
          </Button>
          <Button component="a" href="/register">
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
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
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
