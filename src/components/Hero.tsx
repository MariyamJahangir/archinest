import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, easeInOut, easeIn } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1400",
    title: "Interior",
    content: "Stylish interiors designed for comfort and aesthetics.",
  },
  {
    url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=format&fit=crop&q=80&w=1400",
    title: "Exterior",
    content: "Striking exteriors that blend innovation and elegance.",
  },
  {
    url: "https://i.pinimg.com/1200x/69/b9/fc/69b9fc6e170970362b9d6aa9d41e516e.jpg",
    title: "Landscape",
    content: "Serene landscapes for tranquil outdoor experiences.",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const backgroundImage =
    activeIndex !== null
      ? images[activeIndex].url
      : "https://i.pinimg.com/1200x/47/a8/0e/47a80e6a44f341e08bdc3074d0900235.jpg";

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 text-center h-[100vh] transition-all duration-500"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Smooth Zoom Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Heading */}
      <motion.h1
        className="absolute z-20 left-0 right-0 top-[40%] transform -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 text-white [text-shadow:_0_3px_12px_rgba(0,0,0,0.7)]"
        style={{
          opacity: useTransform(scrollYProgress, [0.5, 0.8], [1, 0], { ease: easeInOut }),
        }}
      >
        Welcome to Archinest
      </motion.h1>

      {/* Image Cards */}
      <div
        className="
          absolute left-0 right-0 bottom-[-8%] sm:bottom-[-14%] md:bottom-[-10%] z-20 
          flex flex-wrap justify-center items-center gap-4
          px-4 md:px-8
        "
      >
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className={`
              group relative cursor-pointer rounded-3xl overflow-hidden 
              transition-all duration-500 flex-shrink-0 
              bg-center bg-cover shadow-xl backdrop-blur-xl
              border border-white/20
              ${activeIndex === idx
                ? "w-[85vw] sm:w-[400px] h-[220px] z-20"
                : "w-[40vw] sm:w-[200px] h-[160px] opacity-90"}
            `}
            onClick={() => setActiveIndex(idx)}
            style={{
              backgroundImage: `url(${img.url})`,
            }}
            initial={{
              x: idx === 0 ? -300 : idx === 2 ? 300 : 0,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: easeIn, delay: 0.4 }}
          >
            {/* Overlay */}
            <div
              className={`
                absolute inset-0 flex flex-col justify-center items-center 
                text-center px-3 sm:px-6 transition-opacity duration-500 
                ${activeIndex === idx
                  ? "bg-black/60 opacity-100"
                  : "bg-black/0 opacity-0 group-hover:bg-black/30 group-hover:opacity-100"}
              `}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2">{img.title}</h2>
              {activeIndex === idx && (
                <p className="text-sm sm:text-base font-medium">{img.content}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
