import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icons in React Leaflet
const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41]
});

// Sample locations data
const locations: Array<{
  id: number;
  name: string;
  position: [number, number];
}> = [
  { id: 1, name: 'Chennai', position: [13.0827, 80.2707] },
  { id: 2, name: 'Madurai', position: [9.9252, 78.1198] },
  { id: 3, name: 'Ooty', position: [11.4102, 76.6950] },
  { id: 4, name: 'Kodaikanal', position: [10.2381, 77.4892] },
  { id: 5, name: 'Rameswaram', position: [9.2888, 79.3129] },
];

const MapViewPage = () => {
  return (
    <div className="h-screen w-full">
      <h1 className="text-2xl font-bold p-4 bg-white shadow-md">Explore Tamil Nadu</h1>
      <MapContainer 
        center={[11.1271, 78.6569]} // Center of Tamil Nadu
        zoom={7} 
        style={{ height: 'calc(100vh - 64px)', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker 
            key={location.id} 
            position={location.position}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h3 className="font-semibold">{location.name}</h3>
                <a 
                  href={`/location/${location.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View details
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapViewPage;
