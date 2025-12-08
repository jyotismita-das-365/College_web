import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
import collegelogo from '../assets/logo.png';
import Whatsapp from "./whatsapp";
import Department from "./Department";
import Admissions from "./Admissions";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import Placement from "./Placement";
import Alumni from "./Alumni";
import Banner from "./Banner";
import Footer from "./Footer";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <BrowserRouter>
        <nav className="w-full bg-red-600 text-white fixed top-0 left-0 z-50 shadow-md">
          <div className="w-full flex justify-between items-center py-4 px-4">
            <img
              src={collegelogo}
              alt="College Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-black shadow-md"
              style={{ backgroundColor: 'white' }}
            />
            
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-evenly items-center w-full text-justify">
              <Link to="/" className="hover:text-yellow-300 hover:underline font-bold" onClick={handleLinkClick}>
                Home
              </Link>
              <Link to="/Department" className="hover:text-yellow-300 hover:underline font-bold" onClick={handleLinkClick}>
                Department
              </Link>
              <Link to="/Admissions" className="hover:text-yellow-300 hover:underline font-bold" onClick={handleLinkClick}>
                Admissions
              </Link>
              <Link to="/Contact" className="hover:text-yellow-300 hover:underline font-bold" onClick={handleLinkClick}>
                Contact
              </Link>
              <Link to="/AboutUs" className="hover:text-yellow-300 hover:underline font-bold" onClick={handleLinkClick}>
                About Us
              </Link>
              <Link to="/Facilities" className="hover:text-yellow-300 hover:underline font-bold" onClick={handleLinkClick}>
                Facilities
              </Link>
              <Link to="/Placement" className="hover:text-yellow-300 hover:underline font-bold" onClick={handleLinkClick}>
                Placement
              </Link>
              <Link to="/Alumni" className="hover:text-yellow-300 hover:underline font-bold" onClick={handleLinkClick}>
                Alumni
              </Link>
            </div>

            {/* Mobile - Show some links + Menu button */}
            <div className="md:hidden flex items-center gap-4">
              <Link to="/" className="hover:text-yellow-300 font-bold text-sm" onClick={handleLinkClick}>
                Home
              </Link>
              <Link to="/Contact" className="hover:text-yellow-300 font-bold text-sm" onClick={handleLinkClick}>
                Contact
              </Link>
              <button onClick={toggleMenu}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-red-700 px-4 pb-4">
              <Link to="/Department" className="block hover:text-yellow-300 py-2 font-bold" onClick={handleLinkClick}>
                Department
              </Link>
              <Link to="/Admissions" className="block hover:text-yellow-300 py-2 font-bold" onClick={handleLinkClick}>
                Admissions
              </Link>
              <Link to="/AboutUs" className="block hover:text-yellow-300 py-2 font-bold" onClick={handleLinkClick}>
                About Us
              </Link>
              <Link to="/Facilities" className="block hover:text-yellow-300 py-2 font-bold" onClick={handleLinkClick}>
                Facilities
              </Link>
              <Link to="/Placement" className="block hover:text-yellow-300 py-2 font-bold" onClick={handleLinkClick}>
                Placement
              </Link>
              <Link to="/Alumni" className="block hover:text-yellow-300 py-2 font-bold" onClick={handleLinkClick}>
                Alumni
              </Link>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <Whatsapp />
              <Banner />
              <Department />
              <AboutUs />
              <Alumni />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/Department" element={<><Department /><Whatsapp /><Footer /></>} />
          <Route path="/Admissions" element={<><Admissions /><Whatsapp /><Footer /></>} />
          <Route path="/Contact" element={<><Contact /><Whatsapp /><Footer /></>} />
          <Route path="/AboutUs" element={<><AboutUs /><Whatsapp /><Footer /></>} />
          <Route path="/Facilities" element={<><Facilities /><Whatsapp /><Footer /></>} />
          <Route path="/Placement" element={<><Placement /><Whatsapp /><Footer /></>} />
          <Route path="/Alumni" element={<><Alumni /><Whatsapp /><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
