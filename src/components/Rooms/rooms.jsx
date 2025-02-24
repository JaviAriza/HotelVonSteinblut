import { useState, useEffect } from "react";
import roomsData from "./rooms.json";

const Rooms = () => {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setRooms(roomsData);
  }, []);

  return (
    <div className="rooms">
      <h1>Rooms</h1>
      {rooms.map((room) => (
        <div key={room.id} className="room">
          <h2>{room.tipo} - {room.categoria}</h2>
          <p>Capacidad: {room.capacidad}</p>
          <p>Precio por noche: {room.precio_noche}</p>
          <div className="images">
          {room.fotos.map((foto, index) => (
              <img key={index} src={foto} alt={`Room ${room.id}`} width="200" />
          ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
