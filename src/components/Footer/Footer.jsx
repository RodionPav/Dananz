/* eslint-disable react/no-unescaped-entities */
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="top-content  footer__top">
        <h2 className="top-content-title  footer__top-title">
          let's discuss making your interior like a dream place!
        </h2>
        <p className="top-content-text footer__top-text">
          Contact us below to work together to build your amazing interior
        </p>
        <button className="button footer__top-button">Contact Us</button>
      </div>
      <div className="footer__bottom">
        <a className="logo footer__bottom-logo"> Dananz</a>
        <h2 className="footer__bottom-title">
          One of the best furniture agency.
        </h2>
        <fieldset className="footer__bottom__fieldset">
          <h2 className="footer__bottom__fieldset-title">
            Enter your email to get the latest news
          </h2>
          <label className="footer__bottom__fieldset__label">
            <span className="footer__bottom-text visually-hidden">Город</span>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="footer__bottom__fieldset-input"
            />
          </label>
        </fieldset>
        <div className="footer__bottom__social">
          <p className="footer__bottom__social-text">Follow us On</p>
          <ul className="footer__bottom__social__list">
            <li className="footer__bottom__social__list__item">
              <a className="link footer__bottom__social__list__item-link">
                <img
                  className="footer__bottom__social__list__item-icon"
                  src="/img/fasebook.png"
                  alt="fasebook link"
                />
              </a>
            </li>
            <li className="footer__bottom__social__list__item">
              <a className="link footer__bottom__social__list__item-link">
                <img
                  className="footer__bottom__social__list__item-icon"
                  src="/img/instagram.png"
                  alt="instagram link"
                />
              </a>
            </li>
            <li className="footer__bottom__social__list__item">
              <a className="link footer__bottom__social__list__item-link">
                <img
                  className="footer__bottom__social__list__item-icon"
                  src="/img/tiktok.png"
                  alt="tiktok link"
                />
              </a>
            </li>
            <li className="footer__bottom__social__list__item">
              <a className="link footer__bottom__social__list__item-link">
                <img
                  className="footer__bottom__social__list__item-icon"
                  src="/img/youtube.png"
                  alt="youtube link"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
