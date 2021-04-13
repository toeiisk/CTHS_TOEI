import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logouser from "../img/user.png";
import { useCallback, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useSession } from '../context/auth' 

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://i.imgur.com/u9flexs.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#5780f7",
    color: "white",
    padding: 8
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { userLogin } = useSession()
  let navigate = useNavigate();

  const handleUsernameChange = useCallback(
    (e) => {
      setUsername(e.target.value)
    },
    [],
  )
  const handlePasswordChange = useCallback(
    (e) => {
      setPassword(e.target.value)
    },
    [],
  )

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault()
      await userLogin(username, password)
    },
    [userLogin, password, username],
  )
  return (
    <Grid container component="main" className={classes.root}>
      <fullWidthClassName />
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        square
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className={classes.paper}>
          <div className={classes.logo}>
            <img src={Logouser} style={{ width: "80%", height: "auto" }} />
          </div>
          <Typography component="h1" variant="h5" style={{margin: 30}}>
            Clinic Treatment History System
          </Typography>
          <form className={classes.form} noValidate  onSubmit={handleLogin}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={handleUsernameChange}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              <Typography component="subtitle1" variant="subtitle1">
                Login
              </Typography>
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  <Typography
                    component="subtitle1"
                    variant="subtitle1"
                    style={{ marginRight: 10 }}
                  >
                    Don't Have an Account?
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  <Typography component="subtitle1" variant="subtitle1">
                    Forgot Password?
                  </Typography>
                </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
