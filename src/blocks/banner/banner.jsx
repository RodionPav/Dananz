import "./banner.scss";

function Banner() {
  return (
    <ul className="banner">
      <li className="banner__item">
        <h3 className="banner__item-header">350+</h3>
        <p className="banner__item-text">Project Completed</p>
      </li>
      <li className="banner__item">
        <h3 className="banner__item-header">23+</h3>
        <p className="banner__item-text">Professional Teams</p>
      </li>
      <li className="banner__item">
        <h3 className="banner__item-header">15+</h3>
        <p className="banner__item-text">Years Experience</p>
      </li>
    </ul>
  );
}

export default Banner;
