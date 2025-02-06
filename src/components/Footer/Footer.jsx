import { BsGithub, BsInstagram } from "react-icons/bs";
import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="follow">
          <h4>Follow us on:</h4>
          <a href="#" className="social-icon"><BsInstagram /></a>
          <a href="#" className="social-icon"><BsGithub /></a>
        </div>

        <div className="rights">
          <p>© Hotel Von Steinblut 2025. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Legal Notice</a> |
            <a href="#">Privacy Policy</a> |
            <a href="#">Terms and Conditions</a>
          </div>
        </div>

        <div className="logo">
          <img src={logo} alt="Hotel Von Steinblut Logo" />
        </div>
      </div>
    </footer>
  );

}
export default Footer;
