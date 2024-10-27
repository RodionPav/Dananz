/* eslint-disable react/prop-types */
import { deleteAllItem, deleteItem, addItem } from "../../app/slices/CartSlice";
import "./CartItem.scss";

function CartItem({ dispatch, item }) {
  const price = item.price * item.amount;

  return (
    <div className="cartItem">
      <div className="cartItem__photo">
        <img
          src={item.image}
          alt={item.title}
          className="cartItem__photo-img"
        />
      </div>
      <div className="cartItem__description">
        <h2 className="cartItem__description-title">{item.title}</h2>
        <p className="cartItem__description-text">{item.text}</p>
      </div>
      <div className="cartItem__count">
        <p className="cartItem__count-text">{price}$</p>
        <div className="cartItem__count__action">
          <button
            className="cartItem__count__action-button"
            onClick={() => {
              dispatch(addItem(item));
            }}
          >
            +
          </button>
          <div className="cartItem__count__action-text">{item.amount}</div>
          <button
            className="cartItem__count__action-button"
            onClick={() => {
              dispatch(deleteItem(item));
            }}
          >
            -
          </button>
        </div>
        <div className="cartItem__count__delete">
          <button
            className="cartItem__count__delete-button"
            onClick={() => {
              dispatch(deleteAllItem(item));
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
