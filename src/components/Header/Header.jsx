import "./Header.scss";
import Button from "../../blocks/button/button";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="logo"> Dananz</a>
        <nav className="header__menu">
          <ul className="header__links__list">
            <li className="header__links__list-item">
              <a href="/" className="link header__link">
                Home
              </a>
            </li>
            <li className="header__links__list-item">
              <a href="/about" className="link header__link">
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
              <Button />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
