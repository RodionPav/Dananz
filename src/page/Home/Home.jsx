/* eslint-disable react/no-unescaped-entities */
import "./Home.scss";

function Home() {
  return (
    <>
      <header className="header">
        <a className="logo"> Dananz</a>
        <nav className="header__menu">
          <ul className="header__links__list">
            <li className="header__links__list-item">
              <a href="#" className="link header__link">
                Home
              </a>
            </li>
            <li className="header__links__list-item">
              <a href="#" className="link header__link">
                About Us
              </a>
            </li>
            <li className="header__links__list-item">
              <a href="#" className="link header__link">
                Services
              </a>
            </li>
            <li className="header__links__list-item">
              <a href="#" className="link header__link">
                Our Teams
              </a>
            </li>
            <li className="header__links__list-item">
              <button className="button header__button">Contact Us</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="intro">
        <h1 className="intro__title">Design your interor with high quality.</h1>
        <div className="intro__text">
          <p>
            ALL RIGHT RESERVED
            <br />
            2022
          </p>
        </div>
        <img
          src="../../../public/img/intro-img.png"
          alt="bright kitchen image"
          className="intro__img"
        />
        <ul className="intro__cards">
          <li className="intro__cards-item">
            <span className="intro__cards-item-span">350+</span> Project
            Completed
          </li>
          <li className="intro__cards-item">
            <span className="intro__cards-item-span">23+</span>
            Professional Teams
          </li>
          <li className="intro__cards-item">
            <span className="intro__cards-item-span">15+</span>Years Experience
          </li>
        </ul>
      </div>
      <div className="about">
        <div className="top-content  about__top">
          <h3 className="top-content-text about__top-text">ABOUT</h3>
          <h2 className="top-content-title  about__top-title">
            “We're one of the best furniture agency. Prioritizing customers and
            making purchases easy are the hallmarks of our agency.”
          </h2>
        </div>
        <div className="about__bottom">
          <img
            src="../../../public/img/about-img.png"
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
              src="../../../public/img/CEO-picture.png"
              alt="picture of CEO"
              className="about__bottom__card-img"
            />
            <p className="about__bottom__card__text">
              <span className="about__bottom__card__text-title">
                Arga Danaan
              </span>
              <p>CEO of Dananz</p>
            </p>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="top-content">
          <h3 className="top-content-text">SERVICE</h3>
          <h2 className="top-content-title">
            attractive furniture with the best quality.
          </h2>
          <p className="service__top-text">
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </p>
        </div>
        <img
          src="../../../public/img/service-img.png"
          alt=""
          className="service__img"
        />
        <nav className="service__menu">
          <ul className="service__links__list">
            <li className="service__links__list__item">
              <p className="service__links__list__item-number">01</p>
              <a href="#" className="link service__link">
                <p className="service__link-text">Interior Design</p>
              </a>
              <img
                src="../../../public/img/arrow-right.png"
                alt="arrow right image"
                className="service__links__list-img"
              />
            </li>
            <li className="service__links__list__item">
              <p className="service__links__list__item-number">02</p>
              <a href="#" className="link service__link">
                <p className="service__link-text"> Consultant</p>
              </a>
              <img
                src="../../../public/img/arrow-right.png"
                alt="arrow right image"
                className="service__links__list-img"
              />
            </li>
            <li className="service__links__list__item">
              <p className="service__links__list__item-number"> 03</p>
              <a href="#" className="link service__link">
                <p className="service__link-text">Construction Consultant</p>
              </a>
              <img
                src="../../../public/img/arrow-right.png"
                alt="arrow right image"
                className="service__links__list-img"
              />
            </li>
          </ul>
        </nav>
      </div>
      <div className="product"></div>
      <div className="material"></div>
      <footer className="footer"></footer>
    </>
  );
}

export default Home;
