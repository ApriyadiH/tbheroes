// Import library
import React, { useEffect, useState } from "react";
// import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import styled from "styled-components";

import Map from "./Map";

const Home = () => {

  return (
    <StContainer className="container-fluid">
      <div>
        Statistic
        <div className="row">
          <StContainerStatistic className="col">Recipients</StContainerStatistic>
          <StContainerStatistic className="col">Donors</StContainerStatistic>
          <StContainerStatistic className="col">A Blood Type</StContainerStatistic>
          <StContainerStatistic className="col">B Blood Type</StContainerStatistic>
          <StContainerStatistic className="col">O Blood Type</StContainerStatistic>
          <StContainerStatistic className="col">AB Blood Type</StContainerStatistic>
          <StContainerStatistic className="col">
            <div>Be the heroes Now</div>            
            <div><button>Join Now</button></div>            
          </StContainerStatistic>
        </div>
      </div>
      <StContainerMap>
        <Map/>
      </StContainerMap>
      <StContainerEvent>
        <div>Event</div>
        <div className="row row-cols">
          <StCardEvent className="col-3">
            <div style={{width:"10vh"}}><img src="https://cdn5.vectorstock.com/i/1000x1000/69/74/blood-donation-poster-vector-20916974.jpg" alt="poster" width="100%"></img></div>
            <div>Event name</div>
            <div>Location</div>
            <div>Time</div>
          </StCardEvent>
          <StCardEvent className="col-3">
            <div style={{width:"10vh"}}><img src="https://cdn5.vectorstock.com/i/1000x1000/69/74/blood-donation-poster-vector-20916974.jpg" alt="poster" width="100%"></img></div>
            <div>Event name</div>
            <div>Location</div>
            <div>Time</div>
          </StCardEvent>
          <StCardEvent className="col-3">
            <div style={{width:"10vh"}}><img src="https://cdn5.vectorstock.com/i/1000x1000/69/74/blood-donation-poster-vector-20916974.jpg" alt="poster" width="100%"></img></div>
            <div>Event name</div>
            <div>Location</div>
            <div>Time</div>
          </StCardEvent>
          <StCardEvent className="col-3">
            <div style={{width:"10vh"}}><img src="https://cdn5.vectorstock.com/i/1000x1000/69/74/blood-donation-poster-vector-20916974.jpg" alt="poster" width="100%"></img></div>
            <div>Event name</div>
            <div>Location</div>
            <div>Time</div>
          </StCardEvent>
          <StCardEvent className="col-3">
            <div style={{width:"10vh"}}><img src="https://cdn5.vectorstock.com/i/1000x1000/69/74/blood-donation-poster-vector-20916974.jpg" alt="poster" width="100%"></img></div>
            <div>Event name</div>
            <div>Location</div>
            <div>Time</div>
          </StCardEvent>
        </div>
      </StContainerEvent>
    </StContainer>
  );
};

export default Home;

const StContainer = styled.div`
  background-color: #dddddd;
  padding: 20px;
`

const StContainerStatistic = styled.div`
  background-color: #ffffff;
  margin: 10px 5px;
  padding: 20px;
  border-radius: 15px;
`

const StContainerMap = styled.div`
  background-color: #ffffff;
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
  padding: 20px;
`
