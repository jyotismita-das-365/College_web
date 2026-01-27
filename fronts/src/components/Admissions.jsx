import React, { useState } from "react";

// Admissions component for handling admission form and submission
const Admissions = () => {
  {/*  State Section */}
  // State for form fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  // State to track if form is submitted
  const [submitted, setSubmitted] = useState(false);

  {/* Handlers Section */}
  // Handle input changes for all form fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  {/* Render Section */}
  return (
    // Main container for Admissions section
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg pt-20">
      {/* Section Title */}
      <h2 className="text-2xl font-bold mb-2">Admissions</h2>
      {/* Section Description */}
      <p className="mb-6 text-gray-700">
        Welcome to SSIET Admissions! Please fill out the form below to apply for your desired course.
      </p>
      {/* Conditional Rendering Section */}
      {submitted ? (
        <>
          {/* Thank You Message Section */}
          <div className="text-green-600 mt-5">
            <h3 className="text-xl font-semibold">Thank you for your application!</h3>
            <p>We will contact you soon.</p>
          </div>
        </>
      ) : (
        <>
          {/* Admissions Form Section */}
          <form onSubmit={handleSubmit}>
            {/* Full Name Field Section */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Full Name:
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>
            </div>
            {/* Email Field Section */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Email:
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>
            </div>
            {/* Phone Field Section */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>
            </div>
            {/* Course Selection Field Section */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Course Interested:
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select a course</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </label>
            </div>

            {/* Branch selection field section */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Branch:
                <select
                  name="branch"
                  value={form.branch}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select a branch</option>
                  <option value="cse">CSE</option>
                  <option value="civil">Civil</option>
                  <option value="me">ME</option>
                  <option value="ee">EE</option>
                </select>
              </label>
            </div>

            {/* Message Field Section */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Message:
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </label>
            </div>
            {/* Submit Button Section */}
            <button
              type="submit"
              className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
            >
              Submit Application
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Admissions;