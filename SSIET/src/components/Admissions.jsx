// Admissions.jsx
// This component renders the Admissions page with department info, admission process, and contact details.

const Admissions = () => {
  // Array of department objects with name and description
  const departments = [
    {
      name: "Computer Science and Engineering",
      description:
        "Offering B.Tech and M.Tech programs focused on software, hardware, and emerging technologies.",
    },
    {
      name: "Electronics Engineering",
      description:
        "Programs in electronics and embedded technologies.",
    },
    {
      name: "Mechanical Engineering",
      description:
        "Courses covering design, manufacturing, and thermal engineering.",
    },
    {
      name: "Civil Engineering",
      description:
        "Specializing in structural, environmental, and construction engineering.",
    }
  ];

  return (
    // Main container for the Admissions page with background and padding
    <div className="admissions-page min-h-screen bg-gradient-to-br from-white to-red-50 py-12 px-4">
      {/* Centered card for content */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border">
        {/* Page title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-6 text-center tracking-tight drop-shadow-lg">Admissions</h1>
        {/* Short intro/announcement */}
        <p className="text-base md:text-lg text-gray-800 mb-10 text-center">
          Admissions Open! <br />
          Join SSIET and shape your future with our top-notch engineering programs.
        </p>
        {/* Apply button */}
        <div className="flex justify-center mb-10">
          <a
            href="/apply"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full shadow transition duration-200 text-base md:text-lg"
          >
            <span className="font-bold tracking-wide">Apply for Admission</span>
          </a>
        </div>
        {/* Departments section */}
        <div className="departments-list mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-6 border-b-2 pb-2">Departments</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Render each department as a card */}
            {departments.map((dept) => (
              <li
                key={dept.name}
                className="bg-gradient-to-r from-white to-red-100 rounded-xl p-4 md:p-6 shadow hover:shadow-lg transition border"
              >
                <h3 className="text-lg md:text-xl font-bold text-black mb-2">{dept.name}</h3>
                <p className="text-gray-700">
                  {dept.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* Admission process steps */}
        <div className="admission-process mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-6 border-b-2 pb-2">Admission Process</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-800 pl-4">
            <li>
              Check eligibility criteria for your chosen department.
            </li>
            <li>
              Fill out the online application form.
            </li>
            <li>
              Submit required documents.
            </li>
            <li>
              Appear for entrance examination (if applicable).
            </li>
            <li>
              Attend counseling and complete admission formalities.
            </li>
          </ol>
        </div>
        {/* Contact information for admissions office */}
        <div className="contact-info rounded-xl p-6 md:p-8 text-center border shadow">
          <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-3">Contact Admissions Office</h2>
          <p className="text-gray-800 mb-1">
            Email:{" "}
            <a href="mailto:admissions@ssiet.edu.in" className="text-red-600 underline hover:text-black font-bold">admissions@ssiet.edu.in</a>
          </p>
          <p className="text-gray-800">
            Phone:{" "}
            <a href="tel:+911234567890" className="text-red-600 underline hover:text-black font-bold">+91-12345-67890</a>
          </p>
          <p className="mt-4 font-semibold">
            <span className="px-2 py-1 rounded">For any queries, feel free to reach out!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
