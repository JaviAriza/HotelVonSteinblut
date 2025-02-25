import "./InfoBox.css";

function InfoBox({ room, onClose }) {
  if (!room) return null; // Evita errores si no se pasa la room

  return (
    <div className="info-overlay" onClick={onClose}>
      <div className="info-content" onClick={(e) => e.stopPropagation()}>
        <h2>Habitación {room.tipo}</h2>
        
        <img className="w-full h-48 object-cover mb-4" src={room.fotos[0]} alt="Imagen de la habitación" />

        <p><strong>Camas:</strong> {room.camas}</p>
        <p><strong>Capacidad:</strong> {room.capacidad} personas</p>
        <p><strong>Disponibilidad:</strong> {room.disponibilidad}</p>
        <p><strong>Precio por noche:</strong> {room.precioNoche} €</p>

        <h3>Características</h3>
        <ul className="ul-feature-list">
          <button className="close-btn" onClick={onClose}>Cerrar</button>
          <li><strong>Climatización:</strong> {room.caracteristicas.climatizacion}</li>
          <li><strong>WiFi:</strong> {room.caracteristicas.wifi}</li>
          <li><strong>TV:</strong> {room.caracteristicas.tv}</li>
        </ul>

      </div>
    </div>
  );
} 

export default InfoBox;
