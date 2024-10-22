import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="logo">Dananz</a>
        <nav className="header__menu">
          <ul className="header__links__list">
            <li className="header__links__list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="header__links__list-item">
              <Link to="/catalog">Catalog</Link>
            </li>
            <li className="header__links__list-item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="header__links__list-item">
              <Link to="/service">Services</Link>
            </li>
            <li className="header__links__list-item">
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
