import React from 'react';
import { MapContainer,TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from "styled-components";

import L from 'leaflet';
const myIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5216/5216413.png",
    iconRetinaUrl: "https://cdn-icons-png.flaticon.com/512/5216/5216413.png",
    popupAnchor:  [-0, -0],
    iconSize: [40,40],     
    shadowUrl: null,
});

const center = [-6.17523297070254, 106.82718123499757];

const position =  [-6.171851653295678, 106.82595814774415]

const Map = () => {
  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{ width: '100%', height: '400px' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=caADrFh1FFN8pQYpkQWk"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <Marker 
        position={position} 
        icon= {myIcon}>
        <Popup>
          <Cardcontainer>
            <Title>Donor</Title>
            <Image></Image>
            <Nama>Fajar</Nama>
            <Goldar>Blood Type</Goldar>
            <Detail>Details</Detail>
          </Cardcontainer>
          </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;

const Cardcontainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 16px;
gap: 8px;

width: 192px;
height: 307.77px;
left: 1092px;
top: 254px;

background: #FFFFF
box-shadow: 0px 30px 44px rgba(200, 200, 200, 0.25);
border-radius: 20px;
z-index : 0;
`

const Title = styled.div`
  width: 59px;
  height: 24px;
  margin-top :20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
/* identical to box height, or 24px */
  color: #1B1B1B;
  /* Inside auto layout */
  flex: none;
  z-index: 1;
  flex-grow: 0;
`
const Image = styled.div`
  position: fixed;
  left: 50px;
  right: 50px;
  top: 70px;
  bottom: 120px;
  border-radius: 20px;
  z-index: 2;
  border-color : gray;
  img {
    inset: 0px;
    display: block;
    height: 100px;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 170px;
    z-index: 2;
    top: 0;
  }
  background: url("https://th.bing.com/th?id=OIF.QCVBVAVF9I7r%2br3UcP1Qgg&pid=ImgDet&rs=1");
`

const Nama = styled.div`
  width: 45px;
  height: 22px;
  margin-top: 150px;
  align-content: center;

  /* text-base/reguler */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */
  color: #1B1B1B;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 3;
`

const Goldar = styled.div`
  width: 85px;
  height: 22px;
  /* text-base/reguler */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */
  color: #1B1B1B;
  /* Inside auto layout */
  flex: none;
  z-index: 2;
  flex-grow: 0;
`

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;

  width: 84px;
  height: 38px;
  margin-top: 0px;

  background: #565656;
  border-radius: 8px;

  /* Inside auto layout */
  flex: none;
  flex-grow: 0;

  /* text-base/reguler */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;

  /* or 22px */
  display: flex;
  align-items: ;
  color: #FAFAFA;
  /* Inside auto layout */
  flex: none;
  flex-grow: 0;
  z-index: 3;
`