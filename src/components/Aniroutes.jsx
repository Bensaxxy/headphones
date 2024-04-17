import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Testimonials from "../Pages/Testimonials";
import Contacts from "../Pages/Contacts";

import { Routes, Route, useLocation } from "react-router-dom";

const Aniroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default Aniroutes;
