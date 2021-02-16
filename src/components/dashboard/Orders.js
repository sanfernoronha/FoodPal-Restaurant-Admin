import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, timestamp, itemName, tableNo, paymentMethod, quantity) {
  return { id, timestamp, itemName, tableNo, paymentMethod, quantity };
}

const rows = [
  createData(
    0,
    "12:00, 16 Mar 2019",
    "Butter Chicken",
    1,
    "VISA ⠀•••• 3719",
    1
  ),
  createData(1, "14:00, 16 Mar 2019", "Misal Pav", 5, "VISA ⠀•••• 2574", 2),
  createData(2, "17:00, 16 Mar 2019", "Matar Paneer", 8, "MC ⠀•••• 1253", 3),
  createData(3, "19:00, 16 Mar 2019", "Chicken Soup", 7, "AMEX ⠀•••• 2000", 2),
  createData(4, "20:00, 16 Mar 2019", "Meatballs", 1, "VISA ⠀•••• 5919", 1),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>Item Name</TableCell>
            <TableCell>Table No</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.timestamp}</TableCell>
              <TableCell>{row.itemName}</TableCell>
              <TableCell>{row.tableNo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
