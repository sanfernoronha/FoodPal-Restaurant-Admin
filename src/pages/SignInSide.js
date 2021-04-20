import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import { useForm, Form } from "../components/useForm";
import Controls from "../components/controls/Controls";
import { useSelector, useDispatch } from "react-redux";
import { authenticator } from "../reducers/signinSlice";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const initialFieldValues = {
  email: "",
  password: "",
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

export default function SignInSide() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();

  const isLoggedIn = useSelector((state) => state.signin.isLoggedIn);

  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('email' in fieldValues)
      temp.email = fieldValues.email ? ((/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(fieldValues.email) ? "" : "Email is not valid") : "Email is required"
    if ('password' in fieldValues)
      temp.password = fieldValues.password ? "" : "This field is required."
    setErrors({
      ...temp
    })

    if (fieldValues === values)
      return Object.values(temp).every(x => x === "")
  }



  const signinHelper = async () => {
    await dispatch(authenticator(values));

    // await dispatch(authenticator(values))
    // if (isLoggedIn === true) {
    //   console.log(isLoggedIn);
    //   history.replace("/dashboard");
    // }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      signinHelper()
    }
    else {
      handleClick()
    }
  }
  const { values, handleInputChange, errors, setErrors, setValues, resetForm } = useForm(initialFieldValues, true, validate);
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>

          <Form onSubmit={handleSubmit}>
            <Controls.Input
              name='email'
              label='Email Address *'
              fullWidth
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}

            ></Controls.Input>
            <Controls.Input
              name='password'
              label='Password *'
              fullWidth
              value={values.password}
              onChange={handleInputChange}
              error={errors.password}
              type="password"
            ></Controls.Input>
            <Controls.Button
              className={classes.submit}
              text='SIGN IN'
              type='submit'
              fullWidth
              size='medium'
            // onClick={(e) => {
            //   e.preventDefault();
            //   signinHelper();
            // }}
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Please fill the fields correctly!
  </Alert>
      </Snackbar>
    </Grid>
  );
}
