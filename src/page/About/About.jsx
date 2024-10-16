/* eslint-disable react/no-unescaped-entities */

import Banner from "../../blocks/banner/banner";
import PersonCard from "../../blocks/PersonCard/PersonCard";
import Advantages from "../../components/Advantages/Advantages";
import Intro from "../../components/intro/intro";
import "./About.scss";

function About() {
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

  const intro = {
    title: "About",
    text: " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "/img/teamwork/about-intro.png",
  };

  return (
    <div className="about">
      <div className="about__intro">
        <Intro intro={intro} />
      </div>
      <div className="about__achievement">
        <div className="top-content about__achievement__top">
          <h3 className="top-content-topic about__achievement__top-topic">
            ACHIEVEMENT
          </h3>
          <h2 className="top-content-title  about__achievement__top-title">
            interior customization with Danaanz, best quality with professional
            workers
          </h2>
        </div>
        <div className="about__achievement__bottom">
          <img
            src="/img/achievement-img.png"
            alt=""
            className="about__achievement__bottom-img"
          />
          <div className="about__achievement__bottom-banner">
            <Banner />
          </div>
        </div>
      </div>
      <div className="about__disigner">
        <div className="top-content about__disigner__top">
          <h3 className="top-content-topic about__disigner__top-topic">
            Designer
          </h3>
          <h2 className="top-content-title  about__disigner__top-title">
            Creative Person
          </h2>
          <p className="top-content-text home__service__top-text">
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </p>
        </div>
        <div className="about__disigner__bottom">
          <PersonCard personCards={personCards} />
        </div>
      </div>
      <Advantages />
    </div>
  );
}

export default About;
