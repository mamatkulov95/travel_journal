import locationLogo from "../images/location-logo.png";

import "./Card.css";

const Card = (props) => {
  return (
    <section className="card-section">
      <img className="travel-photo" src={props.travelPhoto}></img>
      <div className="travel-content">
        <div className="travel-location">
          <img className="location-logo" src={locationLogo}></img>
          <p className="travel-country">{props.travelCountry}</p>
          <a className="travel-map" target="_blank" href={props.travelUrl}>
            View on Google Maps{" "}
          </a>
        </div>
        <h1 className="travel-place">{props.travelPlace}</h1>
        <p className="travel-date">{props.travelDate}</p>
        <p className="travel-place-description">{props.travelDescription}</p>
      </div>
    </section>
  );
};

export default Card;
