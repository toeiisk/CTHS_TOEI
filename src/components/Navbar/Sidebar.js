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
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BookIcon from "@material-ui/icons/Book";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Link } from "react-router-dom";

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
    top: 105,
    height: "calc(100% - 105px)",
  },
  avatar: {
    cursor: "pointer",
    width: 105,
    height: 105,
  },
  navTab: {
    padding: 10,
  },
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
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to=""
        />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          <ListItem button component={Link} className={classes.navTab} to="/">
            <ListItemIcon>
              <HomeIcon />
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
              <SupervisorAccountIcon />
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
              <BookIcon />
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
              <LocalLibraryIcon />
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
              <LocalHospitalIcon />
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
              <EventNoteIcon />
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
              <PermContactCalendarIcon />
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
