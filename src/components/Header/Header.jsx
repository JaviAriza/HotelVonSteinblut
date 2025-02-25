import { useState } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className='fixed top-0 w-full z-15 h-[60px]'>
        <nav className="navbar [background-color:transparent] h-full flex items-center justify-between text-white">
          <div
            className={`nav_toggle ${isOpen ? "open" : ""}`}
            onClick={handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="mx-3 nav_logo size-10"><img src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png" alt="hotel-logo" /></div>
          <ul className={`backdrop-blur-[5px] nav_items flex ${isOpen ? "open" : ""}`}>
            <li ><Link to="/">Hotel</Link></li>
            <li ><Link to="/restaurant">Services</Link></li>
            <li ><Link to="/restaurant">Gallery</Link></li>
            <li ><Link to="/restaurant">FAQ</Link></li>
            <li ><Link to="/restaurant">Restaurant</Link></li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
