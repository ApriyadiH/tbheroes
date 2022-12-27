import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "../pages/Test";
import Map from "../pages/map";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;