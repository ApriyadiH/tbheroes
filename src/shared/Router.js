// Import Library
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Pages 
import { EventForm, EventManagement, Homepage, Login, Register, RequestDetails, RequestForm, RequestManagement, RequestReview, Test, UserInformation, UserManagement, VolunteerDetails, VolunteerList  } from "../pages/"

// Import Components
import Navbar from "../components/general/Navbar"; 
import Footer from "../components/general/Footer"; 
import Chatbox from "../components/general/Chatbox"; 

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* Event */}
        <Route path="/event/form" element={<EventForm />} />
        <Route path="/event/management" element={<EventManagement />} />

        {/* General */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Request */}
        <Route path="/request/form" element={<RequestForm />} />
        <Route path="/request/management" element={<RequestManagement />} />
        <Route path="/request/details/:requestId" element={<RequestDetails />} />
        <Route path="/request/review/:requestId" element={<RequestReview />} />

        {/* Test */}
        <Route path="/test" element={<Test />} />

        {/* User */}
        <Route path="/user/information/:userId" element={<UserInformation />} />
        <Route path="/user/management" element={<UserManagement />} />
        
        {/* Volunteer */}
        <Route path="/volunteer/details/:userId" element={<VolunteerDetails />} />
        <Route path="/volunteer/list" element={<VolunteerList />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/User" element={<User />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Chatbox/>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;