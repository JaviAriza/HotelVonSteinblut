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
          <div
            className={`nav_toggle ${isOpen ? "open" : ""}`}
            onClick={handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="nav_logo">LOGO</div>
          <div className={`nav_items ${isOpen ? "open" : ""}`}>
            <a href="#">Hotel von Steinblut</a>
            <a href="">Services</a>
            <a href="">Gallery</a>
            <a href="">FAQ</a>
            <a href="#">Profile</a>
          </div>
        </nav>
      </header>
  );
}

export default Header;
