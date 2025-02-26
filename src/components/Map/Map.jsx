import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const MapComponent = () => {
  const position = [47.59649598623352, 24.56191121040443];
    
  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      style={{ height: '600px', width: '70%', borderRadius: '10px', marginBottom: '15%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          🏨 <strong>Hotel Von SteinBlut</strong> <br />
          📍 Ubicación seleccionada: <br />
          Lat: {position[0]}, Lng: {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
