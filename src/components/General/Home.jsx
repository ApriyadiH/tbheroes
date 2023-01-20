import React from "react";
import Statistic from "../general/Statistic";
import Map from "../general/Map";
import EventPoster from "../event/EventPoster";

const Home = () =>  {
  return (
    <>
      <Statistic/>
      <Map/>
      <EventPoster/>
    </>
  );
};

export default Home;