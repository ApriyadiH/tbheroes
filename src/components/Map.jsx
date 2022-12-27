import React from 'react';
import { MapContainer,TileLayer, Marker, Popup} from 'react-leaflet';
import '../../node_modules/leaflet/dist/leaflet.css';

const center = [-6.17523297070254, 106.82718123499757];

const position =  [-6.171851653295678, 106.82595814774415]

export default function App() {
  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{ width: '400px', height: '400px' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=caADrFh1FFN8pQYpkQWk"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <Marker position={position}>
        <Popup>
          Tulisan di dalam pop up.
        </Popup>
      </Marker>
    </MapContainer>
  );
}