import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Gallery = ({pictures}) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % pictures.length);
        setFade(true);
      }, 1000);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [pictures.length]);

  return (
    <div className="relative w-full h-200 bg-gray-700 overflow-hidden flex justify-center items-center">
      {pictures.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionTimingFunction: "ease-in-out",
            transitionDelay: `${index === currentImage ? "0s" : "1s"}`,
          }}
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#1a1a1a] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
    </div>
  );
};

export default Gallery;

Gallery.propTypes = {
  pictures: PropTypes.array.isRequired,
}
