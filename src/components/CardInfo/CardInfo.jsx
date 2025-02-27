import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import PictureSlider from "../PictureSlider/PictureSlider";

const CardInfo = ({ onSelection, room }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
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
      className={`max-w-sm bg-[#5f5c5c] rounded-2xl shadow-lg overflow-hidden text-white relative font-[Triodion] ${
        selectedRoom?.type === room.type ? "border-4 border-teal" : ""
      }`}
    >
      <div className="relative w-full h-48 bg-gray-700 overflow-hidden rounded-t-2xl">
        <PictureSlider pictures={room.photos} isHovered={isHovered} />
      </div>

      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
        alt="Ornamento"
        className="absolute top-47.5 left-0 w-full h-3 mt-[-1%]"
      />

      <div className="p-4">
        <h1 className="text-xl font-semibold mb-2">Rooms {room.type}</h1>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-white text-black px-4 py-1 rounded-3xl text-xs">
            Wifi: {room.features.wifi}
          </span>
          <span className="bg-white text-black px-4 py-1 rounded-3xl text-xs">
            Climatización: {room.features.airConditioning}
          </span>
          <span className="bg-white text-black px-4 py-1 rounded-3xl text-xs">
            TV: {room.features.tv}
          </span>
        </div>

        <div className="mt-6">
          <p className="text-lg font-semibold text-red-900">
            {room.nightPrice} €<span className="text-sm"> EUR/Night</span>
          </p>
        </div>
      </div>

      <button
        className="absolute bottom-4 right-4 bg-white text-black px-6 py-2 rounded-3xl hover:bg-gray-200 transition"
        onClick={() => handleSelectRoom(room)}
      >
        Book
      </button>
    </div>
  );
};

CardInfo.propTypes = {
  onSelection: PropTypes.func,
  room: PropTypes.object,
};

export default CardInfo;
