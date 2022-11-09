import EarthLogo from "../../images/earth.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <img className="nav-logo" src={EarthLogo}></img>
      <p className="nav-text">my travel journal.</p>
    </nav>
  );
};

export default Header;
