import  alumni1 from "../assets/alumni/alumni1.jpg"
import alumni2 from "../assets/alumni/alumni2.jpg"
import alumni3 from "../assets/alumni/alumni3.jpg"
import alumni4 from "../assets/alumni/alumni4.jpg"
import alumni5 from "../assets/alumni/alumni5.jpg"
import alumni6 from "../assets/alumni/alumni6.jpg"
import { Linkedin } from 'lucide-react';

// Alumni data array section
const alumniData = [
  {
    name: "Jyotismita Das",
    year: "2027",
    position: "Software Engineer at Chandigarh",
    image:  alumni1,
    testimonial: "SSIET gave me the key to enter in Engineering profession.",
    location: "Odisha, India",
    linkedin: "https://www.linkedin.com/in/iamjyotismitadas/",
  },
  {
    name: "Umar Samanani",
    year: "2027",
    position: "UX Designer at Pune",
    image: alumni4,
    testimonial: "SSIET helped me discover my passion for design.",
    location: "Pune, India",
    linkedin: "https://www.linkedin.com/in/umar-samanani-627343318/",
  },
  {
    name: "Sameep",
    year: "2027",
    position: "Data Scientist at Delhi",
    image: alumni5,
    testimonial: "The projects and labs were truly world-class.",
    location: "Delhi, India",
    linkedin: "https://www.linkedin.com/in/sameep-67848b2b6/",
  },
  {
    name: "Mayank",
    year: "2027",
    position: "Data Analyst at Delhi",
    image: alumni6,
    testimonial: "SSIET's network opened doors for my professional journey.",
    location: "Delhi, India",
    linkedin: "https://www.linkedin.com/in/mayank-568687245/",
  },
];

// Alumni component section
const Alumni = () => {
  return (
    // Main alumni section container
    <div className="bg-gray-50 min-h-screen py-10 pt-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Our Alumni</h1>
        {/* Section Description */}
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Meet some of our distinguished alumni who have made their mark in the industry across the globe. Their journeys inspire our current students to dream big and achieve more.
        </p>
        {/* Alumni Cards Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniData.map((alumnus, idx) => (
            // Individual Alumni Card Section
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
              {/* Alumni Image */}
              <img
                src={alumnus.image}
                alt={alumnus.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-200"
              />
              {/* Alumni Name */}
              <h2 className="text-xl font-semibold text-gray-800">{alumnus.name}</h2>
              {/* Alumni Position */}
              <p className="text-blue-600 text-sm mb-1">{alumnus.position}</p>
              {/* Alumni Year */}
              <p className="text-gray-500 text-xs mb-1">Batch of {alumnus.year}</p>
              {/* Alumni Location */}
              <p className="text-gray-400 text-xs mb-2">{alumnus.location}</p>
              {/* Alumni Testimonial */}
              <p className="text-gray-700 italic text-center mb-3">"{alumnus.testimonial}"</p>
              {/* Alumni LinkedIn Link */}
              <a
                href={alumnus.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm flex items-center gap-1"
              >
                {/* LinkedIn Lucide Icon */}
                  <Linkedin />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;