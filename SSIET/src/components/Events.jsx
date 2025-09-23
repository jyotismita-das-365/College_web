// Events data array section
const eventsData = [
  {
    title: "Annual Tech Fest",
    date: "March 15, 2024",
    description:
      "A celebration of innovation and technology featuring coding competitions, robotics, paper presentations, and guest lectures from industry experts.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cultural Extravaganza",
    date: "April 10, 2024",
    description:
      "A vibrant showcase of music, dance, drama, and art. Students from all departments participate and display their talents.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Alumni Meet",
    date: "May 5, 2024",
    description:
      "A special event to reconnect with our esteemed alumni, share experiences, and foster networking between past and present students.",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Sports Day",
    date: "June 20, 2024",
    description:
      "A day dedicated to athleticism and teamwork, featuring track and field events, team sports, and fun games for all.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Workshop: AI & Machine Learning",
    date: "July 12, 2024",
    description:
      "Hands-on workshop introducing students to the fundamentals of Artificial Intelligence and Machine Learning, led by industry professionals.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
];

// Events component section
const Events = () => {
  return (
    <>
      {/* Main Events Section Container */}
      <div className="max-w-6xl mx-auto mt-14 mb-16 p-10 bg-gradient-to-br from-yellow-50 via-white to-red-50 rounded-3xl shadow-2xl border-2 border-yellow-200 relative overflow-hidden">
        {/* Decorative background shapes section */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-100 rounded-full opacity-30 z-0"></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-red-100 rounded-full opacity-20 z-0"></div>
        {/* Section: Heading */}
        <h2 className="text-4xl font-extrabold text-yellow-700 mb-2 text-center drop-shadow-lg tracking-wide z-10 relative">
          Events & Activities
        </h2>
        {/* Section: Description */}
        <p className="text-center text-gray-600 mb-8 z-10 relative text-lg">
          Stay updated with the latest happenings, workshops, and celebrations at SSIET. Join us in making memories and learning beyond the classroom!
        </p>
        {/* Section: Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10 relative">
          {eventsData.map((event, idx) => (
            // Event Card section
            <div
              key={idx}
              className="bg-white/80 rounded-2xl shadow-md border border-yellow-100 overflow-hidden flex flex-col transition-transform hover:scale-105"
            >
              {/* Event Image section */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              {/* Event Content section */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-yellow-700 mb-1">{event.title}</h3>
                <span className="text-sm text-gray-500 mb-2">{event.date}</span>
                <p className="text-gray-700 text-base flex-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;