import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectDetails: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();

  const project = projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === title
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  if (!project) {
    return (
      <div className="p-10 pt-[120px] text-center text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
        <button
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:scale-105 transition"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const images = project.images ?? [project.image];
  const mainImage = images[0];

  return (
    <div className="max-w-6xl mx-auto p-6 pt-[120px]">
      {/* Top Main Image with overlay */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-2xl shadow-lg"
      >
        <img
          src={mainImage}
          alt={project.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <h1 className="absolute bottom-6 left-6 text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          {project.title}
        </h1>
      </motion.div>

      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-8 text-gray-700 leading-relaxed"
      >
        <p className="text-lg mb-6">{project.description}</p>
      </motion.div>

      {/* Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6"
      >
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`${project.title} ${i + 1}`}
            className="h-32 w-full object-cover rounded-lg cursor-pointer hover:scale-105 hover:shadow-xl transition"
            onClick={() => {
              setCurrIndex(i);
              setLightboxOpen(true);
            }}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          >
            {/* Close */}
            <button
              className="absolute top-8 right-8 text-white bg-gray-800/70 hover:bg-gray-900/80 rounded-full p-3 text-2xl"
              onClick={() => setLightboxOpen(false)}
            >
              <FaTimes />
            </button>

            {/* Prev */}
            <button
              className="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-gray-800/70 hover:bg-gray-900/80 rounded-full p-3 text-2xl"
              onClick={() => setCurrIndex((currIndex - 1 + images.length) % images.length)}
            >
              <FaChevronLeft />
            </button>

            {/* Image */}
            <motion.img
              key={currIndex}
              src={images[currIndex]}
              alt="Gallery"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
            />

            {/* Next */}
            <button
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-gray-800/70 hover:bg-gray-900/80 rounded-full p-3 text-2xl"
              onClick={() => setCurrIndex((currIndex + 1) % images.length)}
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="mt-12 px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg shadow-lg hover:scale-105 transition"
        whileHover={{ scale: 1.05 }}
      >
        Back
      </motion.button>
    </div>
  );
};

export default ProjectDetails;
