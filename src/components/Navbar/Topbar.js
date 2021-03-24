import React from "react";
import {
  AppBar,
  Hidden,
  Toolbar,
  makeStyles,
  IconButton,
  Box,
  Typography,
} from "@material-ui/core";
import Icon from "../../img/icon1.png";
import clsx from "clsx";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#5780f7",
  },
  avatar: {
    width: 70,
    height: 70,
    padding: 15,
  },
}));

const Layout = (className, onMobileNavOpen, ...rest) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <Link to="/app/homepage">
          <img src={Icon} className={classes.avatar} alt="icon" />
        </Link>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <Typography variant="h5" style={{ textTransform: "uppercase" }}>
            Clinic Treatment History
          </Typography>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon style={{ fontSize: "50" }} />
          </IconButton>
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
