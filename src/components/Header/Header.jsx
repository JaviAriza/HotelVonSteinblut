import { useState } from 'react'
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header>
        <nav className="navbar">
          <div className="nav_logo">LOGO</div>
          <div className={`nav_items ${isOpen ? "open" : ""}`}>
            <a href="#">Hotel von Steinblut</a>
            <a href="">Servicios</a>
            <a href="">Galería</a>
            <a href="">FAQ</a>
          </div>
          <div
            className={`nav_toggle ${isOpen ? "open" : ""}`}
            onClick={handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
  );
}

export default Header;
