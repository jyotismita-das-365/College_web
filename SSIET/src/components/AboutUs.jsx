import { CircleDot } from 'lucide-react';
import { Eye } from 'lucide-react';
import { Star } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';

// AboutUs component displays information about the institution
const AboutUs = () => {
  return (
    <>
      {/* Main container for About Us section */}
      <div className="max-w-4xl mx-auto mt-14 mb-16 p-10 bg-gradient-to-br from-red-50 via-white to-yellow-50 shadow-2xl relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full opacity-30 z-0"></div>
        <div className="absolute w-56 h-56 bg-yellow-100 rounded-full opacity-20 z-0"></div>
        
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-red-700 mb-2 text-center relative">
          About Us
        </h2>
        
        {/* Introduction Paragraph */}
        <p className="text-center text-gray-600 mb-8 z-10 relative text-lg font-semibold">
          Welcome to SSIET! We are committed to providing quality education, fostering innovation, and nurturing future leaders. Our institution stands as a beacon of academic excellence, holistic development, and community engagement.
        </p>
        
        {/* Mission and Vision Section */}
        <div className="flex flex-col md:flex-row gap-10 z-10 relative font-semibold">
          {/* Our Mission */}
          <div className="flex-1 bg-white/80 rounded-2xl p-8 shadow-md border border-red-100 flex flex-col justify-center items-start space-y-4">
            <h3 className="text-2xl font-bold text-red-600 mb-2 flex items-center gap-2">
              {/* Lucide: Circle-dot */}
              <CircleDot />
              Our Mission
            </h3>
            <p className="text-gray-700 text-base">
              To empower students with knowledge, skills, and values to excel in their chosen fields and contribute positively to society. We strive to create an environment that encourages critical thinking, creativity, and lifelong learning.
            </p>
          </div>
          {/* Our Vision */}
          <div className="flex-1 bg-white/80 rounded-2xl p-8 shadow-md border border-yellow-100 flex flex-col justify-center items-start space-y-4">
            <h3 className="text-2xl font-bold text-red-600 mb-2 flex items-center gap-2">
              {/* Lucide: Eye */}
              <Eye />
              Our Vision
            </h3>
            <p className="text-gray-700 text-base">
              To be a premier institution recognized for academic excellence, research, and innovation, shaping responsible citizens and leaders of tomorrow.
            </p>
          </div>
        </div>
        
        {/* Core Values Section */}
        <div className="mt-10 bg-white/80 rounded-2xl p-8 shadow-md border border-red-100 z-10 relative font-semibold">
          <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
            {/* Lucide: Star */}
            <Star />
            Our Core Values
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Integrity and Ethics</li>
            <li>Academic Excellence</li>
            <li>Innovation and Creativity</li>
            <li>Inclusivity and Diversity</li>
            <li>Social Responsibility</li>
            <li>Collaboration and Teamwork</li>
          </ul>
        </div>
        
        {/* Why Choose SSIET Section */}
        <div className="mt-10 bg-white/80 rounded-2xl p-8 shadow-md border border-yellow-100 z-10 relative font-semibold">
          <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
            {/* Lucide: ThumbsUp */}
            <ThumbsUp />
            Why Choose SSIET?
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Experienced and dedicated faculty</li>
            <li>State-of-the-art infrastructure and laboratories</li>
            <li>Vibrant campus life with diverse student activities</li>
            <li>Strong industry connections and placement support</li>
            <li>Focus on research, innovation, and entrepreneurship</li>
            <li>Comprehensive support for student growth and well-being</li>
          </ul>
        </div>
        
        {/* Quick Stats Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 z-10 relative font-semibold">
          {/* Years of Excellence */}
          <div className="bg-red-100 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl font-bold text-red-700">25+</span>
            <span className="text-gray-700 mt-2">Years of Excellence</span>
          </div>
          {/* Alumni Worldwide */}
          <div className="bg-red-100 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl font-bold text-red-600">5000+</span>
            <span className="text-gray-700 mt-2">Alumni Worldwide</span>
          </div>
          {/* Qualified Faculty */}
          <div className="bg-red-100 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl font-bold text-red-700">50+</span>
            <span className="text-gray-700 mt-2">Qualified Faculty</span>
          </div>
          {/* Academic Programs */}
          <div className="bg-red-100 rounded-xl p-6 flex flex-col items-center shadow">
            <span className="text-3xl font-bold text-red-600">10+</span>
            <span className="text-gray-700 mt-2">Academic Programs</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;