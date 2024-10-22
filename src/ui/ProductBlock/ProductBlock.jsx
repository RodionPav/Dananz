/* eslint-disable react/prop-types */
import "./ProductBlock.scss";
import { addItem } from "../../app/slices/CartSlice";

function ProductBlock({ obj, addItem }) {
  return (
    <div className="product">
      <div className="product__photo">
        <img className="product__photo-img" src={obj.image} alt="" />
      </div>
      <div className="product__details">
        <h4 className="product__details-title">{obj.title}</h4>
        <p className="product__details-text">{obj.text}</p>
      </div>
      <div className="product__bottom">
        <div className="product__bottom-price">{obj.price}$</div>
        <button className="product__bottom-button" onClick={() => addItem(obj)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductBlock;
