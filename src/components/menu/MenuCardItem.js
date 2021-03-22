import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 120,
  },
});
export default function MenuCardItem({name,price}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image='https://www.btklsby.go.id/images/placeholder/food.png'
      />
      <CardContent>
        <Typography variant='h6' component='h2'>
          {name}
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AttachMoneyIcon color='action' fontSize='small' />
          <Typography variant='subtitle2' color='textSecondary' component='h2'>
            {price}
          </Typography>
        </div>
      </CardContent>

      <CardActions>
        <Button size='small' color='secondary' startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button size='small' color='primary' startIcon={<EditIcon />}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
