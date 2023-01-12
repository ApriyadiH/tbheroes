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
        <h3>Statistic</h3>
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
        <div className="row mb-2">
        <div className="input-group mb-3">
          <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</button>
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
        <div className="d-flex justify-content-center"><h5>Event List</h5></div>
        <div className="d-flex justify-content-center" style={{color:"#DE0A2D"}}><h1>Checkout This Event !</h1></div>
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