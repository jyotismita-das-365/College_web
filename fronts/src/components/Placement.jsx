import allengers from '../assets/placement/allengers.png';
import blueStar from '../assets/placement/blueStar.png';
import eClerx from '../assets/placement/eClerx.png';
import emicon from '../assets/placement/emicon.png';
import erginus from '../assets/placement/erginus.png';
import HCL from '../assets/placement/HCL.png';
import indSphinx from '../assets/placement/indSphinx.png';
import netSmartz from '../assets/placement/netSmartz.png';
import pernodRicard from '../assets/placement/pernodRicard.png';
import sasvat from '../assets/placement/sasvat.png';
import shipManagement from '../assets/placement/shipManagement.png';
import techMahindra from '../assets/placement/techMahindra.png';
import TOI from '../assets/placement/TOI.png';

const Placement = () => {
  return (
    <>
      {/* Main Placement Section Container */}
      <div className="max-w-5xl mx-auto mt-14 mb-16 p-10 bg-gradient-to-br from-yellow-50 via-white to-red-50 rounded-3xl shadow-2xl border-2 border-rose-200 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-100 rounded-full opacity-30 z-0"></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-red-100 rounded-full opacity-20 z-0"></div>
        
        {/* Section: Heading */}
        <h2 className="text-4xl font-extrabold text-red-700 mb-2 text-center drop-shadow-lg tracking-wide z-10 relative">
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
            <h3 className="text-2xl font-bold text-red-500 mb-2 flex items-center gap-2">
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
            <h3 className="text-2xl font-bold text-red-500 mb-2 flex items-center gap-2">
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
          <h3 className="text-2xl font-bold text-red-500 mb-4 flex items-center gap-2">
            Our Recruiters
          </h3>
          {/* Recruiter Logos Section */}
          <div className="flex flex-wrap gap-6 items-center justify-center">
            {/* Example logos, replace src with actual recruiter logos */}
            <img src={allengers} alt="allengers" className="h-10" />
            <img src={blueStar} alt="blueStar" className="h-10" />
            <img src={eClerx} alt="eClerx" className="h-10" />
            <img src={emicon} alt="emicon" className="h-10" />
            <img src={erginus} alt="erginus" className="h-10" />
            <img src={HCL} alt="HCL" className="h-10" />
            <img src={indSphinx} alt="indSphinx" className="h-10" />
            <img src={netSmartz} alt="netSmartz" className="h-10" />
            <img src={pernodRicard} alt="pernodRicard" className="h-10" />
            <img src={sasvat} alt="sasvat" className="h-10" />
            <img src={shipManagement} alt="shipManagement" className="h-10" />
            <img src={techMahindra} alt="techMahindra" className="h-10" />
            <img src={TOI} alt="TOI" className="h-10" />
          </div>
        </div>
        
        {/* Section: Placement Process */}
        <div className="mt-10 bg-white/80 rounded-2xl p-8 shadow-md border border-red-100 z-10 relative">
          <h3 className="text-2xl font-bold text-red-500 mb-4 flex items-center gap-2">
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
          <h3 className="text-2xl font-bold text-red-500 mb-4 flex items-center gap-2">
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