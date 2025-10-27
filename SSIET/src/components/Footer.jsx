import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-200 via-red-100 to-yellow-100 border-t-2 border-red-300 shadow-inner mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-extrabold text-red-700 tracking-wide">SSIET</span>
          </div>
          <p className="text-gray-700 text-base mb-4">
            Sri Sukhmani Group of Institute & Technology (SSIET) is committed to excellence in education, research, and holistic development of students.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Facebook" className="text-blue-700 transition-colors">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter" className="text-blue-700 hover:text-blue-500 transition-colors">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram" className="text-blue-700 hover:text-blue-500 transition-colors">
              <Instagram />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-red-700 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-red-600 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-red-600 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-red-600 transition-colors">Departments</a></li>
            <li><a href="#" className="hover:text-red-600 transition-colors">Admissions</a></li>
            <li><a href="#" className="hover:text-red-600 transition-colors">Facilities</a></li>
            <li><a href="#" className="hover:text-red-600 transition-colors">Placements</a></li>
            <li><a href="#" className="hover:text-red-600 transition-colors">Alumni</a></li>
            <li><a href="#" className="hover:text-red-600 transition-colors">Contact</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-red-700 mb-3">Contact Us</h3>
          <ul className="text-gray-700 space-y-2">
            <li>
              <span className="font-medium">Address:</span>
              <br />
              123, SSIET Campus Road,<br />
              Derabassi, Punjab, 506401
            </li>
            <li>
              <span className="font-medium">Phone:</span> <a href="tel:+914271234567" className="hover:text-red-600">+91 427 123 4567</a>
            </li>
            <li>
              <span className="font-medium">Email:</span> <a href="mailto:info@ssiet.edu.in" className="hover:text-red-600">info@ssiet.edu.in</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm py-4 border-t border-red-200 bg-red-50/60">
        &copy; {new Date().getFullYear()} Sri Sukhmani Institute of Engineering & Technology | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;