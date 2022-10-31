import EarthLogo from "../images/earth.svg";
import "./Header.css";

const Header = () => {
  return (
    <navbar className="navbar">
      <img className="nav-logo" src={EarthLogo}></img>
      <p className="nav-text">my travel journal.</p>
    </navbar>
  );
};

export default Header;
