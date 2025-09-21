import React from 'react'

// Navbar component for the website's main navigation
const Navbar = () => {
  return (
    <>
      {/* Main navbar container with background, text color, padding, flex layout, border, shadow, and rounded bottom corners */}
      <div className="bg-red-600 text-white p-4 flex justify-around border-2 border-black shadow-red-600 shadow-md rounded-b-lg">
        {/* Navigation links */}
        <a href="#" className="font-bold hover:text-yellow-400 transition-colors hover:underline hover:decoration-gray-950">
          Home {/* Home page link, with underline on hover */}
        </a>
        <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
          Department {/* Department section link */}
        </a>
        <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
          Admissions {/* Admissions section link */}
        </a>
        <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
          Contact {/* Contact section link */}
        </a>
        <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
          About Us {/* About Us section link */}
        </a>
        <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
          Facilities {/* Facilities section link */}
        </a>
        <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
          Placements {/* Placements section link */}
        </a>
        <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
          Alumni {/* Alumni section link */}
        </a>
        <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
          Gallery {/* Gallery section link */}
        </a>
        <a href="#" className="font-bold hover:text-yellow-400 transition-colors">
          Events {/* Events section link */}
        </a>
      </div>
    </>
  )
}

export default Navbar
