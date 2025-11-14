import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import collegelogo from '../assets/logo.png'
import Whatsapp from "./whatsapp";
import Department from "./Department";
import Admissions from "./Admissions";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import Placement from "./Placement";
import Alumni from "./Alumni";

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="fixed top-0 left-0 w-full z-50 bg-red-600 text-white p-4 flex justify-around items-center border-2 border-black shadow-red-600 shadow-md rounded-b-lg">
          <div className="flex flex-1 justify-around items-center">
            <img
            src={collegelogo}
            alt="College Logo"
            className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
            style={{ backgroundColor: 'white' }}
          />
          <div>
            <Link to="/" className="font-bold hover:text-yellow-400 transition-colors hover:underline hover:decoration-gray-950">Home</Link> {" "}
            <Link to="/Department">Department</Link> {" "}
            <Link to="/Admissions">Admissions</Link> {" "}
            <Link to="/Contact">Contact</Link> {" "}
            <Link to="/AboutUs">AboutUs</Link> {" "}
            <Link to="/Facilities">Facilities</Link> {" "}
            <Link to="/Placement">Placement</Link> {" "}
            <Link to="/Alumni">Alumni</Link>
          </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Whatsapp />} />
          <Route path="/Department" element={<Department />} />
          <Route path="/Admissions" element={<Admissions />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/Placement" element={<Placement />} />
          <Route path="/Alumni" element={<Alumni />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
