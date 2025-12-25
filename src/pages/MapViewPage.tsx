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
  description?: string;
}> = [
  { 
    id: 1, 
    name: 'Chennai', 
    position: [13.0827, 80.2707],
    description: 'The Gateway to South India' 
  },
  { 
    id: 2, 
    name: 'Coimbatore', 
    position: [11.0168, 76.9558],
    description: 'Manchester of South India' 
  },
  { 
    id: 3, 
    name: 'Madurai', 
    position: [9.9252, 78.1198],
    description: 'Athens of the East' 
  },
  { 
    id: 4, 
    name: 'Kanchipuram', 
    position: [12.8342, 79.7036],
    description: 'City of Thousand Temples' 
  },
  { 
    id: 5, 
    name: 'Ooty', 
    position: [11.4102, 76.6950],
    description: 'Queen of Hill Stations' 
  },
];

const MapViewPage = () => {
  return (
    <div className="h-screen w-full bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Explore Tamil Nadu</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">Discover the beauty of Tamil Nadu's top destinations</p>
        </div>
      </div>
      <MapContainer 
        center={[11.1271, 78.6569]} // Center of Tamil Nadu
        zoom={7} 
        style={{ height: 'calc(100vh - 80px)', width: '100%' }}
        zoomControl={false}
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
              <div className="min-w-[200px]">
                <h3 className="font-bold text-lg text-gray-800">{location.name}</h3>
                {location.description && (
                  <p className="text-sm text-gray-600 mb-2">{location.description}</p>
                )}
                <a 
                  href={`/${location.name.toLowerCase()}`}
                  className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium"
                >
                  Explore {location.name}
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
