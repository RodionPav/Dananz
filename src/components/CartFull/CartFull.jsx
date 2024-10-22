/* eslint-disable react/prop-types */
import CartItem from "../../ui/CartItem/CartItem";
import "./CartFull.scss";

function CartFull({ dispatch, items }) {
  let cartItems = [];
  if (items) {
    cartItems = items.map((item, index) => (
      <CartItem item={item} key={index} dispatch={dispatch} />
    ));
  }
  return (
    <div className="cartFull">
      <div className="cartFull__items">{cartItems}</div>
    </div>
  );
}

export default CartFull;
