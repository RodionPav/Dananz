/* eslint-disable react/prop-types */
import ButtonWrrapper from "../../ui/button/button";
import CartItem from "../CartItem/CartItem";
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
        <ButtonWrrapper text={"BUY"} />
      </div>
    </div>
  );
}

export default CartFull;
