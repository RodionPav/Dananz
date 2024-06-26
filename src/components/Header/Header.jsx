import "./Header.scss";

function Header() {
  return (
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
  )
}

export default Header