import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Grid, Typography } from "@material-ui/core";

import MenuCardItem from "../components/menu/MenuCardItem";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../reducers/menuSlice";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

export default function Menu() {
  const classes = useStyles();
  // const [menu, setmenu] = useState([
  //   {
  //     items: [
  //       {
  //         _id: 1,
  //         name: "Chicken Tikka Pizza",
  //         price: 400,
  //       },
  //       {
  //         _id: 2,
  //         name: "Chicken Feast Pizza",
  //         price: 500,
  //       },
  //     ],
  //     name: "Main",
  //   },
  //   {
  //     items: [
  //       {
  //         _id: 3,
  //         name: "Icecream",
  //         price: 100,
  //       },
  //     ],
  //     name: "Dessert",
  //   },
  // ]);
  const menuStatus = useSelector((state) => state.menu.status);
  const dispatch = useDispatch();
  const menuData = useSelector((state) => state.menu.menu);
  // console.log(menu);
  useEffect(() => {
    if (menuStatus === "idle") {
      dispatch(getMenu());
    }
  }, [dispatch, menuStatus]);
  console.log(menuData);

  if (menuStatus === "succeeded") {
    return (
      <div className={classes.content}>
        <main>
          <div className={classes.appBarSpacer} />
          <Container maxWidth='lg' className={classes.container}>
            <Box display='flex' alignItems='center' m={1} p={1}>
              <Box marginLeft='auto'>
                <Typography
                  component='h1'
                  variant='h3'
                  color='inherit'
                  noWrap
                  className={classes.title}
                >
                  Menu
                </Typography>
              </Box>
              <Box marginLeft='auto'>
                <Button
                  variant='outlined'
                  color='primary'
                  startIcon={<AddIcon />}
                >
                  Add Item
                </Button>
              </Box>
            </Box>
            <Grid
              container
              direction='column'
              justify='flex-start'
              alignItems='flex-start'
            >
              {menuData.map((menuItem, index) => {
                return (
                  <div key={index} className={classes.container}>
                    <Typography
                      variant='subtitle2'
                      color='inherit'
                      noWrap
                      className={classes.title}
                    >
                      {`${menuItem.name}(${menuItem.items.length})`}
                    </Typography>
                    <br />
                    <Grid container className={classes.root} spacing={2}>
                      <Grid item xs={12}>
                        <Grid container justify='flex-start' spacing={6}>
                          {menuItem.items.map((item, index) => (
                            <Grid key={index} item>
                              <MenuCardItem
                                name={item.name}
                                price={item.price}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
            </Grid>
          </Container>
        </main>
      </div>
    );
  } else {
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
