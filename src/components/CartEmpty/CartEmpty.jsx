import { Link } from "react-router-dom";
import "./CartEmpty.scss";
import ButtonWrrapper from "../../ui/button/button";

function CartEmpty() {
  return (
    <div className="cartEmpty">
      <div className="cartEmpty__content">
        <h2 className="cartEmpty__content-title">your cart is empty</h2>
        <Link to={"/catalog"} className="cartEmpty__content-link">
          <ButtonWrrapper text={"To the catalog"} />
        </Link>
      </div>
    </div>
  );
}

export default CartEmpty;
