import React from "react";
import Order from "./Order";

const orders = [
  {
    _id: "0c60e335-0db8-4ff6-87a3-3000bee971ac",
    userId: "cc70bd8e-c023-4d68-b8c9-88fad78ac7ec",
    restaurantId: "f7c8b4d8-3024-4ae3-ba26-cde5b2a057a9",
    tableNumber: 2,
    total: 560,
    isPaid: false,
    items: [
      {
        _id: "0efddf75-132c-4a40-963c-2ae12fbb3db3",
        itemName: "Dal Makhani",
        quantity: 2,
        price: 280,
        isPrepared: false,
        isPreparing: false,
        isServed: false,
      },
      {
        _id: "8e27ee37-2e57-41dd-adbf-79adda4d18aa",
        itemName: "Paneer Makhani",
        quantity: 2,
        price: 280,
        isPrepared: false,
        isPreparing: false,
        isServed: false,
      },
    ],
    createdAt: "18:15",
  },
  {
    _id: "83dd7141-a7f7-4f6f-8908-047e2c8a6762",
    userId: "e6d67b1e-ad35-4dc9-963b-ccd30ae726c0",
    restaurantId: "f7c8b4d8-3024-4ae3-ba26-cde5b2a057a9",
    tableNumber: 3,
    total: 280,
    isPaid: false,
    items: [
      {
        _id: "c7556306-a3ea-40d6-b809-83f5ee5b9e42",
        itemName: "Fried Rice",
        quantity: 2,
        price: 280,
        isPrepared: false,
        isPreparing: false,
        isServed: false,
      },
    ],
    createdAt: "18:20",
  },
  {
    _id: "c8d1ce17-f2ee-4014-ae8d-0e2a2e8b10e5",
    userId: "92116cc9-b84d-46cf-a087-33b361d39a35",
    restaurantId: "f7c8b4d8-3024-4ae3-ba26-cde5b2a057a9",
    tableNumber: 1,
    total: 660,
    isPaid: false,
    items: [
      {
        _id: "69c34bd8-32b3-430b-b6ef-24201b5e0156",
        itemName: "Chicken Fry",
        quantity: 4,
        price: 380,
        isPrepared: false,
        isPreparing: false,
        isServed: false,
      },
      {
        _id: "9b821b69-a034-4678-8440-97ea852cda44",
        itemName: "Dal Makhani",
        quantity: 1,
        price: 180,
        isPrepared: false,
        isPreparing: false,
        isServed: false,
      },
      {
        _id: "dd85e50d-8837-460b-a8ba-b4e8665767bb",
        itemName: "Butter Naan",
        quantity: 2,
        price: 100,
        isPrepared: false,
        isPreparing: false,
        isServed: false,
      },
    ],
    createdAt: "18:25",
  },
];

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = { orders: orders };
    this.handleIsPreparing = this.handleIsPreparing.bind(this);
    this.handleIsPrepared = this.handleIsPrepared.bind(this);
    this.handleIsServed = this.handleIsServed.bind(this);
  }

  handleIsPreparing = (_id, item) => {
    var Orders = this.state.orders;
    var orderIndex = Orders.findIndex((obj) => obj._id == _id);
    var objIndex = Orders[orderIndex].items.findIndex(
      (obj) => obj._id == item._id
    );
    Orders[orderIndex].items[objIndex].isPreparing = true;
    this.setState({ orders: Orders });
  };

  handleIsPrepared = (_id, item) => {
    var Orders = this.state.orders;
    var orderIndex = Orders.findIndex((obj) => obj._id == _id);
    var objIndex = Orders[orderIndex].items.findIndex(
      (obj) => obj._id == item._id
    );
    Orders[orderIndex].items[objIndex].isPrepared = true;
    this.setState({ orders: Orders });
  };

  handleIsServed = (_id, item) => {
    var Orders = this.state.orders;
    var orderIndex = Orders.findIndex((obj) => obj._id == _id);
    var objIndex = Orders[orderIndex].items.findIndex(
      (obj) => obj._id == item._id
    );
    Orders[orderIndex].items[objIndex].isServed = true;
    this.setState({ orders: Orders });
  };

  render() {
    return (
      <React.Fragment>
        {orders.map((order) => (
          <Order
            order={order}
            tableNumber={order.tableNumber}
            time={order.createdAt}
            handleIsPreparing={this.handleIsPreparing}
            handleIsPrepared={this.handleIsPrepared}
            handleIsServed={this.handleIsServed}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Orders;
