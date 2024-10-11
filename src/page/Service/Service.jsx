/* eslint-disable react/no-unescaped-entities */

import Intro from "../../components/intro/intro";
import ProductThemes from "../../components/ProductThemes/ProductThemes";
import "./Service.scss";

function Service() {
  const intro = {
    title: "Services",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "/img/service-img.png",
  };

  const achiv = [
    {
      title: "Interior design",
      text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
      img: "img/interior/interior-design-1.png",
    },
    {
      title: "Interior design",
      text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
      img: "img/teamwork/consultant-img.png",
    },
    {
      title: "Interior design",
      text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
      img: "img/teamwork/teamwork-1.png",
    },
  ];

  return (
    <div className="service">
      <div className="service__intro">
        <Intro intro={intro} />
      </div>
      <div className="service__achievement">
        <div className="top-content service__achievement__top">
          <h3 className="top-content-topic service__achievement__top-topic">
            ACHIEVEMENT
          </h3>
        </div>
        <div className="service__achievement__bottom">
          <ul className="service__achievement__bottom__list">
            {achiv.map((elem, index) => (
              <li
                className="service__achievement__bottom__list__item"
                key={index}
              >
                <img
                  src={elem.img}
                  alt={index}
                  className="service__achievement__bottom__list__item-img"
                />
                <h3 className="service__achievement__bottom__list__item-title">
                  {elem.title}
                </h3>
                <p className="service__achievement__bottom__list__item-text">
                  {elem.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="service__product">
        <ProductThemes />
      </div>
    </div>
  );
}

export default Service;
