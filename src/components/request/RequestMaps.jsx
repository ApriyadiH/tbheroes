import React  from 'react';
import { MapContainer,TileLayer, Marker } from 'react-leaflet';
import styled from "styled-components";

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const urlMap = "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=" + process.env.REACT_APP_MAP_KEY;

const myIcon = new L.Icon({
    iconUrl: "https://icons.getbootstrap.com/assets/icons/geo-alt-fill.svg",
    iconRetinaUrl: "https://icons.getbootstrap.com/assets/icons/geo-alt-fill.svg",
    popupAnchor: [-0, -0],
    iconSize: [30,30],     
    shadowUrl: null,
});

const RequestMap = () => {
  const position = [-6.8933670699325065, 107.61305742384643];

  return (
    <>
      <StMapContainer
      scrollWheelZoom={false}
      center={position}
      zoom={16}
      >
      <TileLayer
      url= {urlMap}
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <Marker
      position={position}
      icon={myIcon}
      />
      </StMapContainer>
    </>
  );
}

export default RequestMap;

const StMapContainer = styled(MapContainer)`
  height: 40vh;
  border-radius:16px;
  
  padding-bottom: 24px;
`
