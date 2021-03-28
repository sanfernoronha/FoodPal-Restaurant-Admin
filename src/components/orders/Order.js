import React from "react";
import { withStyles, makeStyles, styled } from "@material-ui/core/styles";
import { compose, spacing, palette } from "@material-ui/system";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import OutdoorGrillIcon from "@material-ui/icons/OutdoorGrill";

const Box = styled("div")(compose(spacing, palette));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 1050,
  },
});

export default function CustomizedTables({
  order,
  handleIsPreparing,
  handleIsPrepared,
  handleIsServed,
  tableNumber,
  time,
}) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Table Number : {tableNumber}</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="right">
              <Box color="white" bgcolor="black" p={1}>
                {time}
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell>Item Name</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.items.map((item) => (
            <StyledTableRow key={item._id}>
              <StyledTableCell component="th" scope="row">
                {item.itemName}
              </StyledTableCell>
              <StyledTableCell align="right">{item.quantity}</StyledTableCell>
              <StyledTableCell align="right">
                <Fab
                  disabled={item.isPreparing}
                  onClick={() => handleIsPreparing(order._id, item)}
                  variant="round"
                  value={item}
                >
                  <OutdoorGrillIcon />
                </Fab>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Fab
                  disabled={item.isPrepared}
                  onClick={() => handleIsPrepared(order._id, item)}
                  variant="round"
                >
                  <AssignmentTurnedInIcon />
                </Fab>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Fab
                  disabled={item.isServed}
                  onClick={() => handleIsServed(order._id, item)}
                  variant="round"
                >
                  <RoomServiceIcon />
                </Fab>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
