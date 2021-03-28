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
import Icon from "../../img/logo.png";
import clsx from "clsx";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#5780f7",
    padding: 10,
  },
}));

const Layout = (className, onMobileNavOpen, ...rest) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <Link to="/app/homepage" style={{ textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Icon} alt="icon" style={{ height: 70, width: 70 }} />
            <Typography variant="h6" style={{ textTransform: "uppercase", color: "#FFF", marginLeft: 15 }}>
              Clinic Treatment History
            </Typography>
          </div>
        </Link>
        <Box flexGrow={1} />
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon style={{ fontSize: "30" }} />
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
