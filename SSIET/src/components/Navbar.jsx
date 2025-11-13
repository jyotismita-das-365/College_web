// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import React from 'react'
// import collegelogo from '../assets/logo.png'

// // Navbar component for the website's main navigation
// const Navbar = () => {
//   return (
//     <>
//       Main navbar container with fixed position at the top
//       <div className="fixed top-0 left-0 w-full z-50 bg-red-600 text-white p-4 flex justify-around items-center border-2 border-black shadow-red-600 shadow-md rounded-b-lg">
//         {/* College icon/logo at the left */}
//         <div className="flex items-center mr-4">
//           {/* Replace the src below with your actual college logo/image path */}
//           <img
//             src={collegelogo}
//             alt="College Logo"
//             className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
//             style={{ backgroundColor: 'white' }}
//           />
//         </div>
//         {/* Navigation links */}
//         <div className="flex flex-1 justify-around items-center">
//           <a href="#" className="font-bold hover:text-yellow-400 transition-colors hover:underline hover:decoration-gray-950">
//             Home {/* Home page link, with underline on hover */}
//           </a>
//           <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
//             Department {/* Department section link */}
//           </a>
//           <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
//             Admissions {/* Admissions section link */}
//           </a>
//           <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
//             Contact {/* Contact section link */}
//           </a>
//           <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
//             About Us {/* About Us section link */}
//           </a>
//           <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
//             Facilities {/* Facilities section link */}
//           </a>
//           <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
//             Placements {/* Placements section link */}
//           </a>
//           <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
//             Alumni {/* Alumni section link */}
//           </a>
//         </div>
//       </div>
//       {/* Spacer div to prevent content from being hidden behind the fixed navbar */}
//       <div className="h-20"></div>
//     </>
//   )
// }

// export default Navbar




import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import Placement from "./Placement";
import Admissions from "./Admissions";
import Department from "./Department";
import Alumni from "./Alumni";

const Navbar = () => {
  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/admissions">Admissions</Link> |{" "}
        <Link to="/placements">Placements</Link> |{" "}
        <Link to="/departments">Departments</Link>
      </nav>
      
    <Routes>
      <Route path="/" element={<Alumni />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/placements" element={<Placement/>} />
      <Route path="/departments" element={<Department />} />
    </Routes>
    </BrowserRouter>
    </>
  ) ;
}

  export default Navbar
