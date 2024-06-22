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
