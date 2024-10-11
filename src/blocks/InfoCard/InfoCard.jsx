import "./InfoCard.scss";

function InfoCard() {
  const data = [
    {
      title: "High Quality",
      img: "/img/high-quality.jpg",
      text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
    {
      title: "Professional Designer",
      img: "/img/graphic-design.jpg",
      text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
    {
      title: "High Quality",
      img: "/img/best-services.jpg",
      text: "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
    },
  ];
  return (
    <ul className="cards">
      {data.map((elm, index) => (
        <li className="cards__item" key={index}>
          <img src={elm.img} alt="" className="cards__item-img" />
          <h3 className="cards__item-title">{elm.title}</h3>
          {/* !!! fix  top-content-text*/}
          <p className="cards__item-text top-content-text ">{elm.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default InfoCard;
