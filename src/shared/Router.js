// Import Library
import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

// Import Pages 
import { EventForm, EventList, EventManagement, Homepage, Login, Register, RequestDetails, RequestForm, RequestList, RequestManagement, RequestReview, Test, UserChangePassword, UserInformation, UserManagement, VolunteerDetails, VolunteerList  } from "../pages/"

// Import Components
import Navbar from "../components/general/Navbar"; 
import Footer from "../components/general/Footer"; 
import Chatbox from "../components/general/Chatbox"; 

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
        <Route element={
        <>
          <Navbar/>
          <Outlet/>
          <Chatbox/>
          <Footer/>
        </>}>

          {/* This is inside Outlet */}
          {/* Event */}
          <Route path="/event/form" element={<EventForm />} />
          <Route path="/event/list" element={<EventList />} />
          <Route path="/event/management" element={<EventManagement />} />

          {/* General */}
          <Route path="/" element={<Homepage />} />

          {/* Request */}
          <Route path="/request/form" element={<RequestForm />} />
          <Route path="/request/list" element={<RequestList />} />
          <Route path="/request/management" element={<RequestManagement />} />
          <Route path="/request/details/:requestId" element={<RequestDetails />} />
          <Route path="/request/review/:requestId" element={<RequestReview />} />

          {/* Test */}
          <Route path="/test" element={<Test />} />

          {/* User */}
          <Route path="/user/information/:userId" element={<UserInformation />} />
          <Route path="/user/password/" element={<UserChangePassword />} />
          <Route path="/user/management" element={<UserManagement />} />
          
          {/* Volunteer */}
          <Route path="/volunteer/details/:userId" element={<VolunteerDetails />} />
          <Route path="/volunteer/list" element={<VolunteerList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;