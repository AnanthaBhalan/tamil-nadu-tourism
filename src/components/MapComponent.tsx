import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';

// Fix for default marker icons in React Leaflet
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapComponentProps {
  center: [number, number];
  zoom?: number;
  markers?: Array<{
    position: [number, number];
    title: string;
    description?: string;
  }>;
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  center,
  zoom = 12,
  markers = [],
  className = 'h-64 w-full rounded-lg',
}) => {
  return (
    <div className={className}>
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.length > 0 ? (
          markers.map((marker, index) => {
            const { position, title, description } = marker;
            return (
              <Marker key={index} position={position} icon={defaultIcon}>
                <Popup>
                  <div className="text-sm">
                    <h4 className="font-semibold">{title}</h4>
                    {description && <p className="mt-1">{description}</p>}
                  </div>
                </Popup>
              </Marker>
            );
          })
        ) : (
          <Marker position={center} icon={defaultIcon}>
            <Popup>
              <div className="text-sm">
                <h4 className="font-semibold">Location</h4>
                <p className="mt-1">This is the main location on the map</p>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
