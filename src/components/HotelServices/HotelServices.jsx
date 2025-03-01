import PropTypes from "prop-types";
import { useState } from "react";
import Title from "../Title/Title";

export default function Restaurant({ image, title, link }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="my-[20%] w-full h-[1000px] flex flex-col items-center gap-5 justify-center">
      <div className="flex items-center w-full h-[20%]">
        <Title text={title} />
      </div>
      <div
        className="w-full h-2/4 bg-bottom bg-cover relative overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="z-5 black-gradient w-full h-full bg-gradient-to-b from-black via-[transparent] to-black absolute top-0 left-0"></div>
        <div 
          className={`absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-5 text-white text-center transition-transform duration-500 ${showInfo ? 'animate-slide-up' : 'animate-slide-down'}`}
        >
          <div 
            className="absolute inset-0 w-full h-full bg-cover  bg-center opacity-11"
            style={{ backgroundSize: '140%', backgroundImage: `url(https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740403283/ornamentBack1_f6bu5a.png)` }}
          ></div>
          <p className="text-lg relative z-10">PROBAN2 INFO RESTAURANTE</p>
        </div>
      </div>

      <div className="flex justify-center gap-[3%] w-full h-[3%]">
        <button
          className="h-full w-[10%] rounded-lg text-lg font-semibold hover:bg-red-800 transition-all"
          onClick={() => setShowInfo(prev => !prev)}
        >
          Info
        </button>
        <button className="h-full w-[10%] rounded-lg text-lg font-semibold hover:bg-black transition bg-white text-red-800 transition-all">
          <a className="block w-full h-full flex items-center justify-center transition-all" href={link}>
            Book
          </a>
        </button>
      </div>

      <style>
        {`
          @keyframes slide-up {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes slide-down {
            from {
              transform: translateY(0);
              opacity: 1;
            }
            to {
              transform: translateY(100%);
              opacity: 0;
            }
          }
          .animate-slide-up {
            animation: slide-up 0.5s ease-out forwards;
          }
          .animate-slide-down {
            animation: slide-down 0.5s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}

Restaurant.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
