import React from 'react';
import { MapContainer,TileLayer, Marker, Popup } from 'react-leaflet';
import styled from "styled-components";

import Container from 'react-bootstrap/Container';
import Searchbox from './Searchbox';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const urlMap = "https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=" + process.env.REACT_APP_MAP_KEY;

const myIcon = new L.Icon({
    iconUrl: "assets/Point_Donor.svg",
    iconRetinaUrl: "assets/Point_Donor.svg",
    popupAnchor: [-0, -0],
    iconSize: [30,30],     
    shadowUrl: null,
});

const Map = () => {
  // kalau bisa mengikuti posisi User
  const center = [-6.17523297070254, 106.82718123499757];
  
  // Bikin jadi array
  const position = [-6.171851653295678, 106.82595814774415]
  return (
    <StContainer fluid>
      <div>
        <Searchbox/>
      </div>
      <StMapContainer
        scrollWheelZoom={false}
        center={center}
        zoom={15}
      >
        <StLegend/>
        <TileLayer
          url= {urlMap}
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        <StLegend>
          <div className='row'>
            <Icon1 className='col' src="assets/Point_Resipient.svg"></Icon1>
            <Text className='col my-auto'>Recipients</Text>
          </div>
          <div className='row'>
            <Icon2 className='col' src="assets/Point_Donor.svg"></Icon2>
            <Text className='col my-auto'>Donor</Text>
          </div>
        </StLegend>

        <Marker 
          position={position} 
          icon= {myIcon}>
          <Popup>
            <Cardcontainer>
              <Title>Donor</Title>
              <ImageContainer><StImage src="https://yt3.ggpht.com/a/AATXAJyS9ISC_e59kX9QJCF2Ox2vbPcIMoXs6lreKU9ryg=s900-c-k-c0xffffffff-no-rj-mo" alt="ProfilePic" width="150px"></StImage></ImageContainer>
              <Nama>Fajar</Nama>
              <Goldar>Blood Type</Goldar>
              <Detail>Details</Detail>
            </Cardcontainer>
            </Popup>
        </Marker>
      </StMapContainer>
    </StContainer>
  );
}

export default Map;

const StContainer = styled(Container)`
  padding: 24px;
  background-color: #FBA69B;
`

const StMapContainer = styled(MapContainer)`
  height: 80vh;
  border-radius:16px;
`



/// PERLU DIKURANGIN YG BAWAH2 INI
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

background: #FFFFFF;
box-shadow: 0px 30px 44px rgba(200, 200, 200, 0.25);
border-radius: 20px;
`

const Title = styled.div`
  margin-top :20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
/* identical to box height, or 24px */
  color: #1B1B1B;
  /* Inside auto layout */
  z-index: 1;
`
const ImageContainer = styled.div`
  position: fixed;
  width: 160px;
  height: 141.77px;
  left: auto;
  right: auto;
  top: 70px;
  bottom: 120px;
  z-index: 1;
`

const StImage = styled.img`
  display: block;
  object-fit: fill;
  opacity: 1;
  border-radius: 20px;
  border-color : gray;
  align-items: center;
  z-index: 2;
`
const Nama = styled.div`
  margin-top: 160px;
  align-content: center;

  /* text-base/reguler */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* or 22px */
  color: #1B1B1B;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 3;
`

const Goldar = styled.div`
  /* text-base/reguler */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */
  color: #1B1B1B;
  z-index: 2;
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

  background: #DE0A2D;
  border-radius: 8px;
  /* Inside auto layout */
  flex: none;
  flex-grow: 0;
  /* text-base/reguler */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  /* or 22px */
  align-items: center;
  color:#FAFAFA;
  z-index: 3;
`

const StLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;
  
  width: max-content;
  height: max-content;
  
  position: absolute;
  right: 1%;
  bottom: 5%;
  background: #FFFFFF;
  box-shadow: 4px 12px 24px rgba(200, 200, 200, 0.25);
  border-radius: 20px;
  opacity: 1;
  z-index: 499;
`

const Icon1 = styled.img`
  width: 50px;
  height: 40px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin:auto;
`

const Icon2 = styled.img`
  width: 50px;
  height: 40px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin:auto;
`
const Text = styled.p`
 /* text-lg/medium */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  /* identical to box height, or 24px */
  color: #1B1B1B;
 /* Inside auto layout */
  order: 1;
  z-index:1000;
`
