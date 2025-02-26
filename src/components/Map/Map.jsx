import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [47.59649598623352, 24.56191121040443];
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;
  
  return (
    <div className="flex justify-center items-center w-full py-10 mb-10">
      <MapContainer 
        center={position} 
        zoom={13} 
        className="h-[400px] sm:h-[500px] md:h-[600px] w-full sm:w-[90%] mb-100 md:w-[70%] rounded-lg shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="text-center">
              <span className="text-lg font-semibold">🏨 Hotel Von SteinBlut</span>
              <p className="text-sm">📍 Selected Location:</p>
              <p className="text-xs">Lat: {position[0]}, Lng: {position[1]}</p>
              <div className="mt-2 space-y-1">
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block text-blue-600 hover:underline"
                >
                  🗺️ Start route in Google Maps
                </a>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
