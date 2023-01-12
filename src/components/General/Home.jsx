// Import library
// import React, { useEffect, useState } from "react";
// import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

import Map from "./Map";

const Home = () => {

  return (
    <StContainer className="container-fluid">
      <div>
        <div className="row">
          <StContainerStatistic className="col"><ValueContainer>25</ValueContainer>Recipients</StContainerStatistic>
          <StContainerStatistic className="col"><ValueContainer>25</ValueContainer>Donors</StContainerStatistic>
          <StContainerStatistic className="col"><ValueContainer>25</ValueContainer>A Blood Type</StContainerStatistic>
          <StContainerStatistic className="col"><ValueContainer>25</ValueContainer>B Blood Type</StContainerStatistic>
          <StContainerStatistic className="col"><ValueContainer>25</ValueContainer>O Blood Type</StContainerStatistic>
          <StContainerStatistic className="col"><ValueContainer>25</ValueContainer>AB Blood Type</StContainerStatistic>
          <StContainerStatistic className="col">
            <div className='mx-auto' style={{width:"159px",height:"24px",fontSize:"20px",fontWeight:"500"}}>Be Heroes Now !</div>            
            <FillButton>Fill Donor Form </FillButton>           
          </StContainerStatistic>
        </div>
      </div>
      <StContainerMap>
        <div className="row mb-2">
        <div className="input-group mb-3">
          <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="assets/Filter.svg" alt="" style={{paddingRight:"8px"}}></img>Filter</button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="/">A</a></li>
            <li><a className="dropdown-item" href="/">B</a></li>
            <li><a className="dropdown-item" href="/">AB</a></li>
            <li><a className="dropdown-item" href="/">O</a></li>
          </ul>
        </div>
        </div>
        <div>
          <Map/>
        </div>
      </StContainerMap>
      <StContainerEvent>
        <div className="d-flex justify-content-center"><text style={{fontSize:"20px",marginBottom:"10px"}}>EVENT LIST</text></div>
        <div className="d-flex justify-content-center"><text style={{color:"#DE0A2D", fontFamily:'Inter',fontStyle:'normal',fontWeight:"700",lineHeight:"56px",fontSize:"46px"}}>CHECKOUT THIS EVENT !</text></div>
        <div className="row row-cols-4">
          <StCardEvent className='col'>
            <div style={{width:"25vh", margin:"auto"}}><img src="https://cdn5.vectorstock.com/i/1000x1000/69/74/blood-donation-poster-vector-20916974.jpg" alt="poster" width="100%"></img></div>
            <div>Event name</div>
            <div>Location</div>
            <div>Time</div>
          </StCardEvent>
          <StCardEvent className='col'>
            <div style={{width:"25vh", margin:"auto"}}><img src="https://cdn5.vectorstock.com/i/1000x1000/69/74/blood-donation-poster-vector-20916974.jpg" alt="poster" width="100%"></img></div>
            <div>Event name</div>
            <div>Location</div>
            <div>Time</div>
          </StCardEvent>
          <StCardEvent className='col'>
            <div style={{width:"25vh", margin:"auto"}}><img src="https://cdn5.vectorstock.com/i/1000x1000/69/74/blood-donation-poster-vector-20916974.jpg" alt="poster" width="100%"></img></div>
            <div>Event name</div>
            <div>Location</div>
            <div>Time</div>
          </StCardEvent>
          <StCardEvent className='col'>
            <div style={{width:"25vh", margin:"auto"}}><img src="https://cdn5.vectorstock.com/i/1000x1000/69/74/blood-donation-poster-vector-20916974.jpg" alt="poster" width="100%"></img></div>
            <div>Event name</div>
            <div>Location</div>
            <div>Time</div>
          </StCardEvent>
          <StCardEvent className='col'>
            <div style={{width:"25vh", margin:"auto"}}><img src="https://cdn5.vectorstock.com/i/1000x1000/69/74/blood-donation-poster-vector-20916974.jpg" alt="poster" width="100%"></img></div>
            <div>Event name</div>
            <div>Location</div>
            <div>Time</div>
          </StCardEvent>
        </div>
      </StContainerEvent>
      <StFooter>
        <div className='row'>
          <SocialMedia className='col' src="assets/twitter.svg"></SocialMedia>
          <SocialMedia className='col' src="assets/Facebook.svg"></SocialMedia>
        </div>
        <div className='row'>
          <TextFooter className='col'>Cookie Policy</TextFooter>
          <TextFooter className='col'>Privacy Policy</TextFooter>
          <TextFooter className='col'>Terms Of Use</TextFooter>
          <TextFooter className='col'>Preferences</TextFooter>
        </div>
      </StFooter>
    </StContainer>
  );
};

export default Home;

const StContainer = styled.div`
  background-color: #FFFFFF;;
  padding: 20px;
`

const StContainerStatistic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 16px;
  gap: 8px;
  width: 184.67px;
  height: 94px;
  background: #FFFFFF;
  box-shadow: 5px 15px 44px rgba(166, 166, 166, 0.25);
  border-radius: 16px;
  flex: none;
  order: 0;
  flex-grow: 1;
`

const StContainerMap = styled.div`
  background-color: #FBA69B;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
`

const StContainerEvent = styled.div`
  background-color: #ffffff;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;
`

const StCardEvent = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const ValueContainer = styled.text`
  width: 35px;
  height: 38px;
  font-family: 'Lora';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  /* or 38px */
  color: #1B1B1B;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`

const FillButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  width: 178px;
  height: 48px;

  background: #DE0A2D;
  border-radius: 8px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`

const StFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 0px;
  gap: 16px;

  position: absolute;
  width: 1440px;
  height: 216px;
  left: 0px;
  top: 1681px;

  /* White / 100 */

  background: #FFFFFF;
`

const TextFooter = styled.text`
  width: 120px;
  height: 24px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  letter-spacing: -0.24px;

  color: #6A013A;

  flex: none;
  order: 0;
  flex-grow: 0;
`

const SocialMedia = styled.img`
  position: absolute;
  height: 26.666667938232422px;
  width: 26.666667938232422px;
  border-radius: 0px;
`
