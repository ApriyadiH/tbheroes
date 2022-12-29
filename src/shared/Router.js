import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "../pages/Test";
import Map from "../pages/map";
import Navbar from "../components/General/Navbar";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/map" element={<Map />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;