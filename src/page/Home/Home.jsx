import "./Home.scss";

function Home() {
  return (
    <>
      <header className="header">
        <a className="title"> Dananz</a>
        <nav className="header__menu">
          <ul className="header__links-list">
            <li className="header__links-list-item">
              <a href="#" className="header__link">
                Home
              </a>
            </li>
            <li className="header__links-list-item">
              <a href="#" className="header__link">
                About Us
              </a>
            </li>
            <li className="header__links-list-item">
              <a href="#" className="header__link">
                Services
              </a>
            </li>
            <li className="header__links-list-item">
              <a href="#" className="header__link">
                Our Teams
              </a>
            </li>
            <li className="header__links-list-item">
              <button className="button header__button">Contact Us</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="intro">
        <div className="intro__top">
          <h1 className="intro__top__title">
            Design your interor with high quality.
          </h1>
          <div className="into__top__card-wrapper">
            <ul className="into__top__cards">
              <li className="into__top__cards-item">
                <span className="into__top__cards-item-span">350+</span> Project
                Completed
              </li>
              <li className="into__top__cards-item">
                <span className="into__top__cards-item-span">23+</span>
                Professional Teams
              </li>
              <li className="into__top__cards-item">
                <span className="into__top__cards-item-span">15+</span>Years
                Experience
              </li>
            </ul>
          </div>
          <div className="into__top__text">
            <p>2022 ALL RIGHT RESERVED</p>
          </div>
        </div>
        <div className="intro__bottom" />
      </div>
      <div className="about"></div>
      <div className="service"></div>
      <div className="product"></div>
      <div className="material"></div>
      <footer className="footer"></footer>
    </>
  );
}

export default Home;
