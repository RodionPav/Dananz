/* eslint-disable react/prop-types */
import "./ProductBlock.scss";

function ProductBlock({ obj }) {
  return (
    <div className="product">
      <div className="product__top">
        <a href="" className="product__top-link"></a>
        <img src={obj.img} alt="" className="product__top-img" />
      </div>
      <div className="product__content">
        <h4 className="product__content-title">{obj.title}</h4>
        <p className="product__content-text">
          {obj.inStock ? "in stock" : "not in stock"}
        </p>
        <div className="product__content__bottom">
          <button className="product__content__bottom-button">BUY</button>
          <p className="product__content__bottom-price">{obj.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductBlock;
