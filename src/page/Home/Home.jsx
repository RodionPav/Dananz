/* eslint-disable react/no-unescaped-entities */
import "./Home.scss";

function Home() {
  return (
    <>
      <div className="intro">
        <h1 className="intro__title">Design your interor with high quality.</h1>
        <div className="intro__text">
          <p>
            ALL RIGHT RESERVED
            <br />
            2022
          </p>
        </div>
        <div className="intro__img wrapper-img">
          <img
            src="/img/intro-img.png"
            alt="bright kitchen image"
            className="img"
          />
          <ul className="intro__cards">
            <li className="intro__cards__item">
              <h3 className="intro__cards__item-header">350+</h3>
              <p className="intro__cards__item-text">Project Completed</p>
            </li>
            <li className="intro__cards__item">
              <h3 className="intro__cards__item-header">23+</h3>
              <p className="intro__cards__item-text">Professional Teams</p>
            </li>
            <li className="intro__cards__item">
              <h3 className="intro__cards__item-header">15+</h3>
              <p className="intro__cards__item-text">Years Experience</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="about">
        <div className="top-content  about__top">
          <h3 className="top-content-topic about__top-topic">ABOUT</h3>
          <h2 className="top-content-title  about__top-title">
            “We're one of the best furniture agency. Prioritizing customers and
            making purchases easy are the hallmarks of our agency.”
          </h2>
        </div>
        <div className="about__bottom">
          <img
            src="/img/about-img.png"
            alt="bright kitchen with wooden table image"
            className="about__bottom__img"
          />
          <div className="about__bottom__content">
            <div className="about__bottom__content__text">
              Online learning with us does not interfere with your daily life.
              because learning can be done anytime and anywhere.
            </div>
            <button className="button about__bottom__content__button">
              Learn More
            </button>
          </div>
          <div className="about__bottom__card">
            <img
              src="/img/CEO-picture.png"
              alt="picture of CEO"
              className="about__bottom__card-img"
            />
            <p className="about__bottom__card__text">
              <span className="about__bottom__card__text-title">
                Arga Danaan
              </span>
              <span>CEO of Dananz</span>
            </p>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="top-content">
          <h3 className="top-content-topic service__top-topic">SERVICE</h3>
          <h2 className="top-content-title service__top-title">
            attractive furniture with the best quality.
          </h2>
          <p className="top-content-text service__top-text">
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </p>
        </div>
        <div className="service__bottom service__img">
          <nav className="menu  service__menu ">
            <ul className="links__list service__links__list">
              <li className="links__list__item service__links__list__item">
                <p className="links__list__item-number service__links__list__item-number">
                  01
                </p>
                <a href="#" className="link service__link">
                  Interior Design
                </a>
                <img
                  src="/img/arrow-right.png"
                  alt="arrow right image"
                  className="link links__list-img service__links__list-img"
                />
              </li>
              <li className="links__list__item service__links__list__item">
                <p className="links__list__item-number service__links__list__item-number">
                  02
                </p>
                <a href="#" className="link service__link">
                  Consultant
                </a>
                <img
                  src="/img/arrow-right.png"
                  alt="arrow right image"
                  className="link links__list-img service__links__list-img"
                />
              </li>
              <li className="links__list__item service__links__list__item">
                <p className="links__list__item-number service__links__list__item-number">
                  03
                </p>
                <a href="#" className="link service__link">
                  Construction Consultant
                </a>
                <img
                  src="/img/arrow-right.png"
                  alt="arrow right image"
                  className="link links__list-img service__links__list-img"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="product">
        <div className="top-content  product__top">
          <h3 className="top-content-topic product__top-topic">PRODUCT</h3>
          <h2 className="top-content-title  product__top-title">
            Choose your product themes.
          </h2>
          <p className="top-content-text product__top-text">
            Find the theme you want. If our choice of theme is not what you
            want, you can customize it as you want.
          </p>
        </div>
        <div className="product__bottom">
          <nav className="menu product__menu ">
            <ul className="links__list product__links__list">
              <li className="links__list__item product__links__list__item">
                <p className="links__list__item-number product__links__list__item-number">
                  01
                </p>
                <a href="#" className="link product__link">
                  Vintage
                </a>
                <img
                  src="/img/arrow-right.png"
                  alt="arrow right image"
                  className="link links__list-img product__links__list-img"
                />
              </li>
              <p className="product__links__list-text">
                the use of simple and limited elements to get the best effect or
                impression.
              </p>
              <li className="links__list__item product__links__list__item">
                <p className="links__list__item-number product__links__list__item-number">
                  02
                </p>
                <a href="#" className="link product__link">
                  Minimalist
                </a>
                <img
                  src="/img/arrow-right.png"
                  alt="arrow right image"
                  className="link links__list-img product__links__list-img"
                />
              </li>
              <p className="product__links__list-text">
                the use of simple and limited elements to get the best effect or
                impression.
              </p>
              <li className="links__list__item product__links__list__item">
                <p className="links__list__item-number product__links__list__item-number">
                  03
                </p>
                <a href="#" className="link product__link">
                  Modern
                </a>
                <img
                  src="/img/arrow-right.png"
                  alt="arrow right image"
                  className="link links__list-img product__links__list-img"
                />
              </li>
              <p className="product__links__list-text">
                the use of simple and limited elements to get the best effect or
                impression.
              </p>
              <li className="links__list__item product__links__list__item">
                <p className="links__list__item-number product__links__list__item-number">
                  04
                </p>
                <a href="#" className="link product__link">
                  transitional
                </a>
                <img
                  src="/img/arrow-right.png"
                  alt="arrow right image"
                  className="link links__list-img product__links__list-img"
                />
              </li>
              <p className="product__links__list-text">
                the use of simple and limited elements to get the best effect or
                impression.
              </p>
            </ul>
          </nav>
        </div>
      </div>
      <div className="material">
        <div className="top-content  material__top">
          <h3 className="top-content-topic material__top-topic">MATERIAL</h3>
          <h2 className="top-content-title  material__top-title">
            choice of materials for quality furniture.
          </h2>
          <p className="top-content-text material__top-text">
            You can custom the material as desired. And our furniture uses the
            best materials and selected quality materials.
          </p>
          <button className="material__top-button button ">
            See Materials
          </button>
        </div>
        <div className="material__bottom">
          <div className="material__bottom-left"></div>
          <div className="material__bottom-right-top"></div>
          <div className="material__bottom-right-bottom"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
