import { useState } from "react";
import PropTypes from "prop-types";

const ExpandablePanel = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleBookingLogic = (event) =>{
    console.log(event.target.value);
  }

  return (
    <div
      className="w-full sm:w-1/2 h-1/2 sm:h-full bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <h4 className="text-center mt-[20%] sm:text-4xl relative z-10 max-sm:px-5 text-white">
        {props.text}
      </h4>
      <div
        className={`z-5 black-gradient w-full h-full bg-gradient-to-r from-black via-transparent to-black absolute top-0 left-0 ${
          props.isLeadPanel ? "to-95%" : "from-5%"
        }`}
      ></div>
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <img
          className={`absolute z-40 max-sm:left-1/2 max-sm:-translate-x-1/2 sm:top-1/2 ${
            props.isLeadPanel
              ? "-rotate-90 sm:rotate-180 sm:right-[5%] max-sm:bottom-[3%]"
              : "max-sm:rotate-90 sm:left-[5%] max-sm:top-[3%]"
          } hover:scale-140 transition-all`}
          src="https://res.cloudinary.com/dgzgzx9ov/image/upload/w_40,h_40,c_scale/v1740860788/arrow1_a8wkkm.png"
          alt="expand-arrow"
        />
      </button>
      
      <div
        className={`absolute inset-0 w-full h-full bg-black bg-opacity-80 z-30 flex items-center justify-center transition-all duration-500 ${
          isExpanded ? "animate-slide-right" : "animate-slide-left"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740403283/ornamentBack1_f6bu5a.png)`,
            backgroundClip: "border-box",
            backgroundOrigin: "border-box",
            opacity: 0.1,
            maskImage: "linear-gradient(to left, transparent, black)",
          }}
        ></div>
        <p className=" mb-6 text-white text-sm sm:text-lg relative z-10 px-4 sm:px-6 italic text-center max-w-full sm:max-w-[70%] mx-auto break-words">
          {props.panelContent}
          </p>

        <button value={props.text} onClick={handleBookingLogic} className="absolute bottom-10 left-1/2 -translate-1/2 px-10 py-2 rounded-lg hover:bg-black border border-transparent hover:border-white transition-all">
          Book
        </button>
      </div>

      <style>
        {`
          @keyframes slide-right {
            from {
              transform: translateX(-100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          @keyframes slide-left {
            from {
              transform: translateX(0);
              opacity: 1;
            }
            to {
              transform: translateX(100%);
              opacity: 0;
            }
          }
          .animate-slide-right {
            animation: slide-right 0.5s ease-out forwards;
          }
          .animate-slide-left {
            animation: slide-left 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

ExpandablePanel.propTypes = {
  image: PropTypes.string.isRequired,
  isLeadPanel: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  textId: PropTypes.number.isRequired,
  panelContent: PropTypes.string
};

export default ExpandablePanel;
