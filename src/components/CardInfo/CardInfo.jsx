import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import PictureSlider from "../PictureSlider/PictureSlider";
import RoomInfo from "../RoomInfo/RoomInfo";
import InfoBox from "../InfoBox/InfoBox";

const CardInfo = ({ onSelection, room }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleSelectRoom = (room) => {
    localStorage.setItem("selectedRoom", JSON.stringify(room));
    if (onSelection) {
      onSelection(room);
    }
    navigate("/booking-summary");
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`max-w-sm rounded-md shadow-lg overflow-hidden text-white relative h-80 font-[Triodion]
        transition-transform duration-300 transform ${
          isHovered ? "shadow-2xl scale-105 brightness-110" : "scale-100"
        }`}
    >
      <div className="relative w-full h-full bg-gray-900 overflow-hidden mb-2">
        <PictureSlider room={room} pictures={room.photos} isHovered={isHovered} />
      </div>

      <div className="absolute top-7 right-3 flex gap-3">
        <h5 className="text-xl backdrop-blur-xl p-2 capitalize rounded-lg">
          {room.type}
        </h5>
        <div className="backdrop-blur-xl p-2 rounded-lg">
          <p className="text-xl font-semibold">${room.nightPrice}</p>
        </div>
      </div>

      <div
        className={`absolute bottom-4 right-4 transition-all flex gap-3 ${
          isHovered ? "translate-y-0" : "translate-y-[200%]"
        }`}
      >
        <button
          className="bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition duration-300"
          onClick={() => setExpanded(true)}
        >
          Info
        </button>
        <button
          className="bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition duration-300"
          onClick={() => handleSelectRoom(room)}
        >
          Book
        </button>
      </div>

      <RoomInfo room={room} isOpen={isHovered} />
      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
        alt="Ornamento"
        className="absolute top-2 left-0 w-full h-3 mt-[-1%]"
      />
      {expanded && <InfoBox room={room} onClose={() => setExpanded(false)} />}
    </div>
  );
};

CardInfo.propTypes = {
  onSelection: PropTypes.func,
  room: PropTypes.object,
};

export default CardInfo;
