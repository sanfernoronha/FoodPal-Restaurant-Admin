import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flex: 1,
    height: "100vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
  },
  circle: {
    strokeLinecap: "round",
  },
}));

export default function FacebookCircularProgress(props) {
  const classes = useStylesFacebook();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant='indeterminate'
        disableShrink
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </div>
  );
}
