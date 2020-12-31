import { TextField } from "@material-ui/core";
import React from "react";

export default function Input(props) {
  const { name, label, value, onChange, ...other } = props;
  return (
    <TextField
      variant='outlined'
      margin='normal'
      label={label}
      name={name}
      value={value}
      {...other}
      onChange={onChange}
      autoFocus
    />
  );
}
