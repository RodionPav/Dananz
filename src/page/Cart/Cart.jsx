import CartEmpty from "../../ui/CartEmpty/CartEmpty";
import CartFull from "../../components/CartFull/CartFull";
import "./Cart.scss";
import { Link } from "react-router-dom";

function Cart() {
  let f = false;
  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="cart__top-title">CART</h2>
      </div>
      <div className="cart__header">
        <div className="cart__header__text">
          <p className="cart__header__text-p">current order</p>
          <span className="cart__header__text-span">{0}</span>
        </div>
      </div>
      <div className="cart__content">
        <div className="cart__content__main">
          {f == true ? <CartEmpty /> : <CartFull />}
        </div>
      </div>
    </div>
  );
}

export default Cart;
