import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "../pages/Test";
import Chat from "../components/TestChat";
import Map from "../pages/map";
import Navbar from "../components/General/Navbar";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChatBox from "../components/General/Chatbox";

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
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <ChatBox/>
    </BrowserRouter>
  );
};

export default Router;