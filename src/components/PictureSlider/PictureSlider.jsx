import { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
    setCurrentImage((prev) => (prev - 1 + pictures.length) % pictures.length);
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
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent backdrop-blur-xl text-white size-10 rounded-full transition flex justify-center items-center"
      >
        <img
          src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1740320710/flecha-izquierda_r5rgze.png"
          alt="arrow"
          className="size-5"
        />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent backdrop-blur-xl text-white size-10 rounded-full transition flex justify-center items-center"
      >
        <img
          src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1740320710/flecha-izquierda_r5rgze.png"
          alt="arrow"
          className="size-5 rotate-180"
        />
      </button>
    </>
  );
};

export default PictureSlider;

PictureSlider.propTypes = {
  pictures: PropTypes.array,
  isHovered: PropTypes.bool,
};
