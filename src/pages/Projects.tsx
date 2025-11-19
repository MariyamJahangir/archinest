import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { projects } from "../data/projectsData";

const PROJECT_TYPES = ["Residential", "Interior"];

function Projects() {

    const [activeType, setActiveType] = useState(PROJECT_TYPES[0]);

    return (
        <>
            {/* Top Banner Section */}
            <section
                className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/3f/6a/80/3f6a80457a718bfb3c31bc0d3b277ed7.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center drop-shadow-xl">
                    Projects
                </h1>
            </section>


            <section className="relative bg-gray-200 min-h-screen py-10 px-2 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url('/sec2bg.jpg')` }}>

                <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none" />
                <div className="relative z-10">
                    {/* Filter/toggle buttons */}
                   <div className="flex gap-4 mb-8 justify-center">
  {PROJECT_TYPES.map((type) => (
    <button
      key={type}
      onClick={() => setActiveType(type)}
      className={`px-7 py-2.5 rounded-full border transition-all duration-300
        ${
          activeType === type
            ? "bg-gray-300 text-gray-900 border-gray-500 shadow-md scale-105"
            : "bg-gray-300/60 text-gray-900 border-gray-400 hover:bg-gray-300"
        }
      `}
    >
      {type}
    </button>
  ))}
</div>

                    {/* Card grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
                        {projects
                            .filter((p) => p.type === activeType)
                            .map((proj, i) => (
                                <div
                                    key={proj.title}
                                    className="backdrop-blur-sm bg-black/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-black/20"
                                // style={{ boxShadow: "0 4px 32px rgba(30,30,40,0.14)" }}
                                >
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        className="h-56 w-full object-cover"
                                    />
                                    <div className="p-4 grow flex flex-col justify-between">
                                        <span className="text-gray-900 text-base font-semibold">{proj.title}</span>
                                        <Link
                                            to={`/project/${proj.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="inline-block border border-gray-500 px-6 py-2 text-gray-900 rounded hover:bg-gray-900 hover:text-white transition self-end mt-2"
                                        >
                                            View Project
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    </div>

                </div>
            </section>




        </>
    );
}

export default Projects;
