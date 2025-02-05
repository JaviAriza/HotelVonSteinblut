import { BsGithub, BsInstagram } from "react-icons/bs";
import "./FooterComponent.css";
import logo from "./assets/logo.png";

export default function FooterComponent() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="follow">
          <h4>Síguenos en:</h4>
          <a href="#" className="social-icon"><BsInstagram /></a>
          <a href="#" className="social-icon"><BsGithub /></a>
        </div>

        <div className="derechos">
          <p>© Hotel Von Steinblut 2025. Todos los derechos reservados.</p>
          <div className="legal-links">
            <a href="#">Aviso Legal</a> |
            <a href="#">Política de Privacidad</a> |
            <a href="#">Términos y Condiciones</a>
          </div>
        </div>

        <div className="logo">
          <img src={logo} alt="Hotel Von Steinblut Logo" />
        </div>
      </div>
    </footer>
  );
}
