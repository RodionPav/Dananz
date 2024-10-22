import CartEmpty from "../../ui/CartEmpty/CartEmpty";
import CartFull from "../../components/CartFull/CartFull";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

function Cart() {
  // const [items, setItems] = React.useState(
  //   useSelector((state) => state.counter.cartItems)
  // );
  const items = useSelector((state) => state.counter.cartItems);
  const dispatch = useDispatch();
  console.log(items);
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
          {items == false ? (
            <CartEmpty />
          ) : (
            <CartFull dispatch={dispatch} items={items} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
