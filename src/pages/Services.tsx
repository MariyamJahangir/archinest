import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Services() {
    // const sectionRef = useRef(null);

    // const { scrollYProgress } = useScroll({
    //     target: sectionRef,
    //     offset: ["start end", "end start"],
    // });

    // const x = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <div
            className="relative bg-cover bg-center bg-fixed"
            style={{
                backgroundImage:
                    "url('https://i.pinimg.com/1200x/ab/16/a8/ab16a8025aadd21e713cf2b18a4727cc.jpg')",
            }}
        >
            {/* Top Banner Section */}
            <section
                className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center drop-shadow-xl"
                >
                    What We Offer
                </motion.h1>
            </section>

    
            <section
                id="interiors"
                className="relative flex items-center justify-end min-h-[80vh] py-12 bg-black overflow-hidden bg-fixed"
                style={{
                    backgroundImage:
                        "url('/sec2bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay for dark effect */}
                <div className="absolute inset-0 bg-white bg-opacity-20 z-0" />

                {/* Glassmorphism Card */}
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 w-full max-w-md backdrop-blur-sm bg-black/5 rounded-3xl shadow-2xl p-8 border border-black/20">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">
                        Crafted with Passion,<br />Made for You!!
                    </h2>
                    <p className="text-md text-black/75 font-medium leading-relaxed">
                        Have a unique idea or a special project in mind? Archinest is excited to collaborate with you on custom designs.
                        Contact us today to embark on a furniture journey that transcends ordinary living spaces...
                    </p>
                </div>

                {/* Decorative/Optional: main interior image or artwork/sofa if applicable */}
                <div className="flex-1 flex justify-end z-10">
                    <img
                        src="https://i.pinimg.com/1200x/b0/f2/d5/b0f2d50d7b704285ba51643b29e64ce4.jpg"
                        alt="Interior Design"
                        className="object-cover rounded-lg shadow-xl w-[60%] max-w-2xl max-h-[90vh]"
                    />
                </div>
            </section>




            <section
                id="exteriors"
                className="relative flex items-center justify-end min-h-[80vh] py-12 bg-black/30 overflow-hidden"
                // style={{
                //     backgroundImage:
                //         "url('https://i.pinimg.com/1200x/7e/e2/56/7ee2569fb6fe306ecaad1d18c78ea362.jpg')",
                //     backgroundSize: "cover",
                //     backgroundPosition: "center",
                // }}
            >
                {/* Overlay for dark effect */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-0" /> */}

                {/* Glassmorphism Card */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 w-full max-w-md backdrop-blur-md bg-white/10 rounded-3xl shadow-2xl p-8 border border-white/30">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
                        Crafted with Passion,<br />Made for You!!
                    </h2>
                    <p className="text-md text-white/75 font-medium leading-relaxed">
                        Have a unique idea or a special project in mind? Archinest Associate is excited to collaborate with you on custom designs.
                        Contact us today to embark on a furniture journey that transcends ordinary living spaces...
                    </p>
                </div>

                {/* Decorative/Optional: main interior image or artwork/sofa if applicable */}
                <div className="flex-1 flex justify-start z-10">
                    <img
                        src="https://i.pinimg.com/1200x/7e/e2/56/7ee2569fb6fe306ecaad1d18c78ea362.jpg"
                        alt="Interior Design"
                        className="object-cover rounded-lg shadow-xl w-[60%] max-w-2xl max-h-[90vh]"
                    />
                </div>
            </section>


       

            <section
                id="landscaping"
                className="relative flex items-center justify-end min-h-[80vh] py-12 bg-black overflow-hidden bg-fixed"
                style={{
                    backgroundImage:
                        "url('/sec2bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay for dark effect */}
                <div className="absolute inset-0 bg-white bg-opacity-20 z-0" />

                {/* Glassmorphism Card */}
                <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 w-full max-w-md backdrop-blur-sm bg-black/5 rounded-3xl shadow-2xl p-8 border border-black/20">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">
                        Crafted with Passion,<br />Made for You!!
                    </h2>
                    <p className="text-md text-black/75 font-medium leading-relaxed">
                        Have a unique idea or a special project in mind? JANO ENTERPRISE is excited to collaborate with you on custom designs.
                        Contact us today to embark on a furniture journey that transcends ordinary living spaces...
                    </p>
                </div>

                {/* Decorative/Optional: main interior image or artwork/sofa if applicable */}
                <div className="flex-1 flex justify-end z-10">
                    <img
                        src="https://i.pinimg.com/1200x/d2/97/ac/d297ac33f619089c1647920a99dc4db7.jpg"
                        alt="Interior Design"
                        className="object-cover rounded-lg shadow-xl w-[60%] max-w-2xl max-h-[90vh]"
                    />
                </div>
            </section>


        </div>
    );
}

export default Services;
