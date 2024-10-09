import "./intro.scss";

function Intro({intro}) {
  return (
    <div className="intro">
      <h1 className="intro__title page-title">{intro.title}</h1>
      <p className="intro__text">{intro.text}</p>
      <img src={intro.img} alt="" className="intro__image" />
    </div>
  );
}

export default Intro;
