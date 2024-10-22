import CartItem from "../../ui/CartItem/CartItem";
import "./CartFull.scss";

function CartFull() {
  return (
    <div className="cartFull">
      <div className="cartFull__items">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

export default CartFull;
