import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctors from "../pages/Doctors/Doctors.jsx";
import DoctorDetails from "../pages/Doctors/DoctorDetails.jsx";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/home" element= {<Home />} />
        <Route path="/doctors" element= {<Doctors />} />
        <Route path="/doctors/:id" element= {<DoctorDetails />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/register" element= {<Signup />} />
        <Route path="/contact" element= {<Contact />} />
        <Route path="/services" element= {<Services />} />
    </Routes>

  );
};

export default Routers;
