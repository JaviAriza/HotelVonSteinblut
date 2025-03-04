import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function InfoBox({ room, onClose }) {
  const navigate = useNavigate();
  if (!room) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-[1000] p-2"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-b from-red-800 to-black border border-red-700 flex flex-col p-3 md:p-2
        w-full max-w-[340px] md:max-w-[350px] rounded-lg gap-2 md:gap-2 
        md:fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:z-[1100]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="w-full h-24 md:h-24 rounded-md object-cover"
          src={room.photos[0]}
          alt="Room"
        />

        <div className="flex flex-col flex-1 text-[10px] md:text-[10px]">
          <h2 className="text-xs md:text-xs text-center">Room {room.type}</h2>
          <p><strong>Ability:</strong> {room.capacity}p</p>
          <p><strong>Available:</strong> {room.availability}</p>
          
          <p className="text-right text-lg font-bold text-white-400">
            €{room.nightPrice}
          </p>

          <img
            src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
            alt="divider"
            className="mt-1"
          />

          <h3 className="text-[10px] md:text-[11px] mt-1">Features:</h3>
        
          <ul className="grid grid-cols-2 gap-2 text-[10px] md:text-[10px]">
            <li><strong>Beds:</strong> {room.beds}</li>
            <li><strong>A/C:</strong> {room.features.airConditioning}</li>
            <li><strong>WiFi:</strong> {room.features.wifi}</li>
            <li><strong>TV:</strong> {room.features.tv}</li>
          </ul>

          <div className="flex justify-between mt-2">
            <button className="bg-red-800 text-white px-2 py-1 rounded text-[10px] md:text-[10px]" onClick={onClose}>
              Close
            </button>
            <button
              className="bg-red-800 text-white px-2 py-1 rounded text-[10px] md:text-[10px]"
              onClick={() => navigate("/booking-summary")}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;

InfoBox.propTypes = {
  room: PropTypes.object,
  onClose: PropTypes.func,
};

