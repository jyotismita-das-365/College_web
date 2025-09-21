import { useState } from "react";
// Importing department images
import civil_dept from "../assets/department/civil_dept.jpg";
import cse_dept from "../assets/department/cse_dept.jpg";
import ee_dept from "../assets/department/ee_dept.jpg";
import me_dept from "../assets/department/me_dept.jpg";

// Array of department data (image, alt text, title, description)
const departments = [
  {
    img: cse_dept,
    alt: "Computer Science and Engineering",
    title: "Computer Science and Engineering",
    desc: "Our Computer Science and Engineering department offers cutting-edge programs in software development, artificial intelligence, and data science. Students gain hands-on experience with the latest technologies and industry practices.",
  },
  {
    img: me_dept,
    alt: "Mechanical Engineering",
    title: "Mechanical Engineering",
    desc: "The Mechanical Engineering department focuses on the principles of mechanics, thermodynamics, and materials science. Students engage in practical projects and research to solve real-world engineering challenges.",
  },
  {
    img: ee_dept,
    alt: "Electronics Engineering",
    title: "Electronics Engineering",
    desc: "This department provides comprehensive education in electronics systems, and communication technologies. Students learn to design and implement innovative solutions for modern electronics engineering problems.",
  },
  {
    img: civil_dept,
    alt: "Civil Engineering",
    title: "Civil Engineering",
    desc: "The Civil Engineering department is dedicated to the study of infrastructure development, environmental engineering, and urban planning. Students participate in projects that contribute to sustainable development and community welfare.",
  },
];

const Department = () => {
  // State to track which department card is hovered
  const [hovered, setHovered] = useState(null);

  return (
    // Main container with background and padding
    <div className="bg-blue-50 min-h-screen py-10">
      {/* Header section */}
      <div className="max-w-4xl mx-auto text-center mb-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 drop-shadow-lg">
          Explore Our Departments
        </h1>
        <p className="text-base sm:text-lg text-gray-800">
          Discover the diverse range of academic departments that make our institution a hub of knowledge and innovation. Each department is dedicated to providing top-notch education, fostering research, and nurturing talent in their respective fields.
        </p>
      </div>

      {/* Grid of department cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2">
        {departments.map((dept, idx) => (
          // Department card
          <div
            key={idx}
            className={`relative bg-white border-2 rounded-2xl shadow-xl transition-transform duration-300 ease-in-out
              ${hovered === idx
                ? "scale-105 border-blue-900 shadow-blue-900"
                : "hover:scale-105 hover:border-red-600 hover:shadow-red-200 border-black shadow-blue-100"}
              flex flex-col items-center p-4 sm:p-5 cursor-pointer h-[30rem] sm:h-[32rem]`}
            onMouseEnter={() => setHovered(idx)} // Set hovered card index
            onMouseLeave={() => setHovered(null)} // Reset hovered card
          >
            {/* Department image */}
            <div className={`w-full rounded-lg mb-4 border-4 transition-all duration-300
              ${hovered === idx ? "border-blue-900 bg-blue-100" : "border-red-200 bg-red-50"}`}>
              <img
                src={dept.img}
                alt={dept.alt}
                className="rounded-lg w-full h-36 sm:h-40 object-cover"
              />
            </div>
            {/* Department title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-black mb-2 text-center drop-shadow-md">
              {dept.title}
            </h2>
            {/* Department description */}
            <p className="text-gray-700 text-sm sm:text-base text-center flex-1">
              {dept.desc}
            </p>
            {/* Learn More button */}
            <button
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-md border-2 text-sm sm:text-base
                ${hovered === idx
                  ? "bg-blue-900 text-white border-black"
                  : "bg-red-600 text-white border-blue-900 hover:bg-black hover:text-red-400"}`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;