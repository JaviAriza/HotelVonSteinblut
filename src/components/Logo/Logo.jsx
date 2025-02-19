import { useState, useEffect } from "react";

const Logo = () => {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      console.log(heroHeight, window.scrollY);

      if (window.scrollY >= heroHeight * 0.4) {
        setIsFixed(false);
      }
      if (window.scrollY <= heroHeight * 0.4) {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <img
      id="logo"
      className={` pointer-events-none  transition-all sm:w-[250px] opacity-80 left-1/2 -translate-x-1/2 duration-500 translate-y-1/2 z-10 ${
        isFixed
          ? "fixed w-1/2 bottom-1/2"
          : "absolute bottom-[600px]"
      }`}
      src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png"
      alt="hotel von Steinblut logo"
    />
  );
};

export default Logo;
