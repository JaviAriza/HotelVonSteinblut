import { useState } from "react";
import PropTypes from "prop-types";

const ExpandablePanel = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className="w-full sm:w-1/2 h-1/2 sm:h-full bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <h4 className="text-center mt-[20%] sm:text-4xl relative z-10 max-sm:px-5">
        {props.text}
      </h4>
      <div className={`"z-5 black-gradient w-full h-full bg-gradient-to-r from-black via-[transparent] to-black absolute top-0 left-0" ${props.isLeadPanel? "to-95%" : "from-5%"}`}></div>
      <button
        onClick={() => {
          setIsExpanded(!isExpanded)
          console.log(isExpanded);;
        }}
      >
        <img
          className={`absolute z-20 max-sm:left-1/2 sm:top-1/2 ${
            props.isLeadPanel ? "-rotate-90 sm:rotate-180 sm:right-[5%] max-sm:bottom-[5%]" : "max-sm:rotate-90 sm:left-[5%] max-sm:top-[5%]"
          } `}
          src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1740320710/flecha-izquierda_r5rgze.png"
          alt="expand-arrow"
        />
      </button>
      {isExpanded && <div className={`absolute w-full h-full bg-black z-30 top-0 transition-all duration-300 ${props.isLeadPanel? "left-[100%]": "-left-[100%]"}`}></div>}
    </div>
  );
};

ExpandablePanel.propTypes = {
  image: PropTypes.string.isRequired,
  isLeadPanel: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExpandablePanel;
