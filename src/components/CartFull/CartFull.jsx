/* eslint-disable react/prop-types */
import CartItem from "../../ui/CartItem/CartItem";
import "./CartFull.scss";

function CartFull({ dispatch, cartItems }) {
  return (
    <div className="cartFull">
      <div className="cartFull__items">
        {cartItems.map((item, index) => (
          <CartItem item={item} key={index} dispatch={dispatch} />
        ))}
      </div>
      <div className="cartFull__submit">
        <button className="cartFull__submit-text button">BUY</button>
      </div>
    </div>
  );
}

export default CartFull;
