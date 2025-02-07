import "./Hero.css";
//import castle1 from '../../assets/castle-1.png';
import castle2 from "../../assets/castle-2.png";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="background">
      <img className="hero-logo" src={logo} alt="hotel von Steinblut logo" />
      <img
        className="hero-img"
        src={castle2}
        alt="hotel von Steinblut castle"
      />
    </div>
  );
};

export default Header;
