/* eslint-disable react/prop-types */ // !!! fix

import "./PersonCard.scss";

function PersonCard({ personCards }) {
  return (
    <ul className="person__cards">
      {personCards.map((person, index) => (
        <li className="person__cards__item" key={index}>
          {/* <img src={person.img} alt="" className="person__cards__item-img" /> */}
          <div className="person__cards__item__content">
            <h3 className="person__cards__item__content-title">
              {person.name}
            </h3>
            <p className="person__cards__item-text top-content__content-text ">
              {person.jobTitle}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PersonCard;
