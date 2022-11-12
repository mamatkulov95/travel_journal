import data from "./CardData";
import locationLogo from "../../images/location-logo.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      {data.map(
        (
          {
            travelPhoto,
            travelCountry,
            travelUrl,
            travelPlace,
            travelDate,
            travelDescription,
          },
          index
        ) => {
          return (
            <section className="card-section" key={index}>
              <img className="travel-photo" src={travelPhoto}></img>
              <div className="travel-content">
                <div className="travel-location">
                  <img className="location-logo" src={locationLogo}></img>
                  <p className="travel-country">{travelCountry}</p>
                  <a className="travel-map" target="_blank" href={travelUrl}>
                    View on Google Maps
                  </a>
                </div>
                <h1 className="travel-place">{travelPlace}</h1>
                <p className="travel-date">{travelDate}</p>
                <p className="travel-place-description">{travelDescription}</p>
              </div>
            </section>
          );
        }
      )}
    </div>
  );
};

export default Card;
