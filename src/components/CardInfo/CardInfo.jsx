import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CardInfo = ({ onSelection }) => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/rooms.json")
      .then((response) => response.json())
      .then((data) => setRooms(data))
      .catch((error) => console.error("Error cargando habitaciones:", error));
  }, []);

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    localStorage.setItem("selectedRoom", JSON.stringify(room));

    if (onSelection) {
      onSelection(room);
    }

    navigate("/booking-summary"); // 🔹 Ahora redirige a Reservation
  };

  return (
    <div className="flex gap-6 flex-wrap">
      {rooms.map((room, index) => (
        <div
          key={index}
          className={`max-w-sm bg-[#5f5c5c] rounded-2xl shadow-lg overflow-hidden text-white relative font-[Triodion] ${
            selectedRoom?.tipo === room.tipo ? "border-4 border-yellow-500" : ""
          }`}
        >
          <img className="w-full h-48 object-cover" src={room.fotos[0]} alt={`Habitación ${room.tipo}`} />

          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">Habitación {room.tipo}</h1>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white text-black px-4 py-1 rounded-3xl text-xs">
                Wifi: {room.caracteristicas.wifi}
              </span>
              <span className="bg-white text-black px-4 py-1 rounded-3xl text-xs">
                Climatización: {room.caracteristicas.climatizacion}
              </span>
              <span className="bg-white text-black px-4 py-1 rounded-3xl text-xs">
                TV: {room.caracteristicas.tv}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-lg font-semibold">
                {room.precioNoche} € <span className="text-sm">EUR/Noche</span>
              </p>
            </div>
          </div>

          <button
            className="absolute bottom-4 right-4 bg-white text-black px-6 py-2 rounded-3xl hover:bg-gray-200 transition"
            onClick={() => handleSelectRoom(room)}
          >
            Reservar
          </button>
        </div>
      ))}
    </div>
  );
};

CardInfo.propTypes = {
  onSelection: PropTypes.func,
};

export default CardInfo;

