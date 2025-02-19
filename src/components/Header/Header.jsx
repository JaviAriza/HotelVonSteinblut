import { useState } from 'react'
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className='fixed top-0 w-full z-15 h-[60px]'>
        <nav className="navbar pl-3 [background-color:transparent] h-full flex items-center justify-between text-white">
          <div
            className={`nav_toggle ${isOpen ? "open" : ""}`}
            onClick={handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="nav_logo size-22 mt-12"><a href="#"><img src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1739791107/VS_chiquito_hshofp.png" alt="hotel-logo" /></a></div>
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
