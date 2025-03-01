import "./InfoBox.css";

function InfoBox({ room, onClose }) {
  if (!room) return null;

  return (
    <div className="info-overlay" onClick={onClose}>
      <div className="info-content" onClick={(e) => e.stopPropagation()}>
        
        
        <img className="infoBox-img" src={room.photos[0]} alt="Imagen de la habitación" />

        <h2>Room {room.type}</h2>
        <p><strong>ability:</strong> {room.capacity} personas</p>
        <p><strong>availability:</strong> {room.availability}</p>
        <p><strong>Price per night:</strong> {room.nightPrice} €</p>

    
        <ul className="ul-feature-list">
          <button className="close-btn" onClick={onClose}>Close</button>
          <li><strong>Beds:</strong> {room.beds}</li>
          <li><strong>air conditioning:</strong> {room.features.airConditioning}</li>
          <li><strong>WiFi:</strong> {room.features.wifi}</li>
          <li><strong>TV:</strong> {room.features.tv}</li>
        </ul>

      </div>
    </div>
  );
} 

export default InfoBox;
