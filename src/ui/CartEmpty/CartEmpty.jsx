import { Link } from "react-router-dom";
import "./CartEmpty.scss";

function CartEmpty() {
  return (
    <div className="cartEmpty">
      <div className="cartEmpty__content">
        <h2 className="cartEmpty__content-title">your cart is empty</h2>
        <Link to={"/catalog"} className="cartEmpty__content-link button">
          <span className="cartEmpty__content-link-text">To the catalog</span>
        </Link>
      </div>
    </div>
  );
}

export default CartEmpty;
