import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Box, Container, Typography, Button, Dialog, DialogContentText, DialogActions, DialogTitle, DialogContent, InputAdornment, Snackbar } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import TablesCardItem from "../components/tables/TablesCardItem"
import { useForm, Form } from "../components/useForm";
import Controls from "../components/controls/Controls";

import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import GroupIcon from '@material-ui/icons/Group';
import { Alert } from '@material-ui/lab';

const initialFieldValues = {
  capacity: null,
  tableNumber: null,
};

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  icons: {
    color: theme.palette.primary.dark
  }
}))

export default function Tables() {
  const classes = useStyles();

  //dialog
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
    resetForm();
  }
  //error popup
  const [openError, setOpenError] = useState(false)
  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };
  const handleClickError = () => {
    setOpenError(true);
  };
  //success popup
  const [openSuccess, setOpenSuccess] = useState(false);
  const handleCloseSuccess = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };
  const handleClickSuccess = () => {
    setOpenSuccess(true);
  }
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('capacity' in fieldValues)
      temp.capacity = fieldValues.capacity ? "" : "This field is required."
    if ('tableNumber' in fieldValues)
      temp.tableNumber = fieldValues.tableNumber ? "" : "This field is required."

    setErrors({
      ...temp
    })
    if (fieldValues === values)
      return Object.values(temp).every(x => x === "")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleClickSuccess()
    }
    else {
      handleClickError()
    }
  }
  const { values, handleInputChange, setValues, setErrors, resetForm, errors } = useForm(initialFieldValues, true, validate)
  return (
    <div className={classes.content}>
      <main>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Box display='flex' alignItems='center' m={1} p={1}>
            <Box marginLeft='auto'>
              <Typography
                component='h1'
                variant='h3'
                color='inherit'
                noWrap
                className={classes.title}
              >
                Tables
    </Typography>
            </Box>
            <Box marginLeft='auto'>
              <Button
                variant='outlined'
                color='primary'
                startIcon={<AddIcon />}
                onClick={handleClickOpen}
              >
                Add table
    </Button>
            </Box>
          </Box>

          <TablesCardItem />
        </Container>
      </main>



      {/* Dialog form to add table */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle >Add Table</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a new table
        </DialogContentText>

          {/* form */}
          <Form>
            <Controls.Input

              name="tableNumber"
              label="Table Number *"
              fullWidth
              value={values.tableNumber}
              onChange={handleInputChange}
              error={errors.tableNumber}
              type="number"
              helperText="Keep unique"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AirlineSeatReclineNormalIcon className={classes.icons} />
                  </InputAdornment>
                )
              }}
            />
            <Controls.Input

              name="capacity"
              label="Capacity *"
              fullWidth
              value={values.capacity}
              onChange={handleInputChange}
              error={errors.capacity}
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GroupIcon className={classes.icons} />
                  </InputAdornment>
                )
              }}
            />
          </Form>
        </DialogContent>


        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={openError} autoHideDuration={3000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error">
          Please fill the fields correctly!
  </Alert>
      </Snackbar>
      <Snackbar open={openSuccess} autoHideDuration={3000} onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity="success">
          Tables updated!
  </Alert>
      </Snackbar>
    </div>
  )
}
