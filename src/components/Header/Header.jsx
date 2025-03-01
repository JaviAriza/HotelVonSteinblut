import { useState } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className='fixed top-0 w-full z-100 h-[60px]'>
        <nav className="navbar backdrop-blur-[3px] h-full flex items-center justify-between text-white">
          <div
            className={`nav_toggle ${isOpen ? "open" : ""}`}
            onClick={handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="mx-3 nav_logo size-20 mt-11" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><img src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1739791107/VS_chiquito_hshofp.png" alt="hotel-logo" /></div>
          <ul className={`backdrop-blur-[5px] nav_items flex ${isOpen ? "open" : ""}`}>
                      <li><Link to="/">Hotel</Link></li>
          <li><Link to="/restaurant">Restaurant</Link></li>
          <li><Link to="/reservations">Rooms</Link></li>
          <li><Link to="/restaurant">Services</Link></li>
          <li><Link to="/restaurant">Gallery</Link></li>
          <li><Link to="/restaurant">FAQ</Link></li>
          <li><Link to="/customer">Profile</Link></li>
          <li><Link to="/login">Login</Link></li>

          </ul>
        </nav>
      </header>
  );
}

export default Header;
