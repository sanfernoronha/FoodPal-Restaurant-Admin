import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    setValues,
    handleInputChange,
  };
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

export function Form(props) {
  const classes = useStyles();
  return (
    <form className={classes.form} autoComplete='off'>
      {props.children}
    </form>
  );
}
