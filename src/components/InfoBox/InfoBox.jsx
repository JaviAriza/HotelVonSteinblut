import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function InfoBox({ room, onClose }) {
  const navigate = useNavigate();
  if (!room) return null;

  return (
    <div
      className="info-overlay fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-[1000] text-lg"
      onClick={onClose}
    >
      <div
        className="info-content bg-[#5f5c5c] flex p-5 w-1/2 h-[60%] rounded-lg gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="infoBox-img w-[40%] rounded-xl object-cover"
          src={room.photos[0]}
          alt="Imagen de la habitación"
        />

        <div className="content">
          <div className="roomItems whitespace-nowrap">
            <h2 className="text-4xl text-center">Room {room.type}</h2>
            <p>
              <strong>Ability:</strong> {room.capacity} personas
            </p>
            <p>
              <strong>Availability:</strong> {room.availability}
            </p>
            <p>
              <strong>Price per night:</strong> {room.nightPrice} €
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
            alt="spacebar"
            className="image-space mt-5"
          />

          <div className="ul-feature-list-container mt-5">
            <h1 className="text-2xl">Features:</h1>
            <ul className="ul-content-list grid grid-cols-2 gap-x-10 whitespace-nowrap">
              <li>
                <strong>Beds:</strong> {room.beds}
              </li>
              <li>
                <strong>Air conditioning:</strong> {room.features.airConditioning}
              </li>
              <li>
                <strong>WiFi:</strong> {room.features.wifi}
              </li>
              <li>
                <strong>TV:</strong> {room.features.tv}
              </li>
            </ul>
          </div>
        </div>

        <div className="buttons">
          <button className="close-btn bg-red p-2 px-4 rounded-md cursor-pointer mt-[330px] ml-[-330px]" onClick={onClose}>
            Close
          </button>
          <button className="book-btn bg-red p-2 px-4 rounded-md cursor-pointer mt-[90px] ml-[90px]"
            onClick={() => navigate("/booking-summary")}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;

InfoBox.propTypes = {
  room: PropTypes.object,
  onClose: PropTypes.func
}
