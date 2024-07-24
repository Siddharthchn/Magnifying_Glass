import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MagnifyingGlass = () => {
  const magnifyingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scale = 1 - scrollY / 1000; // Adjust the scale factor as needed
      gsap.to(textRef.current, { scale: Math.max(scale, 0.5) }); // Ensure the scale does not go below 0.5
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-10 right-10 z-50" ref={magnifyingRef}>
      <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center border-4 border-gray-400 shadow-lg">
        <span className="text-2xl" ref={textRef}>
          Zoom Text
        </span>
      </div>
    </div>
  );
};

export default MagnifyingGlass;
