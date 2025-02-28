import { useState, useEffect } from "react";
import PropTypes from "prop-types"

const PictureSlider = ({ pictures, isHovered }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const shouldCicle = isHovered;

  useEffect(() => {
    if (!shouldCicle) return;
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % pictures.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [shouldCicle, pictures.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <>
      <div
        className="w-full h-full transition-transform duration-500 transform"
        style={{ transform: `translateX(-${currentImage * 100}%)` }} 
      >
        {pictures.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Room"
            className="w-full h-full object-cover absolute"
            style={{ left: `${index * 100}%` }}
          />
        ))}
      </div>
      <button
        onClick={prevImage}
        className="absolute left-2 bottom-0 transform -translate-y-1/2 bg-transparent hover:bg-white hover:text-black backdrop-blur-xl text-white p-4 py-1 rounded-lg transition"
      >
        &#8249;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 bottom-0 transform -translate-y-1/2 bg-transparent hover:bg-white hover:text-black  backdrop-blur-xl text-white p-4 py-1 rounded-lg transition"
      >
        &#8250;
      </button>
    </>
  );
};

export default PictureSlider;

PictureSlider.propTypes = {
    pictures: PropTypes.array,
    isHovered: PropTypes.bool
}
