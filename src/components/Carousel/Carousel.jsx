import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "../Card/Card"; // Importamos el componente Card

const cards = [
  {
    title: "Habitación Estándar",
    images: ["/gothic1.jpg", "/gothic2.jpg", "/gothic3.jpg"],
  },
  {
    title: "Habitación Familiar",
    images: ["/bathroom1.jpg", "/bathroom2.jpg", "/bathroom3.jpg"],
  },
  {
    title: "Suit",
    images: ["/kitchen1.jpg", "/kitchen2.jpg", "/kitchen3.jpg"],
  },
];

const Carousel = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const prevCard = () => {
    setCardIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
    setImageIndex(0);
  };

  const nextCard = () => {
    setCardIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    setImageIndex(0);
  };

  const nextImage = () => {
    setImageIndex((prev) =>
      prev === cards[cardIndex].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? cards[cardIndex].images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[600px] bg-gradient-to-b from-black to-gray-900 py-10">
      {/* Botón para cambiar de Card a la izquierda */}
      <button onClick={prevCard} className="absolute left-10 z-10">
        <ChevronLeft className="text-white w-12 h-12" />
      </button>
      
      {/* Contenedor del carrusel con tarjetas laterales */}
      <div className="relative flex items-center justify-center w-full h-full gap-4">
        {[cardIndex - 1, cardIndex, cardIndex + 1].map((index, i) => {
          const actualIndex = (index + cards.length) % cards.length;
          return (
            <motion.div
              key={actualIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: actualIndex === cardIndex ? 1 : 0.9 }}
              transition={{ duration: 0.5 }}
              className={`relative w-[450px] h-[550px] flex items-center justify-center border-8 border-gray-700 shadow-lg bg-black rounded-xl overflow-hidden ${actualIndex === cardIndex ? "z-10" : "opacity-50"}`}
            >
              <Card
                title={cards[actualIndex].title}
                images={cards[actualIndex].images}
                imageIndex={imageIndex}
                onNextImage={actualIndex === cardIndex ? nextImage : undefined}
                onPrevImage={actualIndex === cardIndex ? prevImage : undefined}
              />
            </motion.div>
          );
        })}
      </div>
      
      {/* Botón para cambiar de Card a la derecha */}
      <button onClick={nextCard} className="absolute right-10 z-10">
        <ChevronRight className="text-white w-12 h-12" />
      </button>
    </div>
  );
};

export default Carousel;



