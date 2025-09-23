const Contact = () => {
  return (
    <>
      {/* Main Contact Section Container */}
      <div className="max-w-4xl mx-auto mt-14 mb-16 p-10 bg-gradient-to-br from-red-50 via-white to-yellow-50 rounded-3xl shadow-2xl border-2 border-red-200 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full opacity-30 z-0"></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-yellow-100 rounded-full opacity-20 z-0"></div>
        
        {/* Section: Heading and Description */}
        <h2 className="text-4xl font-extrabold text-red-700 mb-2 text-center drop-shadow-lg tracking-wide z-10 relative">Contact Us</h2>
        <p className="text-center text-gray-600 mb-8 z-10 relative">
          We’d love to hear from you! Whether you have a question about admissions, facilities, events, or anything else, our team is ready to answer all your questions.
        </p>
        
        {/* Section: Main Content (Contact Info + Contact Form) */}
        <div className="flex flex-col md:flex-row gap-10 z-10 relative">
          {/* Section: Contact Info */}
          <div className="flex-1 bg-white/80 rounded-2xl p-8 shadow-md border border-red-100 flex flex-col justify-center items-start space-y-6">
            {/* Subsection: College Information */}
            <div>
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <span>
                  {/* Lucide: Info */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </span>
                College Information
              </h3>
              <ul className="space-y-3">
                {/* Address */}
                <li className="flex items-start gap-3">
                  {/* Lucide: MapPin */}
                  <span className="inline-flex items-center justify-center w-9 h-9 bg-red-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21s8-7.58 8-12A8 8 0 0 0 4 9c0 4.42 8 12 8 12z"/>
                      <circle cx="12" cy="9" r="3"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-700">Address:</span>
                    <p className="text-gray-600 text-sm">SSIET, 123 College Road, City Name, State, 123456, India</p>
                  </div>
                </li>
                {/* Email */}
                <li className="flex items-start gap-3">
                  {/* Lucide: Mail */}
                  <span className="inline-flex items-center justify-center w-9 h-9 bg-red-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 6-10 7L2 6"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-700">Email:</span>
                    <a href="mailto:info@ssiet.edu.in" className="text-blue-600 hover:underline text-sm block">info@ssiet.edu.in</a>
                    <a href="mailto:admissions@ssiet.edu.in" className="text-blue-600 hover:underline text-sm block">admissions@ssiet.edu.in</a>
                  </div>
                </li>
                {/* Phone */}
                <li className="flex items-start gap-3">
                  {/* Lucide: Phone */}
                  <span className="inline-flex items-center justify-center w-9 h-9 bg-red-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-700">Phone:</span>
                    <a href="tel:+911234567890" className="text-blue-600 hover:underline text-sm block">+91 12345 67890</a>
                    <a href="tel:+911234567891" className="text-blue-600 hover:underline text-sm block">+91 12345 67891</a>
                  </div>
                </li>
                {/* Office Hours */}
                <li className="flex items-start gap-3">
                  {/* Lucide: Clock */}
                  <span className="inline-flex items-center justify-center w-9 h-9 bg-red-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-700">Office Hours:</span>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 text-sm">Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </li>
                {/* Website */}
                <li className="flex items-start gap-3">
                  {/* Lucide: Globe */}
                  <span className="inline-flex items-center justify-center w-9 h-9 bg-red-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <ellipse cx="12" cy="12" rx="4" ry="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-gray-700">Website:</span>
                    <a href="https://www.ssiet.edu.in" className="text-blue-600 hover:underline text-sm block" target="_blank" rel="noopener noreferrer">www.ssiet.edu.in</a>
                  </div>
                </li>
              </ul>
            </div>
            {/* Subsection: Key Contacts */}
            <div>
              <h3 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
                {/* Lucide: Users */}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </span>
                Key Contacts
              </h3>
              <ul className="space-y-2">
                {/* Principal */}
                <li>
                  <span className="font-semibold text-gray-700">Principal:</span>
                  <span className="text-gray-600 text-sm ml-2">Dr. A. B. Sharma - <a href="mailto:principal@ssiet.edu.in" className="text-blue-600 hover:underline">principal@ssiet.edu.in</a></span>
                </li>
                {/* Admissions Office */}
                <li>
                  <span className="font-semibold text-gray-700">Admissions Office:</span>
                  <span className="text-gray-600 text-sm ml-2">Ms. Priya Singh - <a href="mailto:admissions@ssiet.edu.in" className="text-blue-600 hover:underline">admissions@ssiet.edu.in</a></span>
                </li>
                {/* Placement Cell */}
                <li>
                  <span className="font-semibold text-gray-700">Placement Cell:</span>
                  <span className="text-gray-600 text-sm ml-2">Mr. Rakesh Kumar - <a href="mailto:placement@ssiet.edu.in" className="text-blue-600 hover:underline">placement@ssiet.edu.in</a></span>
                </li>
              </ul>
            </div>
            {/* Subsection: Find Us (Map) */}
            <div>
              <h3 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
                {/* Lucide: Map */}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <polygon points="1 6 1 22 8 19 16 22 23 18 23 2 16 5 8 2 1 6"/>
                    <line x1="8" y1="2" x2="8" y2="19"/>
                    <line x1="16" y1="5" x2="16" y2="22"/>
                  </svg>
                </span>
                Find Us
              </h3>
              <div className="rounded-lg overflow-hidden border border-red-200 shadow-sm">
                <iframe
                  title="SSIET Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0199999999995!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE4LjAiTiA3N8KwMzUnNDEuNiJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Section: Contact Form */}
          <form className="flex-1 bg-white/90 rounded-2xl p-8 shadow-md border border-yellow-100 space-y-6 z-10 relative">
            {/* Contact Form Heading */}
            <h3 className="text-2xl font-bold text-red-700 mb-2 flex items-center gap-2">
              {/* Lucide: MessageCircle */}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4A8.5 8.5 0 0 1 3 12.5c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5z"/>
                  <polyline points="8 10 12 14 16 10"/>
                </svg>
              </span>
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
            {/* Form Field: Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                className="w-full border-2 border-red-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50/50 transition"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            {/* Form Field: Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                className="w-full border-2 border-red-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50/50 transition"
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            {/* Form Field: Phone */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full border-2 border-red-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50/50 transition"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
              />
            </div>
            {/* Form Field: Subject */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="w-full border-2 border-red-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50/50 transition"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
            </div>
            {/* Form Field: Message */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Message
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                className="w-full border-2 border-red-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50/50 transition"
                id="message"
                name="message"
                rows="5"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:from-red-700 hover:to-yellow-500 transition-all duration-200 text-lg tracking-wide flex items-center justify-center gap-2"
            >
              {/* Lucide: Send */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Send Message
            </button>
            {/* Privacy Policy Notice */}
            <div className="mt-6 text-xs text-gray-500 text-center">
              By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
            </div>
          </form>
        </div>
        {/* Section: Campus Facilities and Quick Links */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
          {/* Subsection: Campus Facilities */}
          <div className="flex-1">
            <h4 className="text-lg font-bold text-red-700 mb-2 flex items-center gap-2">
              {/* Lucide: Building2 */}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 22V12h6v10"/>
                  <path d="M9 8h.01"/>
                  <path d="M15 8h.01"/>
                </svg>
              </span>
              Campus Facilities
            </h4>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>24x7 Wi-Fi enabled campus</li>
              <li>Modern library and digital resources</li>
              <li>State-of-the-art laboratories</li>
              <li>Sports complex and gymnasium</li>
              <li>On-campus hostel and cafeteria</li>
              <li>Medical and counseling services</li>
            </ul>
          </div>
          {/* Subsection: Quick Links */}
          <div className="flex-1">
            <h4 className="text-lg font-bold text-red-700 mb-2 flex items-center gap-2">
              {/* Lucide: GraduationCap */}
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="m22 10-10-5-10 5 10 5 10-5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </span>
              Quick Links
            </h4>
            <ul className="list-none text-gray-600 text-sm space-y-1">
              {/* Admissions Link */}
              <li>
                <a href="/admissions" className="hover:underline text-blue-600 flex items-center gap-1">
                  {/* Lucide: ArrowRight */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                  Admissions
                </a>
              </li>
              {/* Placement Cell Link */}
              <li>
                <a href="/placement" className="hover:underline text-blue-600 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                  Placement Cell
                </a>
              </li>
              {/* Events Link */}
              <li>
                <a href="/events" className="hover:underline text-blue-600 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                  Events
                </a>
              </li>
              {/* Alumni Link */}
              <li>
                <a href="/alumni" className="hover:underline text-blue-600 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                  Alumni
                </a>
              </li>
              {/* Facilities Link */}
              <li>
                <a href="/facilities" className="hover:underline text-blue-600 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                  Facilities
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;