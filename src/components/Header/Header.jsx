import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasHotelDropdown, setHasHotelDropdown] = useState(false);
  const [hasRestaurantDropdown, setHasRestaurantDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [hoverOffset, setHoverOffset] = useState(null);

  const handleMouseEnter = (event) => {
    const offsetTop = event.target.offsetTop + event.target.offsetHeight + 15;
    setHoverOffset(offsetTop);
  };

  const handleNavigation = (targetPage, hash) => {
    if (location.pathname !== targetPage) {
      navigate(`${targetPage}${hash}`);

      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full z-100 h-[60px]">
      <nav className="navbar h-full flex items-center justify-between text-white backdrop-blur-xs bg-black/20">
        {/*------------------------------- Hamburger menu-------------------------------------*/}
        <div
          className={`nav_toggle ${isOpen ? "open" : ""}`}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* ----------------------------------Logo--------------------------------------------*/}
        <div
          className="mx-3 nav_logo size-15 flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1739791107/VS_chiquito_hshofp.png"
            alt="hotel-logo"
          />
        </div>
        {/* -------------------------------------Hotel-Elements---------------------------------- */}
        <ul className={`nav_items flex ${isOpen ? "open" : ""} max-md:gap-2`}>
          <li
            className={`relative`}
            onMouseEnter={() => setHasHotelDropdown(true)}
            onMouseLeave={() => setHasHotelDropdown(false)}
          >
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Hotel
            </Link>
            {hasHotelDropdown && (
              <>
                {hoverOffset !== null && (
                  <img
                    className="fixed top-0 h-[50px] w-[100px] pointer-events-none z-20 transition-all max-md:left-[90px]"
                    src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740560077/selectorMenu_1_xtjnrq.png"
                    alt="hover-image"
                    style={{ top: `${hoverOffset}px` }}
                  />
                )}
                <ul className="dropdown backdrop-blur-xs bg-black/20 absolute md:top-[175%] max-md:translate-x-[140%] flex flex-col justify-between border-l-1 border-white ">
                  <li onMouseEnter={handleMouseEnter}>
                    <Link
                      to="/"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Home
                    </Link>
                  </li>
                  <li onMouseEnter={handleMouseEnter}>
                    <button
                      onClick={() => handleNavigation("/", "#hotel-services")}
                    >
                      Services
                    </button>
                  </li>
                  <li onMouseEnter={handleMouseEnter}>
                    <Link
                      to="/reservations"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Rooms
                    </Link>
                  </li>
                  <li onMouseEnter={handleMouseEnter}>
                    <button
                      onClick={() => handleNavigation("/", "#hotel-gallery")}
                    >
                      Gallery
                    </button>
                  </li>
                </ul>
              </>
            )}
          </li>
          {/* -------------------------------------Restaurant-Elements---------------------------------- */}

          <li
            className="relative"
            onMouseEnter={() => setHasRestaurantDropdown(true)}
            onMouseLeave={() => setHasRestaurantDropdown(false)}
          >
            <Link
              to="/restaurant"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Restaurant
            </Link>
            {hasRestaurantDropdown && (
              <>
                {hoverOffset !== null && (
                  <img
                    className="fixed top-0 h-[50px] w-[100px] pointer-events-none z-20 transition-all max-md:left-[90px]"
                    src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740560077/selectorMenu_1_xtjnrq.png"
                    alt="hover-image"
                    style={{ top: `${hoverOffset}px` }}
                  />
                )}
                <ul className="dropdown backdrop-blur-xs bg-black/20 absolute md:top-[175%] max-md:top-[10px] max-md:translate-x-[140%] flex flex-col justify-between border-l-1 border-white">
                  <li onMouseEnter={handleMouseEnter}>
                    <Link
                      to="/restaurant"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Home
                    </Link>
                  </li>
                  <li onMouseEnter={handleMouseEnter}>
                    <button
                      onClick={() =>
                        handleNavigation("/restaurant", "#restaurant-services")
                      }
                    >
                      Services
                    </button>
                  </li>
                  <li onMouseEnter={handleMouseEnter}>
                    <button
                      onClick={() =>
                        handleNavigation("/restaurant", "#restaurant-gallery")
                      }
                    >
                      Gallery
                    </button>
                  </li>
                </ul>
              </>
            )}
          </li>
          <li>
            <Link
              to="/faq"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/customer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
