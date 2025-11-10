import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Interiors() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -300]);


    return (
        <>
            {/* Top Banner Section */}
            <section
                className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/b0/f2/d5/b0f2d50d7b704285ba51643b29e64ce4.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center drop-shadow-xl">
                    Interior Design
                </h1>
            </section>

            {/* Content Section */}
            <section 
            ref={sectionRef}
            className="relative flex justify-center items-center min-h-[80vh] py-12 bg-gray-100 overflow-hidden">
                {/* Animated Background */}
                <motion.div
                    style={{
                        x,
                        backgroundImage:
                            "url('https://i.pinimg.com/1200x/11/06/0a/11060a71ad71a57e2c00988d5c28f399.jpg')",
                    }}
                    className="absolute top-0 bottom-0 w-[145%] h-full bg-cover bg-center z-0"
                />

                {/* Foreground Card */}
                <div className="relative z-10 bg-white/90 rounded-2xl shadow-2xl flex max-w-5xl w-full overflow-hidden min-h-[340px] max-h-[500px]">
                    
                    <div className="basis-1/2 p-10">
                        <img
                            src="https://i.pinimg.com/1200x/b0/f2/d5/b0f2d50d7b704285ba51643b29e64ce4.jpg"
                            alt="Interior Design"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                    
                    <div className="basis-1/2 flex flex-col justify-center p-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                            Interiors That Reflect Your Story
                        </h2>
                        <p className="text-lg text-gray-800 mb-8">
                            Our interior design philosophy blends creativity with functionality to create spaces that truly feel like home. From elegant residential interiors to modern commercial environments, we focus on every detail — color, texture, light, and form — to bring harmony and character into each project. With thoughtful design solutions and personalized touches, we transform ordinary spaces into timeless expressions of your lifestyle and vision.
                        </p>
                    </div>
                    
                </div>
            </section>
        </>
    );
}

export default Interiors;
