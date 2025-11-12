import { useState } from "react";

const slides = [
    {
        title: "VISION",
        content:
            "To consistently deliver eco-friendly world class finishes at each point of our designing, execute and complete all the projects in a manner to create an ambience that will echo the desires of our clients’ hearts.",
    },
    {
        title: "MISSION",
        content:
            "Our mission is to transform ideas into elegant environments, providing creative solutions that are sustainable and client-focused. We believe in collaborative design practices, delivering personalized experiences that blend functionality and aesthetic excellence for every project.",
    },
];

function About() {
    const [index] = useState(0);

    return (
        <>
            {/* Hero Section */}
            <section
                className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/2d/82/fa/2d82faf12aab64c7b2f1a87078417d82.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center drop-shadow-xl px-4">
                    Who We Are
                </h1>
            </section>

            {/* About Sections */}
            <section
                className="relative w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-16 bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: "url('/sec2bg.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-xs"></div>

                {/* First Block */}
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                    <div className="flex-1 p-4 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-emerald-800">
                            Crafting Spaces,<br />
                            <span className="text-[#19B3B1]">Inspiring Connections</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-800 mt-4">
                            Our studio is guided by a commitment to meaningful design that
                            elevates everyday living. Driven by curiosity and collaboration,
                            we create environments where aesthetics and functionality are in
                            harmony. We approach every project as an opportunity to learn,
                            innovate, and make a positive impact for our clients and
                            communities.
                        </p>
                    </div>

                    <div className="flex-1 w-full max-w-md md:max-w-xl">
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                            <img
                                src="https://i.pinimg.com/1200x/b2/86/e9/b286e921900c2e1c5b6430a0dea8cadc.jpg"
                                alt="Design Studio Team"
                                className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 py-4 sm:py-6 bg-black/60 text-white text-center sm:text-left">
                                <div className="font-extrabold text-lg sm:text-xl mb-1">
                                    Dedicated to Design Excellence
                                </div>
                                <div className="font-medium text-sm sm:text-base">
                                    Collaborative & Innovative
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Block */}
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
                    <div className="flex-1 p-4 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                            Transforming <br />
                            <span className="text-amber-500">Vision Into Value</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-800 mt-4">
                            We believe every space tells a story — one that inspires,
                            comforts, and connects. With a blend of creativity, precision, and
                            purpose, our team transforms ideas into timeless designs. From
                            concept to completion, we craft environments that reflect
                            individuality, enhance well-being, and celebrate the art of living
                            beautifully.
                        </p>
                    </div>
                    <div className="flex-1 w-full max-w-md md:max-w-xl">
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                            <img
                                src="https://i.pinimg.com/1200x/56/40/04/5640040aa9884168e6573b31e933aaa8.jpg"
                                alt="Design Studio"
                                className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section
                className="relative w-full py-12 sm:py-16 flex flex-col md:flex-row items-center justify-center gap-6 bg-cover bg-center px-4 sm:px-6 md:px-10"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/a9/2f/49/a92f49ba72809cef7d0f18cac20b333a.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 flex flex-col sm:flex-row flex-wrap justify-center gap-6 w-full max-w-6xl">
                    {slides.map((s, i) => (
                        <div
                            key={i}
                            className="flex-1 min-w-[280px] sm:min-w-[320px] max-w-lg bg-emerald-950/70 text-white rounded-xl shadow-2xl px-6 sm:px-8 py-8 flex flex-col items-center text-center"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
                                {s.title}
                            </h2>
                            <p className="text-base sm:text-lg font-medium leading-relaxed">
                                {s.content}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Client Testimonials Section */}
            <section
                className="relative min-h-screen w-full flex flex-col justify-center items-center bg-fixed bg-cover bg-center px-4 sm:px-8"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/93/18/12/931812d11428b647890a1a61916430b0.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

                <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center">
                    <div className="bg-black bg-opacity-50 rounded-xl px-6 sm:px-8 py-6 mb-6 mt-12 w-full">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
                            Hear From Our Happy Clients
                        </h2>
                        <p className="text-white text-base sm:text-lg text-center">
                            Our clients love our services! Here’s what they have to say about
                            their experience working with us. We take pride in delivering
                            exceptional quality and creating lasting relationships with our
                            customers.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4 mb-6 w-full">
                        <div className="bg-white rounded-xl overflow-hidden shadow-xl w-full sm:w-1/2">
                            <video
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-[220px] sm:h-[280px] object-cover bg-black"
                            >
                                <source src="/House_Interior_Design.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="bg-white rounded-xl overflow-hidden shadow-xl w-full sm:w-1/2">
                            <video
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-[220px] sm:h-[280px] object-cover bg-black"
                            >
                                <source src="/House_Interior_Design.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
