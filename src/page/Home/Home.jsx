/* eslint-disable react/no-unescaped-entities */
import Banner from "../../blocks/banner/banner";
import ProductThemes from "../../components/ProductThemes/ProductThemes";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__entry">
        <h1 className="home__entry__title">
          Design your interor with high quality.
        </h1>
        <div className="home__entry__text">
          <p>
            ALL RIGHT RESERVED
            <br />
            2022
          </p>
        </div>
        <div className="home__entry__img wrapper-img">
          <img
            src="/img/entry-img.png"
            alt="bright kitchen image"
            className="img"
          />
          <div className="home__entry__cards">
            <Banner />
          </div>
        </div>
      </div>
      <div className="home__about">
        <div className="top-content  home__about__top">
          <h3 className="top-content-topic home__about__top-topic">ABOUT</h3>
          <h2 className="top-content-title  home__about__top-title">
            “We're one of the best furniture agency. Prioritizing customers and
            making purchases easy are the hallmarks of our agency.”
          </h2>
        </div>
        <div className="home__about__bottom">
          <img
            src="/img/about-img.png"
            alt="bright kitchen with wooden table image"
            className="home__about__bottom__img"
          />
          <div className="home__about__bottom__content">
            <div className="home__about__bottom__content__text">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere.
            </div>
            <button className="button home__about__bottom__content__button">
              Learn More
            </button>
          </div>
          <div className="home__about__bottom__card">
            <img
              src="/img/CEO-picture.png"
              alt="picture of CEO"
              className="home__about__bottom__card-img"
            />
            <p className="home__about__bottom__card__text">
              <span className="home__about__bottom__card__text-title">
                Arga Danaan
              </span>
              <span> CEO of Dananz</span>
            </p>
          </div>
        </div>
      </div>
      <div className="home__service">
        <div className="top-content">
          <h3 className="top-content-topic home__service__top-topic">
            SERVICE
          </h3>
          <h2 className="top-content-title home__service__top-title">
            attractive furniture with the best quality.
          </h2>
          <p className="top-content-text home__service__top-text">
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </p>
        </div>
        <div className="home__service__bottom home__service__img">
          <nav className="menu  home__service__menu ">
            <ul className="links__list home__service__links__list">
              <li className="links__list__item home__service__links__list__item">
                <p className="links__list__item-number home__service__links__list__item-number">
                  01
                </p>
                <a href="#" className="link home__service__link">
                  Interior Design
                </a>
                <img
                  src="/img/arrow-right.png"
                  alt="arrow right image"
                  className="link links__list-img home__service__links__list-img"
                />
              </li>
              <li className="links__list__item home__service__links__list__item">
                <p className="links__list__item-number home__service__links__list__item-number">
                  02
                </p>
                <a href="#" className="link home__service__link">
                  Consultant
                </a>
                <img
                  src="/img/arrow-right.png"
                  alt="arrow right image"
                  className="link links__list-img home__service__links__list-img"
                />
              </li>
              <li className="links__list__item home__service__links__list__item">
                <p className="links__list__item-number home__service__links__list__item-number">
                  03
                </p>
                <a href="#" className="link home__service__link">
                  Construction Consultant
                </a>
                <img
                  src="/img/arrow-right.png"
                  alt="arrow right image"
                  className="link links__list-img home__service__links__list-img"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="home__product">
        <ProductThemes />
      </div>

      <div className="home__material">
        <div className="top-content  home__material__top">
          <h3 className="top-content-topic home__material__top-topic">
            MATERIAL
          </h3>
          <h2 className="top-content-title  home__material__top-title">
            choice of materials for quality furniture.
          </h2>
          <p className="top-content-text home__material__top-text">
            You can custom the material as desired. And our furniture uses the
            best materials and selected quality materials.
          </p>
          <button className="home__material__top-button button ">
            See Materials
          </button>
        </div>
        <div className="home__material__bottom">
          <div className="home__material__bottom-left"></div>
          <div className="home__material__bottom-right-top"></div>
          <div className="home__material__bottom-right-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
