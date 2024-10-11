import "./ProductThemes.scss";

function ProductThemes() {
  const product = [
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
      <div className="top-content  productThemes__top">
        <h3 className="top-content-topic productThemes__top-topic">PRODUCT</h3>
        <h2 className="top-content-title  productThemes__top-title">
          Choose your product themes.
        </h2>
        <p className="top-content-text productThemes__top-text">
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </p>
      </div>
      <div className="productThemes__bottom">
        <nav className="menu productThemes__menu ">
          <ul className="productThemes__bottom__list">
            {product.map((elm, index) => (
              <li className="productThemes__bottom__list__item" key={index}>
                <div className="productThemes__bottom__list__item-number">
                  {index}
                </div>
                <div className="productThemes__bottom__list__item__content">
                  <h3 className="link productThemes__bottom__list__item__content-title">
                    {elm.title}
                  </h3>
                  <p className="productThemes__bottom__list__item__content-text">
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

export default ProductThemes;
