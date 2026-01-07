import { useState } from "react";

const Achievements = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      <h2
        id="achievements-title"
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-700 mb-8"
      >
        Achievements
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md p-6 flex flex-col items-start sm:items-center text-left sm:text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Students
          </h3>
          <p className="text-3xl sm:text-4xl font-bold text-red-600 dark:text-red-400">
            11,000+
          </p>
        </div>

        <div
          className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md p-6 flex flex-col items-start sm:items-center text-left sm:text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Courses
          </h3>
          <p className="text-3xl sm:text-4xl font-bold text-red-600 dark:text-red-400">
            27+
          </p>
        </div>

        <div
          className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-md p-6 flex flex-col items-start sm:items-center text-left sm:text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
            Alumni
          </h3>
          <p className="text-3xl sm:text-4xl font-bold text-red-600">
            25,000+
          </p>
        </div>
      </div>
    </section>
  )
}

export default Achievements;
