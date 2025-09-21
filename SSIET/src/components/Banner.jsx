import banner1 from '../assets/banner/banner1.jpg';
import banner2 from '../assets/banner/banner2.jpg';
import banner3 from '../assets/banner/banner3.jpg';
import { Circle, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const Banner = () => {
  const banners = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // Function to start the interval
  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000); // 3 seconds
  };

  // Auto-scroll effect with 3s gap
  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, []);

  // Reset interval on manual navigation
  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  const goLeft = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
    resetInterval();
  };

  const goRight = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
    resetInterval();
  };

  const goTo = (idx) => {
    setCurrent(idx);
    resetInterval();
  };

  return (
    <div className="relative w-full">
      <img
        src={banners[current]}
        alt={`Banner ${current + 1}`}
        className="w-full h-96 object-cover transition-all duration-700"
      />
      {/* Left Arrow */}
      <button
        onClick={goLeft}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white shadow"
        aria-label="Previous Banner"
      >
        <ChevronLeft size={28} />
      </button>
      {/* Right Arrow */}
      <button
        onClick={goRight}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 rounded-full p-1 hover:bg-white shadow"
        aria-label="Next Banner"
      >
        <ChevronRight size={28} />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="focus:outline-none"
          >
            <Circle
              size={20}
              className={idx === current ? 'text-blue-500 fill-blue-500' : 'text-gray-400'}
              fill={idx === current ? 'currentColor' : 'none'}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Banner