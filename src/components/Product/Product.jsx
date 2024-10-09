import "./Product.scss";

function Product() {
  const productData = [
    {
      title: "Vintage",
      text: "the use of simple and limited elements to get the best effect or impression.",
    },
    {
      title: "Minimalist",
      text: "the use of simple and limited elements to get the best effect or impression.",
    },
    {
      title: "Modern",
      text: "the use of simple and limited elements to get the best effect or impression.",
    },
    {
      title: "Transitional",
      text: "the use of simple and limited elements to get the best effect or impression.",
    },
  ];

  return (
    <>
      <div className="top-content  product__top">
        <h3 className="top-content-topic product__top-topic">PRODUCT</h3>
        <h2 className="top-content-title  product__top-title">
          Choose your product themes.
        </h2>
        <p className="top-content-text product__top-text">
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </p>
      </div>
      <div className="product__bottom">
        <nav className="menu product__menu ">
          <ul className="product__bottom__list">
            {productData.map((elm, index) => (
              <li className="product__bottom__list__item" key={index}>
                <div className="product__bottom__list__item-number">
                  {index}
                </div>
                <div className="product__bottom__list__item__content">
                  <h3 className="link product__bottom__list__item__content-title">
                    {elm.title}
                  </h3>
                  <p className="product__bottom__list__item__content-text">
                    {elm.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Product;
