import React, {useContext} from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const CartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  }

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount:1})
  }

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
        onRemove={CartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}/>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amout</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button clasName={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button clasName={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
