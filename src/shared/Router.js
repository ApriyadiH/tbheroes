import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "../pages/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;