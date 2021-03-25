import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Grid, Typography } from "@material-ui/core";

import MenuCardItem from "../components/menu/MenuCardItem";

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
  const [menu, setmenu] = useState([
    {
      items: [
        {
          _id: 1,
          name: "Chicken Tikka Pizza",
          price: 400,
        },
        {
          _id: 2,
          name: "Chicken Feast Pizza",
          price: 500,
        },
      ],
      name: "Main",
    },
    {
      items: [
        {
          _id: 3,
          name: "Icecream",
          price: 100,
        },
      ],
      name: "Dessert",
    },
  ]);

  console.log(menu);

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
            {menu.map((menuItem, index) => {
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
                            <MenuCardItem name={item.name} price={item.price} />
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
}
