import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, easeInOut, easeIn } from 'framer-motion';

// Replace with your actual image imports or URL paths
const images = [
  {
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1400",
    title: "Interior",
    content: "Stylish interiors designed for comfort and aesthetics."
  },
  {
    url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?_gl=1*1uzshiu*_ga*NTk0NjY3MDg2LjE3NDg5MTIyMjE.*_ga_8JE65Q40S6*czE3NjI4MDIwNzQkbzUkZzEkdDE3NjI4MDIxNzEkajU5JGwwJGgw",
    title: "Exterior",
    content: "Striking exteriors that blend innovation and elegance."
  },
  {
    url: "https://i.pinimg.com/1200x/69/b9/fc/69b9fc6e170970362b9d6aa9d41e516e.jpg",
    title: "Landscape",
    content: "Serene landscapes for tranquil outdoor experiences."
  }
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Set background based on active image, or default if none active
  const backgroundImage = activeIndex !== null ? images[activeIndex].url : "https://i.pinimg.com/1200x/47/a8/0e/47a80e6a44f341e08bdc3074d0900235.jpg";

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'], // Fade from start to end of section
  });

  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0], { ease: easeInOut, });


  return (
    <section ref={sectionRef}
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-24 text-center h-screen transition-all duration-500"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.1 }} // Start zoomed in
        animate={{ scale: 1 }}   // Animate to normal size
        transition={{ duration: 1.5, ease: "easeOut" }} // Smooth zoom out
      />
      <motion.h1
        className="absolute z-20 left-0 right-0 top-[45%] transform -translate-y-1/2 text-6xl font-semibold [text-shadow:_0_3px_12px_rgba(0,0,0,0.7)]"
        style={{ opacity: useTransform(scrollYProgress, [0.5, 0.8], [1, 0], { ease: easeInOut, }) }}
      >
        Welcome to Archinest
      </motion.h1>
      <div className="absolute left-0 right-0 top-[95%] transform -translate-y-1/2 z-10 flex justify-center gap-8 items-center h-full">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className={`group relative cursor-pointer rounded-3xl shadow-3xl border backdrop-blur-xl overflow-hidden transition-all duration-500
              ${activeIndex === idx ? "w-[400px] h-[200px]  z-20" : "w-[200px] h-[200px] opacity-90"}
              flex-shrink-0 shadow-lg`}
            onClick={() => setActiveIndex(idx)}
            style={{ backgroundImage: `url(${img.url})`, backgroundSize: "cover", backgroundPosition: "center" }}
          initial={{ x: idx === 0 ? -600 : idx === 2 ? 600 : 0, opacity: 0 }} // Left image from left, right images from right
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: easeIn, delay: 0.5 }}
          
          
          
          >
            {/* Overlay Content */}
            <div
              className={`
                absolute inset-0 flex flex-col justify-center items-center bg-black transition-opacity duration-500 
                ${activeIndex === idx ? "bg-opacity-60 opacity-100" : "bg-opacity-0 opacity-0 group-hover:opacity-90 group-hover:bg-opacity-20"}
              `}
            >
              {/* Show either title only, or title + content if active */}
              <h2 className="text-2xl font-extrabold mb-2">{img.title}</h2>
              {activeIndex === idx && (
                <p className="text-lg font-medium px-6">{img.content}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
