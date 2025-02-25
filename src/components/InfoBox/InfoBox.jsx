import "./InfoBox.css";

function InfoBox({ onClose }) {
  return (
    <div className="info-overlay" onClick={onClose}>

      <div className="info-content" onClick={(e) => e.stopPropagation()}>
        <h2>Info Box</h2>
        <p>Este es un modal de información.</p>
      </div>
      
    </div>
  );
}

export default InfoBox;