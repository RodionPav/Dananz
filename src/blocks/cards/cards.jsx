import "./cards.scss";

function Cards() {
  return (
    <ul className="cards">
      <li className="cards__item">
        <img src="/img/high-quality.jpg" alt="" className="cards__item-img" />
        <h3 className="cards__item-title">High Quality</h3>
        {/* !!! fix  top-content-text*/}
        <p className="cards__item-text top-content-text ">
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
      </li>
      <li className="cards__item">
        <img src="/img/graphic-design.jpg" alt="" className="cards__item-img" />
        <h3 className="cards__item-title">Professional Designer</h3>
        <p className="cards__item-text top-content-text ">
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
      </li>
      <li className="cards__item">
        <img src="/img/best-services.jpg" alt="" className="cards__item-img" />
        <h3 className="cards__item-title">The Best Services</h3>
        <p className="cards__item-text top-content-text ">
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
      </li>
    </ul>
  );
}

export default Cards;
