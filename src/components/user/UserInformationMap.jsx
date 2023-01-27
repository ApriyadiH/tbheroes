import React, { useState, useRef, useMemo, useEffect }  from 'react';
import { MapContainer,TileLayer, Marker, useMapEvents } from 'react-leaflet';
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

const Map = ({location, setLocation}) => {
  
  const [position, setPosition] = useState(null)

  useEffect(()=>{
    if (position != null){
      setLocation([position.lat, position.lng])
    }
  },[position, setLocation])

  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )

  
  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker
      draggable={true}
      position={position}
      icon={myIcon}
      eventHandlers={eventHandlers}
      ref={markerRef}
      />
    )
  }

  return (
    <StMapContainer
      scrollWheelZoom={false}
      center={[-6.171851653295678, 106.82595814774415]}
      zoom={16}
    >
      <TileLayer
        url= {urlMap}
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <LocationMarker />
    </StMapContainer>
  );
}

export default Map;

const StMapContainer = styled(MapContainer)`
  height: 40vh;
  border-radius:16px;

  padding-bottom: 24px;
`
