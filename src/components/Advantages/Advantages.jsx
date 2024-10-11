import InfoCard from "../../blocks/InfoCard/InfoCard";
import "./Advantages.scss";

function Advantages() {
  return (
    <div className="advantages">
      <div className="top-content advantages__top">
        <h3 className="top-content-topic advantages__top-topic">SERVICE</h3>
        <h2 className="top-content-title  advantages__top-title">
          Why Choose Us
        </h2>
        <p className="top-content-text advantages__top-text">
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
      </div>
      <div className="bottom-content advantages__bottom">
        <div>
          <InfoCard />
        </div>
      </div>
    </div>
  );
}

export default Advantages;
