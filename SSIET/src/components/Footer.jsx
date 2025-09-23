const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-200 via-red-100 to-yellow-100 border-t-2 border-red-300 shadow-inner mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#FECACA" />
                <path d="M8 15l4-8 4 8" stroke="#F87171" strokeWidth="2" fill="none" />
              </svg>
            </span>
            <span className="text-3xl font-extrabold text-red-700 tracking-wide">SSIET</span>
          </div>
          <p className="text-gray-700 text-base mb-4">
            Sri Shanmugha Institute of Engineering and Technology (SSIET) is committed to excellence in education, research, and holistic development of students.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Facebook" className="text-red-500 hover:text-red-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-red-500 hover:text-red-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03c0 .352.04.695.116 1.022C7.728 9.89 4.1 8.1 1.671 5.149a4.48 4.48 0 0 0-.606 2.256c0 1.557.793 2.933 2.002 3.74a4.48 4.48 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.6 4.393c-.193.053-.397.082-.607.082-.148 0-.292-.014-.432-.04a4.48 4.48 0 0 0 4.184 3.11A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.698z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-red-500 hover:text-red-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
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
            <li><a href="#" className="hover:text-red-600 transition-colors">Events</a></li>
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
              Salem, Tamil Nadu, 636302
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