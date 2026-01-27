import { SquareLibrary, FlaskConical } from 'lucide-react';

const Facilities = () => {
  return (
    <>
      {/* Main Facilities Section Container */}
      <div className="max-w-5xl mx-auto mt-14 mb-16 p-10 bg-gradient-to-br from-yellow-50 via-white to-red-50 rounded-3xl shadow-2xl border-2 border-rose-200 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-100 rounded-full opacity-30 z-0"></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-red-100 rounded-full opacity-20 z-0"></div>
        
        {/* Section: Heading and Description */}
        <h2 className="text-4xl font-extrabold text-red-700 mb-2 text-center drop-shadow-lg tracking-wide z-10 relative">
          Campus Facilities
        </h2>
        <p className="text-center text-gray-600 mb-8 z-10 relative text-lg">
          SSIET offers a wide range of modern facilities to ensure a vibrant, comfortable, and productive campus life for our students and staff.
        </p>
        
        {/* Section: Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 z-10 relative">
          {/* Facility: Library */}
          <div className="flex bg-white/80 rounded-2xl p-8 shadow-md border border-yellow-100 items-start gap-5">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-2">Central Library</h3>
              <p className="text-gray-700 text-base">
                Our well-stocked library houses thousands of books, journals, e-resources, and a digital library section. Spacious reading halls and dedicated study zones provide a perfect environment for learning and research.
              </p>
            </div>
          </div>

          {/* Facility: Laboratories */}
          <div className="flex bg-white/80 rounded-2xl p-8 shadow-md border border-red-100 items-start gap-5">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-2">State-of-the-Art Laboratories</h3>
              <p className="text-gray-700 text-base">
                Equipped with the latest technology and instruments, our labs for engineering, science, and computing provide hands-on experience and foster innovation among students.
              </p>
            </div>
          </div>

          {/* Facility: Hostel */}
          <div className="flex bg-white/80 rounded-2xl p-8 shadow-md border border-yellow-100 items-start gap-5">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-2">Hostel Accommodation</h3>
              <p className="text-gray-700 text-base">
                Separate hostels for boys and girls with modern amenities, 24/7 security, Wi-Fi, recreation rooms, and nutritious food ensure a safe and homely stay for outstation students.
              </p>
            </div>
          </div>

          {/* Facility: Sports Complex */}
          <div className="flex bg-white/80 rounded-2xl p-8 shadow-md border border-red-100 items-start gap-5">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-2">Sports & Recreation</h3>
              <p className="text-gray-700 text-base">
                Our sports complex includes cricket and football grounds, basketball and volleyball courts, indoor games, and a gymnasium, promoting physical fitness and team spirit.
              </p>
            </div>
          </div>

          {/* Facility: Auditorium */}
          <div className="flex bg-white/80 rounded-2xl p-8 shadow-md border border-yellow-100 items-start gap-5">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-2">Auditorium & Seminar Halls</h3>
              <p className="text-gray-700 text-base">
                A modern auditorium and multiple seminar halls with advanced audio-visual equipment host conferences, cultural events, and guest lectures.
              </p>
            </div>
          </div>

          {/* Facility: Cafeteria */}
          <div className="flex bg-white/80 rounded-2xl p-8 shadow-md border border-red-100 items-start gap-5">
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-2">Cafeteria</h3>
              <p className="text-gray-700 text-base">
                The campus cafeteria serves a variety of hygienic and delicious meals, snacks, and beverages at affordable prices in a lively, student-friendly atmosphere.
              </p>
            </div>
          </div>
        </div>
        
        {/* Section: Additional Facilities */}
        <div className="mt-10 bg-white/80 rounded-2xl p-8 shadow-md border border-yellow-100 z-10 relative">
          <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
            Other Facilities
          </h3>
          {/* List of Other Facilities */}
          <ul className="list-disc pl-8 text-gray-700 space-y-2 text-base">
            <li>Wi-Fi enabled campus</li>
            <li>Medical center with qualified staff</li>
            <li>Transport facility for students and staff</li>
            <li>Banking & ATM services</li>
            <li>24x7 security and CCTV surveillance</li>
            <li>Green campus with eco-friendly initiatives</li>
            <li>Stationery & photocopy center</li>
            <li>Prayer and meditation rooms</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Facilities;