const Placement = () => {
  return (
    <>
      {/* Main Placement Section Container */}
      <div className="max-w-5xl mx-auto mt-14 mb-16 p-10 bg-gradient-to-br from-yellow-50 via-white to-red-50 rounded-3xl shadow-2xl border-2 border-yellow-200 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-100 rounded-full opacity-30 z-0"></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-red-100 rounded-full opacity-20 z-0"></div>
        
        {/* Section: Heading */}
        <h2 className="text-4xl font-extrabold text-yellow-700 mb-2 text-center drop-shadow-lg tracking-wide z-10 relative">
          Placement Cell
        </h2>
        
        {/* Section: Description */}
        <p className="text-center text-gray-600 mb-8 z-10 relative text-lg">
          The Placement Cell at SSIET is dedicated to bridging the gap between students and the professional world. We strive to provide our students with the best opportunities for internships and placements in top organizations.
        </p>
        
        {/* Section: Placement Highlights and Statistics */}
        <div className="flex flex-col md:flex-row gap-10 z-10 relative">
          {/* Placement Highlights Section */}
          <div className="flex-1 bg-white/80 rounded-2xl p-8 shadow-md border border-yellow-100 flex flex-col justify-center items-start space-y-6">
            <h3 className="text-2xl font-bold text-yellow-700 mb-2 flex items-center gap-2">
              {/* Lucide: Star Icon */}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5 12 2"/>
                </svg>
              </span>
              Placement Highlights
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Consistent placement record with top companies</li>
              <li>Dedicated training for aptitude, soft skills, and technical interviews</li>
              <li>Strong industry connections and alumni network</li>
              <li>Internship opportunities from 2nd year onwards</li>
              <li>Workshops, seminars, and guest lectures by industry experts</li>
            </ul>
          </div>
          {/* Placement Statistics Section */}
          <div className="flex-1 bg-white/80 rounded-2xl p-8 shadow-md border border-red-100 flex flex-col justify-center items-start space-y-6">
            <h3 className="text-2xl font-bold text-red-700 mb-2 flex items-center gap-2">
              {/* Lucide: BarChart Icon */}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="20" x2="12" y2="10"/>
                  <line x1="18" y1="20" x2="18" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="16"/>
                </svg>
              </span>
              Placement Statistics (2023)
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">Highest Package:</span> <span className="text-green-700">₹12 LPA</span>
              </li>
              <li>
                <span className="font-semibold">Average Package:</span> <span className="text-yellow-700">₹5.2 LPA</span>
              </li>
              <li>
                <span className="font-semibold">Total Offers:</span> <span className="text-blue-700">210+</span>
              </li>
              <li>
                <span className="font-semibold">Top Recruiters:</span> <span className="text-gray-700">TCS, Infosys, Wipro, Capgemini, Cognizant, HCL, L&T, Tech Mahindra, and more</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Section: Our Recruiters */}
        <div className="mt-10 bg-white/80 rounded-2xl p-8 shadow-md border border-yellow-100 z-10 relative">
          <h3 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center gap-2">
            {/* Lucide: Briefcase Icon */}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 3v4"/>
                <path d="M8 3v4"/>
                <path d="M2 13h20"/>
              </svg>
            </span>
            Our Recruiters
          </h3>
          {/* Recruiter Logos Section */}
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {/* Example logos, replace src with actual recruiter logos */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/TCS_New_Logo.svg" alt="TCS" className="h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Infosys_logo.svg" alt="Infosys" className="h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Wipro_Logo.svg" alt="Wipro" className="h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Capgemini_201x_logo.svg" alt="Capgemini" className="h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Cognizant_logo_2022.svg" alt="Cognizant" className="h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/HCL_Technologies_Logo.svg" alt="HCL" className="h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/L%26T_logo.svg" alt="L&T" className="h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Tech_Mahindra_logo.svg" alt="Tech Mahindra" className="h-10" />
          </div>
        </div>
        
        {/* Section: Placement Process */}
        <div className="mt-10 bg-white/80 rounded-2xl p-8 shadow-md border border-red-100 z-10 relative">
          <h3 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
            {/* Lucide: Workflow Icon */}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="6" height="6" rx="1"/>
                <rect x="15" y="3" width="6" height="6" rx="1"/>
                <rect x="9" y="15" width="6" height="6" rx="1"/>
                <path d="M6 9v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"/>
                <path d="M12 9v6"/>
              </svg>
            </span>
            Placement Process
          </h3>
          {/* Placement Process Steps Section */}
          <ol className="list-decimal pl-6 text-gray-700 space-y-2">
            <li>Pre-placement training and workshops</li>
            <li>Registration for placement drives</li>
            <li>Shortlisting based on eligibility criteria</li>
            <li>Written tests and group discussions</li>
            <li>Technical and HR interviews</li>
            <li>Offer letters and onboarding</li>
          </ol>
        </div>
        
        {/* Section: Placement Cell Contact */}
        <div className="mt-10 bg-white/80 rounded-2xl p-8 shadow-md border border-yellow-100 z-10 relative">
          <h3 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center gap-2">
            {/* Lucide: PhoneCall Icon */}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            Contact Placement Cell
          </h3>
          {/* Placement Cell Contact Details Section */}
          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Mr. Rakesh Kumar (Placement Officer):</span>
              <span className="ml-2">+91 98765 43210</span>
            </li>
            <li>
              <span className="font-semibold">Email:</span>
              <a href="mailto:placement@ssiet.edu.in" className="ml-2 text-blue-600 hover:underline">placement@ssiet.edu.in</a>
            </li>
            <li>
              <span className="font-semibold">Office Hours:</span>
              <span className="ml-2">Mon - Fri: 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Placement;