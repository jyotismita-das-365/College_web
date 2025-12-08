import alu1 from "../assets/alumni/alu1.jpg"
import alu2 from "../assets/alumni/alu2.jpg"
import alu3 from "../assets/alumni/alu3.webp"
import alu4 from "../assets/alumni/alu4.jpg"
import alu5 from "../assets/alumni/alu5.jpg"
import alu6 from "../assets/alumni/alu6.jpg"
import { Linkedin } from 'lucide-react';

// Alumni data array section
const alumniData = [
  {
    name: "Amit Sharma",
    year: "2018",
    position: "Software Engineer at Allengers",
    image: alu1,
    testimonial: "SSIET gave me the foundation to excel in my career.",
    location: "Bangalore, India",
    linkedin: "https://linkedin.com/in/amitsharma",
  },
  {
    name: "Priya Singh",
    year: "2019",
    position: "Data Analyst at TOI",
    image: alu2,
    testimonial: "The faculty and environment were amazing!",
    location: "Hyderabad, India",
    linkedin: "https://linkedin.com/in/priyasingh",
  },
  {
    name: "Rahul Verma",
    year: "2020",
    position: "Product Manager at HCL",
    image: alu3,
    testimonial: "I cherish the memories and learning at SSIET.",
    location: "Seattle, USA",
    linkedin: "https://linkedin.com/in/rahulverma",
  },
  {
    name: "Sneha Patel",
    year: "2021",
    position: "UX Designer at Sasvat",
    image: alu4,
    testimonial: "SSIET helped me discover my passion for design.",
    location: "Pune, India",
    linkedin: "https://linkedin.com/in/snehapatel",
  },
  {
    name: "Vikram Joshi",
    year: "2017",
    position: "AI Researcher at NetSmartz",
    image: alu5,
    testimonial: "The projects and labs were truly world-class.",
    location: "Delhi, India",
    linkedin: "https://linkedin.com/in/vikramjoshi",
  },
  {
    name: "Anjali Rao",
    year: "2016",
    position: "CTO at PernodRicard",
    image: alu6,
    testimonial: "SSIET's network opened doors for my startup journey.",
    location: "San Francisco, USA",
    linkedin: "https://linkedin.com/in/anjalirao",
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