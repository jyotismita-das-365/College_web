// Array of gallery images (image src, alt text, caption)
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    alt: "Campus Main Building",
    caption: "Main Building"
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    alt: "Library",
    caption: "Central Library"
  },
  {
    src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    alt: "Laboratory",
    caption: "State-of-the-Art Labs"
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    alt: "Sports Ground",
    caption: "Sports Ground"
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Cultural Fest",
    caption: "Cultural Fest"
  },
  {
    src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    alt: "Hostel",
    caption: "Student Hostel"
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    alt: "Seminar Hall",
    caption: "Seminar Hall"
  },
  {
    src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    alt: "Campus Garden",
    caption: "Campus Garden"
  }
];

const Gallery = () => {
  return (
    <>
      {/* Main Gallery Section Container */}
      <div className="max-w-6xl mx-auto mt-14 mb-16 p-10 bg-gradient-to-br from-red-50 via-white to-yellow-50 rounded-3xl shadow-2xl border-2 border-red-200 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full opacity-30 z-0"></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-yellow-100 rounded-full opacity-20 z-0"></div>
        {/* Section: Heading */}
        <h2 className="text-4xl font-extrabold text-red-700 mb-2 text-center drop-shadow-lg tracking-wide z-10 relative">
          Gallery
        </h2>
        {/* Section: Description */}
        <p className="text-center text-gray-600 mb-8 z-10 relative text-lg">
          Explore moments from our vibrant campus life, events, and facilities.
        </p>
        {/* Section: Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 z-10 relative">
          {galleryImages.map((img, idx) => (
            // Gallery Image Card
            <div
              key={idx}
              className="bg-white/80 rounded-2xl shadow-md border border-red-100 overflow-hidden flex flex-col items-center transition-transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              {/* Caption */}
              <div className="p-4 w-full text-center">
                <span className="text-base font-semibold text-red-700">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;