import { useState } from "react";
import InfoBox from "../InfoBox/InfoBox";

const CardInfo = ({ room }) => {
  const [expanded, setExpanded] = useState(false);

  if (!room) return <p>room data not available</p>;

  return (
    <>
      <div
        onClick={() => setExpanded(true)}
        className="max-w-sm bg-[#5f5c5c] rounded-2xl shadow-lg overflow-hidden text-white relative font-[Triodion]"
      >
        <img className="w-full h-48 object-cover" src={room.fotos[0]} alt="card image" />

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
              {room.precioNoche} €<p>EUR/Noche</p>
            </p>
          </div>
        </div>

        <a href="#" className="absolute bottom-4 right-4">
          <button className="bg-white text-black px-6 py-2 rounded-3xl hover:bg-gray-200 transition">
            Reservar
          </button>
        </a>
      </div>

      {/* ⬇️ Verificamos que el InfoBox se renderiza y pasa bien onClose ⬇️ */}
      {expanded && <InfoBox room={room} onClose={() => setExpanded(false)} />}

      
    </>
  );
};

export default CardInfo;
