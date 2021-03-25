import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

import Deposits from "../components/dashboard/Deposits";
import Orders from "../components/dashboard/Orders";
import { getRestaurant, changeRefreshed } from "../reducers/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

function Dashboard({ actions, state }) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.restaurant.restaurantData);
  const restaurantStatus = useSelector((state) => state.restaurant.status);
  // let history = useHistory();
  const refresh = useSelector((state) => state.restaurant.refreshed);

  useEffect(() => {
    // const getRestaurantData = async () => {
    //   dispatch(await getRestaurant());
    // };
    // getRestaurantData();

    const reload = async () => {
      if (refresh === true) {
        await dispatch(changeRefreshed());
      } else {
        console.log("Good to go");
      }
    };
    if (restaurantStatus === "idle") {
      dispatch(getRestaurant());
      reload();
    }
  }, [restaurantStatus, dispatch, refresh]);

  if (restaurantStatus === "succeeded") {
    return (
      <div className={classes.content}>
        <main>
          <div className={classes.appBarSpacer} />
          <Container maxWidth='lg' className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  <h1>{restaurant.data.name}</h1>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  <Deposits />
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    );
  } else {
    //failed
    return (
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        maiores architecto ipsum quod! Distinctio molestias repellendus saepe
        facilis porro aut recusandae, vitae nulla quos ad dolorum asperiores
        natus ab esse libero aspernatur ducimus veniam cupiditate temporibus!
        Aperiam animi fuga saepe veritatis numquam iusto quibusdam suscipit,
        nulla sint explicabo necessitatibus rem provident ratione voluptas aut
        quis porro soluta eaque. Quos cupiditate necessitatibus omnis similique
        in sed consequuntur, adipisci delectus eius at neque tempore quis saepe
        perspiciatis sunt quo dolores, est cum accusamus consectetur qui ducimus
        harum ratione! Qui, minima optio amet tempore nam beatae animi
        praesentium fugiat officiis doloribus odio impedit!
      </h1>
    );
  }
}

export default Dashboard;
