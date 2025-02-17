import { useState } from 'react'
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header className='fixed top-0 w-full z-10 h-[60px]'>
        <nav className="navbar pl-3 bg-stone-800 h-full flex items-center justify-between text-white">
          <div
            className={`nav_toggle ${isOpen ? "open" : ""}`}
            onClick={handleToggle} role="button" aria-label='Toggle menu'
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="nav_logo size-10"><img src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png" alt="hotel-logo" /></div>
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