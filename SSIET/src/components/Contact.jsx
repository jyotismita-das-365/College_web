import { Info, MapPin, Mail, Phone, Clock, Globe, User } from 'lucide-react';
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
                  {/* Lucide: Info icon*/}
                  <Info />
                College Information
              </h3>
              <ul className="space-y-3">
                {/* Address */}
                <li className="flex items-start gap-3">
                  {/* Lucide: MapPin icon*/}
                  <MapPin className="text-red-500"/>
                  <div>
                    <span className="font-semibold text-gray-700">Address:</span>
                    <p className="text-gray-600 text-sm">SSIET, 123 College Road, City Name, State, 123456, India</p>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-start gap-3">
                  {/* Lucide: Mail icon */}
                  <Mail className="text-red-500"/>
                  <div>
                    <span className="font-semibold text-gray-700">Email:</span>
                    <a href="mailto:info@ssiet.edu.in" className="text-blue-600 hover:underline text-sm block">info@ssiet.edu.in</a>
                    <a href="mailto:admissions@ssiet.edu.in" className="text-blue-600 hover:underline text-sm block">admissions@ssiet.edu.in</a>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-start gap-3">
                  {/* Lucide: Phone icon */}
                  <Phone className="text-red-500"/>
                  <div>
                    <span className="font-semibold text-gray-700">Phone:</span>
                    <a href="tel:+911234567890" className="text-blue-600 hover:underline text-sm block">+91 12345 67890</a>
                    <a href="tel:+911234567891" className="text-blue-600 hover:underline text-sm block">+91 12345 67891</a>
                  </div>
                </li>

                {/* Office Hours */}
                <li className="flex items-start gap-3">
                  {/* Lucide: Clock icon*/}
                  <Clock className="text-red-500" />
                  <div>
                    <span className="font-semibold text-gray-700">Office Hours:</span>
                    <p className="text-gray-600 text-sm">Mon - Fri: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 text-sm">Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </li>

                {/* Website */}
                <li className="flex items-start gap-3">
                  {/* Lucide: Globe icon */}
                  <Globe className="text-red-500"/>
                  <div>
                    <span className="font-semibold text-gray-700">Website:</span>
                    <a href="https://www.srisukhmanigroup.edu.in/#" className="text-blue-600 hover:underline text-sm block" target="_blank" rel="noopener noreferrer">www.ssgi.edu.in</a>
                  </div>
                </li>
              </ul>
            </div>
            {/* Subsection: Key Contacts */}
            <div>
              <h3 className="text-lg font-bold text-red-600 mb-2 flex items-center gap-2">
                {/* Lucide: Users icon */}
                <User className="text-red-500" />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;