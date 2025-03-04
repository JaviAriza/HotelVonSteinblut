import React, { useState, useEffect } from "react";

const PreviusBookings = () => {
  return (
    <div className=" text-white min-h-screen p-6 font-serif">
      <Section title="PREVIUS BOOKINGS" />
    </div>
  );
};

const Section = ({ title }) => {
  const images = [
    "https://i.pinimg.com/736x/eb/03/d9/eb03d9900efcc96d025bee81604c1cb4.jpg",
    "https://i.pinimg.com/736x/55/07/1c/55071c4704e087ebf6f1b9ea0e8c0d23.jpg",
    "https://i.pinimg.com/736x/fc/7d/c0/fc7dc0c92d7a1f55913c2dce7edad59c.jpg",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mt-10 p-6 rounded-lg">
      <div className="flex justify-between items-center pb-2 mb-4">
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>
      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
        alt="Ornament Separator Top"
        className="mx-auto w-1/2 h-full"
      />
      <div className="flex items-center justify-center gap-6 mt-10 mb-10">
        <div className="relative w-80 h-60 bg-gray-700 overflow-hidden rounded-lg">
          <div
            className="w-full h-full transition-transform duration-500 transform"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((image, index) => (
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
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
          >
            &#8249;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
          >
            &#8250;
          </button>
        </div>
        <div className="text-gray-300">
          <p className="text-lg font-bold">Number: FDFSFS349589</p>
          <p>Type: Double room</p>
          <p>Dates: 09/06/2025 - 15/06/2025</p>
          <p>Number of guests: 3</p>
          <p>Extra services: Breakfast</p>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
        alt="Ornament Separator Top"
        className="mx-auto w-1/2 h-full"
      />
    </div>
  );
};

export default PreviusBookings;
