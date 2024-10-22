/* eslint-disable react/prop-types */
import { deleteAllItems, deleteItem } from "../../app/slices/CartSlice";
import "./CartItem.scss";

function CartItem({ deleteAllItems, deleteItems, item }) {
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
        <p className="cartItem__count-text">{item.price}$</p>
        <div className="cartItem__count__action">
          <button className="cartItem__count__action-button">+</button>
          <div className="cartItem__count__action-text">1</div>
          <button
            className="cartItem__count__action-button"
            onClick={() => {
              console.log(item)
              deleteItems(item.id);
            }}
          >
            -
          </button>
        </div>
        <div className="cartItem__count__delete">
          <button
            className="cartItem__count__delete-button"
            onClick={() => {
              deleteAllItems(item);
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
