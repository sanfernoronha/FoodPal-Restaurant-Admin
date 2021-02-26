import React from "react";
// import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

import CssBaseline from "@material-ui/core/CssBaseline";

import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

//new imports
import { useForm, Form } from "../components/useForm";
import Controls from "../components/controls/Controls";
import { useSelector, useDispatch } from "react-redux";
// import { signIn } from "../actions/Actions";

import { authService } from "../services/auth.service";
import Connector from "../utils/Connector";
import PropTypes from "prop-types";
import store from "../utils/store";
import { useHistory } from "react-router-dom"

//store imports
// import { useDispatch, useSelector } from "react-redux";

const initialFieldValues = {
  email: "",
  password: "",
  rememberMe: false,
};

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        FoodPal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",

  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login({ actions }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { values, handleInputChange } = useForm(initialFieldValues);

  //dummy use state
  // const [count, setCount] = useState(0);
  //from state
  // const username = useSelector((state) => state.username);
  // const password = useSelector((state) => state.password);
  // console.log(username);
  // console.log(password);
  let history = useHistory();

  function login() {
    authService.login(values.email, values.password).then((me) => {

      actions.saveMe(me);
      console.log(store.getState().auth);
      actions.authenticate();
      history.push("/dashboard")
    });
  }

  return (
    <Grid container component='main' className={classes.root}>

      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>

          <Form>
            <Controls.Input
              name='email'
              label='Email Address *'
              fullWidth
              value={values.name}
              onChange={handleInputChange}
            ></Controls.Input>
            <Controls.Input
              name='password'
              label='Password *'
              fullWidth
              value={values.password}
              onChange={handleInputChange}
            ></Controls.Input>
            <Controls.CheckBox
              name='rememberMe'
              label='Remember me'
              value={values.rememberMe}
              onChange={handleInputChange}
            />
            <Controls.Button
              className={classes.submit}
              text='SIGN IN'
              type='submit'
              fullWidth
              size='medium'
              onClick={(e) => {
                e.preventDefault();
                // dispatch(signIn(values));
                login();
              }}
            />
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Form>
        </div>
      </Grid>
    </Grid>
  );
}

const ConnectedLogin = (props) => (
  <Connector>
    {({ actions }) => <Login actions={actions.auth} {...props} />}
  </Connector>
);

Login.propTypes = {
  actions: PropTypes.object,
};
Login.defaultProps = {
  actions: {},
};

export default ConnectedLogin;
