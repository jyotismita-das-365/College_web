// Alumni data array section
const alumniData = [
  {
    name: "Amit Sharma",
    year: "2018",
    position: "Software Engineer at Google",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial: "SSIET gave me the foundation to excel in my career.",
    location: "Bangalore, India",
    linkedin: "https://linkedin.com/in/amitsharma",
  },
  {
    name: "Priya Singh",
    year: "2019",
    position: "Data Analyst at Microsoft",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial: "The faculty and environment were amazing!",
    location: "Hyderabad, India",
    linkedin: "https://linkedin.com/in/priyasingh",
  },
  {
    name: "Rahul Verma",
    year: "2020",
    position: "Product Manager at Amazon",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    testimonial: "I cherish the memories and learning at SSIET.",
    location: "Seattle, USA",
    linkedin: "https://linkedin.com/in/rahulverma",
  },
  {
    name: "Sneha Patel",
    year: "2021",
    position: "UX Designer at Adobe",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    testimonial: "SSIET helped me discover my passion for design.",
    location: "Pune, India",
    linkedin: "https://linkedin.com/in/snehapatel",
  },
  {
    name: "Vikram Joshi",
    year: "2017",
    position: "AI Researcher at IBM",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    testimonial: "The projects and labs were truly world-class.",
    location: "Delhi, India",
    linkedin: "https://linkedin.com/in/vikramjoshi",
  },
  {
    name: "Anjali Rao",
    year: "2016",
    position: "CTO at StartupX",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    testimonial: "SSIET's network opened doors for my startup journey.",
    location: "San Francisco, USA",
    linkedin: "https://linkedin.com/in/anjalirao",
  },
];

// Alumni component section
const Alumni = () => {
  return (
    // Main alumni section container
    <div className="bg-gray-50 min-h-screen py-10">
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
                {/* LinkedIn SVG Icon */}
                <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.869 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Export Alumni component section
export default Alumni;