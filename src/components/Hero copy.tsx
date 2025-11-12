import React from 'react';

// Replace with your chosen background image URL or import
const backgroundImageUrl = '/hero.jpg';

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-24 text-center h-screen"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* dark overlay */}

      <div
        className="absolute z-10 left-0 right-0 max-w-4xl mx-auto px-8 h-auto bg-emerald-800 rounded-xl top-[100%] transform -translate-y-1/2 flex gap-4 items-center justify-center text-white"
      >
        <p className="uppercase tracking-widest text-sm mb-1 flex-1 p-4">Since 2009</p>
        
        <div className="text-[3rem] font-extrabold  flex-1 bg-amber-500 p-4">15+
        <p className="text-2xl font-semibold mb-1">Years of Experience</p></div>
        <p className="text-base font-light text-left max-w-2xl flex-2 p-4">
          For over 15 years, we’ve been redefining spaces with bespoke design solutions — from sophisticated interiors and striking exteriors to serene landscapes. Every project is a blend of creativity and precision, crafted to reflect luxury, harmony, and timeless elegance.
        </p>
      </div>

    </section>

  );
}

export default Hero;
