import "./CartItem.scss";

function CartItem() {
  return (
    <div className="cartItem">
      <div className="cartItem__photo">
        <img src="/img/entry-img.png" alt="" className="cartItem__photo-img" />
      </div>
      <div className="cartItem__description">
        <h2 className="cartItem__description-title">TITLRwdad</h2>
        <p className="cartItem__description-text">
          TEgrguwuogvhwohvow owbevuobwovb woiebvowbevo owvbowbeov wevbowebvi
        </p>
      </div>
      <div className="cartItem__count">
        <p className="cartItem__count-text">10000$</p>
        <div className="cartItem__count__action">
          <button className="cartItem__count__action-button">+</button>
          <div className="cartItem__count__action-text">1</div>
          <button className="cartItem__count__action-button">-</button>
        </div>
        <div className="cartItem__count__delete">
          <button className="cartItem__count__delete-button">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
