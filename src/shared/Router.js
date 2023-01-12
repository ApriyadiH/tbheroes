import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/General/Navbar";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";

// Testing
import Test from "../pages/Test";
import Chat from "../components/Test/TestChat";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />

        {/* Testing */}
        <Route path="/test" element={<Test />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;