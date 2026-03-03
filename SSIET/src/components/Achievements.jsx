const Achievements = () => {
  return (
    <>
      <h2 className="text-center text-3xl sm:text-4xl lg:text-6xl font-extrabold text-red-700 mb-8">Achievements</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/80 rounded-xl shadow-md p-6 flex flex-col items-start sm:items-center text-left sm:text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
            Students
          </h3>
          <p className="text-3xl sm:text-4xl font-bold text-red-600">
            11,000+
          </p>
        </div>

        <div
          className="bg-white/80 rounded-xl shadow-md p-6 flex flex-col items-start sm:items-center text-left sm:text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
            Courses
          </h3>
          <p className="text-3xl sm:text-4xl font-bold text-red-600">
            27+
          </p>
        </div>

        <div
          className="bg-white/80 rounded-xl shadow-md p-6 flex flex-col items-start sm:items-center text-left sm:text-center">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
            Alumni
          </h3>
          <p className="text-3xl sm:text-4xl font-bold text-red-600">
            25,000+
          </p>
        </div>
      </div>
    </>
  )
}

export default Achievements;
