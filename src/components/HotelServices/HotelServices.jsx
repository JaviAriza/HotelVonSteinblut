import PropTypes from "prop-types";
import { useState } from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

export default function HotelServices(props) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="w-full flex flex-col items-center gap-5 justify-center">
      <div
        className="w-full h-screen bg-center bg-cover relative"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="flex items-center w-full h-[20%] absolute">
          <Title text={props.title} />
        </div>
        <div className="z-5 black-gradient w-full h-full bg-gradient-to-b from-[#1a1a1a] via-[transparent] to-[#1a1a1a] absolute top-0 left-0"></div>
        <div
          className={`absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-5 text-white text-center transition-transform duration-500 ${
            showInfo ? "animate-slide-up" : "animate-slide-down"
          }`}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover  bg-center opacity-11"
            style={{
              backgroundSize: "140%",
              backgroundImage: `url(https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740403283/ornamentBack1_f6bu5a.png)`,
            }}
          ></div>
          <p className="text-lg relative z-10">INFO</p>
        </div>
        <div className="flex justify-center gap-[3%] h-[5%] w-full z-50 absolute bottom-[5%]">
          <button
            className="h-full w-[20%] rounded-lg text-lg font-semibold hover:bg-red-800 transition-all"
            onClick={() => setShowInfo(!showInfo)}
          >
            Info
          </button>
          <Link to={`/${props.title}`}>
            <button className="h-full w-full px-10 rounded-lg text-lg font-semibold border-1 border-white hover:bg-black hover:text-white hover:border-white bg-white text-red-800 transition-all">
              Book
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

HotelServices.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
