import Cards from "../../blocks/cards/cards";
import PersonCard from "../../blocks/PersonCard/PersonCard";
import Intro from "../../components/intro/intro";
import "./Team.scss";

const Team = () => {
  const intro = {
    title: "Our Team",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "/img/teamwork/teamwork-2.jpg",
  };

  const personCards = [
    {
      name: "Shoo Phar Dhie",
      img: "./img/staf/person.png",
      jobTitle: "CEO",
    },
    {
      name: "Shoo Phar Dhie",
      img: "./img/staf/person.png",
      jobTitle: "CEO",
    },
    {
      name: "Shoo Phar Dhie",
      img: "./img/staf/person.png",
      jobTitle: "CEO",
    },
    {
      name: "Shoo Phar Dhie",
      img: "./img/staf/person.png",
      jobTitle: "CEO",
    },
    {
      name: "Shoo Phar Dhie",
      img: "./img/staf/person.png",
      jobTitle: "CEO",
    },
    {
      name: "Shoo Phar Dhie",
      img: "./img/staf/person.png",
      jobTitle: "CEO",
    },
    {
      name: "Shoo Phar Dhie",
      img: "./img/staf/person.png",
      jobTitle: "CEO",
    },
    {
      name: "Shoo Phar Dhie",
      img: "./img/staf/person.png",
      jobTitle: "CEO",
    },
  ];

  return (
    <div className="team">
      <div className="team__intro">
        <Intro intro={intro} />
      </div>
      <div className="team__disigner">
        <div className="top-content team__disigner__top">
          <h3 className="top-content-topic team__disigner__top-topic">
            Designer
          </h3>
          <h2 className="top-content-title  team__disigner__top-title">
            Creative Person
          </h2>
          <p className="top-content-text home__service__top-text">
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </p>
        </div>
        <div className="team__disigner__bottom">
          <PersonCard personCards={personCards} />
        </div>
      </div>
      <div className="about__service">
        <div className="top-content about__service__top">
          <h3 className="top-content-topic about__service__top-topic">
            SERVICE
          </h3>
          <h2 className="top-content-title  about__service__top-title">
            Why Choose Us
          </h2>
          <p className="top-content-text about__service__top-text">
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </p>
        </div>
        <div className="bottom-content about__service__bottom">
          <div>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
