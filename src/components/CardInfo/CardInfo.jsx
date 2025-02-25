import React, { useState, useEffect } from "react";

const CardInfo = ({ room }) => {
  if (!room) return <p>room data available</p>;

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % room.fotos.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [room.fotos.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % room.fotos.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + room.fotos.length) % room.fotos.length);
  };

  return (
    <div className="max-w-sm bg-[#5f5c5c] rounded-2xl shadow-lg overflow-hidden text-white relative font-[Triodion]">
      {/* Carrusel de imágenes */}
      <div className="relative w-full h-48 bg-gray-700 overflow-hidden rounded-t-2xl">
        <div
          className="w-full h-full transition-transform duration-500 transform"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {room.fotos.map((image, index) => (
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

      
      <img src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png" alt="Ornamento" className="absolute top-47.5 left-0 w-full h-3 mt-[-1%]" />

      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2">Habitación {room.tipo}</h1>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-white text-black px-4 py-1 rounded-3xl text-xs">
            Wifi: {room.caracteristicas.wifi}
          </span>
          <span className="bg-white text-black px-4 py-1 rounded-3xl text-xs">
            Climatización: {room.caracteristicas.climatizacion}
          </span>
          <span className="bg-white text-black px-4 py-1 rounded-3xl text-xs">
            TV: {room.caracteristicas.tv}
          </span>
        </div>

        <div className="mt-6">
          <p className="text-lg font-semibold text-red-900">
            {room.precioNoche} €<span className="text-sm"> EUR/Noche</span>
          </p>
        </div>
      </div>

      <a href="#" className="absolute bottom-4 right-4">
        <button className="bg-red-900 text-white px-6 py-2 rounded-3xl border-red-900 border-2 hover:bg-black hover:text-white transition">
          Reservar
        </button>
      </a>
    </div>
  );
};

export default CardInfo;


