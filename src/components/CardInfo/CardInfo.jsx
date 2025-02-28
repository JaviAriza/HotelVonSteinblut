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
      className={`max-w-sm bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden text-white relative font-[Triodion] ${
        selectedRoom?.type === room.type ? "border-4 border-teal" : ""
      }`}
    >
      <div className="relative w-full h-48 bg-gray-900 overflow-hidden rounded-t-2xl mb-2">
        <PictureSlider pictures={room.photos} isHovered={isHovered} />
      </div>

      <div className="absolute top-[2%] right-[3%] flex gap-3">
        <h5 className="text-xl backdrop-blur-xl p-2 capitalize rounded-lg">
          {room.type}
        </h5>
        <div className="  backdrop-blur-xl p-2 rounded-lg">
          <p className="text-xl font-semibold">{room.nightPrice} €</p>
        </div>
      </div>

      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
        alt="Ornamento"
        className="absolute top-47.5 left-0 w-full h-3 mt-[-1%]"
      />

      <div className="mt-5 mb-[20%] flex justify-center items-center">
        <div className="flex flex-wrap gap-2 mb-4">
          {room.features.wifi === "yes" && (
            <span className="bg-stone-400 text-black px-4 py-1 rounded-lg text-md">
              Wifi
            </span>
          )}
          {room.features.tv === "yes" && (
            <span className="bg-stone-400 text-black px-4 py-1 rounded-lg text-md">
              TV
            </span>
          )}
          {room.features.airConditioning === "yes" && (
            <span className="bg-stone-400 text-black px-4 py-1 rounded-lg text-md">
              Air Conditioning
            </span>
          )}
        </div>
      </div>

      <button
        className="absolute bottom-4 right-4 bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition"
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
