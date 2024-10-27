import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";

import CartEmpty from "../../components/CartEmpty/CartEmpty";
import CartFull from "../../components/CartFull/CartFull";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="cart__top-title">CART</h2>
      </div>
      <div className="cart__header">
        <div className="cart__header__text">
          <p className="cart__header__text-p">current order</p>
          <span className="cart__header__text-span">
            {cart.cartItems == false ? 0 : cart.amount}
          </span>
        </div>
      </div>
      <div className="cart__content">
        <div className="cart__content__main">
          {cart.cartItems == false ? (
            <CartEmpty />
          ) : (
            <CartFull dispatch={dispatch} cartItems={cart.cartItems} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
