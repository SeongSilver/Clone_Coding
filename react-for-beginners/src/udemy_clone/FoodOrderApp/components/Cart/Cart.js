import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amout: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button clasName={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button clasName={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
