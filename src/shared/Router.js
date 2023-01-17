// Import Library
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Pages 
import EventForm from "../pages/event/EventForm";
import EventManagement from "../pages/event/EventManagement";
import Homepage from "../pages/general/Homepage";
import Login from "../pages/general/Login";
import Register from "../pages/general/Register";
import RequestForm from "../pages/request/RequestForm";
import RequestManagement from "../pages/request/RequestManagement";
import RequestReview from "../pages/request/RequestReview";
import Test from "../pages/test/Test";
import UserInformation from "../pages/user/UserInformation";
import UserManagement from "../pages/user/UserManagement";
import VolunteerDetails from "../pages/volunteer/VolunteerDetails";
import VolunteerList from "../pages/volunteer/VolunteerList";

// Import Components
import Navbar from "../components/general/Navbar"; 
import Footer from "../components/general/Footer"; 

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/event/form" element={<EventForm />} />
        <Route path="/event/management" element={<EventManagement />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request/form" element={<RequestForm />} />
        <Route path="/request/management" element={<RequestManagement />} />
        <Route path="/request/details/:requestId" element={<RequestManagement />} />
        <Route path="/request/review/:requestId" element={<RequestReview />} />
        <Route path="/test" element={<Test />} />
        <Route path="/user/information/:userId" element={<UserInformation />} />
        <Route path="/user/management" element={<UserManagement />} />
        <Route path="/volunteer/details/:userId" element={<VolunteerDetails />} />
        <Route path="/volunteer/list" element={<VolunteerList />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;