import "./InfoBox.css";

function InfoBox({ room, onClose }) {
  if (!room) return null; // Evita errores si no se pasa la room

  return (
    <div className="info-overlay" onClick={onClose}>
      <div className="info-content" onClick={(e) => e.stopPropagation()}>
        
        
        <img className="infoBox-img" src={room.fotos[0]} alt="Imagen de la habitación" />

        <h2>Room {room.tipo}</h2>
        <p><strong>ability:</strong> {room.capacidad} personas</p>
        <p><strong>availability:</strong> {room.disponibilidad}</p>
        <p><strong>Price per night:</strong> {room.precioNoche} €</p>

    
        <ul className="ul-feature-list">
          <button className="close-btn" onClick={onClose}>Close</button>
          <li><strong>Beds:</strong> {room.camas}</li>
          <li><strong>air conditioning:</strong> {room.caracteristicas.climatizacion}</li>
          <li><strong>WiFi:</strong> {room.caracteristicas.wifi}</li>
          <li><strong>TV:</strong> {room.caracteristicas.tv}</li>
        </ul>

      </div>
    </div>
  );
} 

export default InfoBox;
