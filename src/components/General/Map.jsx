import React from 'react';
import { MapContainer,TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from "styled-components";
import L from 'leaflet';

const myIcon = new L.Icon({
    iconUrl: "assets/Point_Donor.svg",
    iconRetinaUrl: "assets/Point_Donor.svg",
    popupAnchor: [-0, -0],
    iconSize: [30,30],     
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
      <StLegend>
        <Icon1 src="assets/Point_Resipient.svg">Recipients</Icon1>
        <Icon2 src="assets/Point_Donor.svg">Donor</Icon2>
      </StLegend>
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
            <ImageContainer><StImage src="https://yt3.ggpht.com/a/AATXAJyS9ISC_e59kX9QJCF2Ox2vbPcIMoXs6lreKU9ryg=s900-c-k-c0xffffffff-no-rj-mo" alt="ProfilePic" width="150px"></StImage></ImageContainer>
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

background: #FFFFFF;
box-shadow: 0px 30px 44px rgba(200, 200, 200, 0.25);
border-radius: 20px;
`

const Title = styled.div`
  width: 60px;
  height: 20px;
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
const ImageContainer = styled.div`
  position: fixed;
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
  width: 45px;
  height: 22px;
  margin-top: 160px;
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
  line-height: 140%;
  /* or 22px */
  display: flex;
  align-items: center;
  color:#FAFAFA;
  flex: none;
  flex-grow: 0;
  z-index: 3;
`

const StLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  padding: 16px;
  gap: 24px;
  position: absolute;
  width: 164px;
  height: 119.83px;
  left: 1100px;
  top: 250px;
  background: #FFFFFF;
  box-shadow: 4px 12px 24px rgba(200, 200, 200, 0.25);
  border-radius: 20px;
  opacity: 1;
  z-index: 499;
`

const Icon1 = styled.div`
  width: 100px;
  height: 24px;
  /* text-lg/medium */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  /* identical to box height, or 24px */
  color: #1B1B1B;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  .img{
    width: 24px;
    height: 31.92px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`

const Icon2 = styled.div`
  width: 59px;
  height: 24px;
 /* text-lg/medium */
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  /* identical to box height, or 24px */
  color: #1B1B1B;
 /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

  .img{
    width: 24px;
    height: 31.92px;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
`
// const Pic1 = styled.img`
//   width: 24px;
//   height: 31.92px;
//   background: #000000;

//   flex: none;
//   order: 0;
//   flex-grow: 0;
  
// `
// const Pic2 = styled.img`
//   width: 24px;
//   height: 31.92px;

//   background: #A5A5A5;
//   flex: none;
//   order: 0;
//   flex-grow: 0;
// `