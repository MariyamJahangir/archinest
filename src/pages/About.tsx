import { useState } from 'react';



const slides = [
    {
        title: "VISION",
        content:
            "To consistently deliver eco-friendly world class finishes at each point of our designing, execute and complete all the projects in a manner to create an ambience that will echo the desires of our clients’ hearts. "
    },
    {
        title: "MISSION",
        content:
            "Our mission is to transform ideas into elegant environments, providing creative solutions that are sustainable and client-focused. We believe in collaborative design practices, delivering personalized experiences that blend functionality and aesthetic excellence for every project."
    }
];

function About() {


    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);


    return (
        <>
            <section
                className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/2d/82/fa/2d82faf12aab64c7b2f1a87078417d82.jpg')", // Change path if needed, or use your attached image filename
                }}
            >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                {/* Centered Heading */}
                <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center drop-shadow-xl">
                    Who We Are
                </h1>
            </section>

            <section className="w-full mx-auto px-10 py-16 items-center overflow-hidden relative bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/sec2bg.jpg')", // Change path if needed, or use your attached image filename
                }}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-xs z-5 pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Left - Text content */}
                    <div className="flex-1 p-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 leading-tight text-emerald-800">
                            Crafting Spaces,<br />
                            <span className="text-[#19B3B1]">Inspiring Connections</span>
                        </h1>
                        <p className="text-lg text-gray-800 mt-8 mb-2">
                            Our studio is guided by a commitment to meaningful design that elevates everyday living. Driven by curiosity and collaboration, we create environments where aesthetics and functionality are in harmony. We approach every project as an opportunity to learn, innovate, and make a positive impact for our clients and communities.
                        </p>
                    </div>

                    {/* Right - Image card */}
                    <div className="flex-1 max-w-xl w-full">
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                            <img
                                src="https://i.pinimg.com/1200x/b2/86/e9/b286e921900c2e1c5b6430a0dea8cadc.jpg" // Use your image path
                                alt="Design Studio Team"
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full px-6 py-6 bg-black/60 text-white">
                                <div className="font-extrabold text-xl mb-1">
                                    Dedicated to Design Excellence
                                </div>
                                <div className="font-medium text-base">
                                    Collaborative & Innovative
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="relative z-10 max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center md:items-start gap-8">

                    {/* Left - Image card */}
                    <div className="flex-1 max-w-xl w-full">
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                            <img
                                src="https://i.pinimg.com/1200x/56/40/04/5640040aa9884168e6573b31e933aaa8.jpg" // Use your image path
                                alt="Design Studio Team"
                                className="w-full h-[400px] object-cover"
                            />
                            {/* <div className="absolute bottom-0 left-0 w-full px-6 py-6 bg-black/60 text-white">
                                <div className="font-extrabold text-xl mb-1">
                                    Dedicated to Design Excellence
                                </div>
                                <div className="font-medium text-base">
                                    Collaborative & Innovative
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* Right - Text content */}
                    <div className="flex-1 p-4 ">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 leading-tight">
                            Transforming <br />
                            <span className="text-amber-500">Vision Into Value</span>
                        </h1>
                        <p className="text-lg text-gray-800 mt-8 mb-2">
                            We believe every space tells a story — one that inspires, comforts, and connects.
                            With a blend of creativity, precision, and purpose, our team transforms ideas into timeless designs.
                            From concept to completion, we craft environments that reflect individuality, enhance well-being, and celebrate the art of living beautifully.
                        </p>
                    </div>



                </div>




            </section>


            <section
                className="relative w-full min-h-[600px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://i.pinimg.com/1200x/a9/2f/49/a92f49ba72809cef7d0f18cac20b333a.jpg')" // Replace with your actual image path
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                {/* Carousel Card */}
                <div className='flex flex-row gap-3 justify-center items-center p-20'>
                <div className="relative z-10 w-full h-[300px] max-w-2xl mx-3 bg-emerald-950/70 text-white rounded-xl shadow-2xl px-8 py-10 flex flex-col items-center">
                    <h2 className="text-4xl font-extrabold mb-4 text-center">{slides[index+1].title}</h2>
                    <p className="text-lg font-medium mb-8 text-center">{slides[index+1].content}</p>
                   
                </div>
                <div className="relative z-10 w-full h-[300px] max-w-2xl mx-3 bg-emerald-950/70 text-white rounded-xl shadow-2xl px-8 py-10 flex flex-col items-center">
                    <h2 className="text-4xl font-extrabold mb-4 text-center">{slides[index].title}</h2>
                    <p className="text-lg font-medium mb-8 text-center">{slides[index].content}</p>
                   
                </div>
                </div>
            </section>

            <section
                className="min-h-screen w-full flex flex-col justify-center items-center relative bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('https://i.pinimg.com/1200x/93/18/12/931812d11428b647890a1a61916430b0.jpg')" }} // Use your static or imported image
            >
                {/* Overlay for background dimming */}
                <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
                {/* Centered content */}
                <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center">
                    {/* Heading & description */}
                    <div className="bg-black bg-opacity-50 rounded-xl px-8 py-6 mb-6 mt-12 w-full">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
                            Hear From Our Happy Clients
                        </h2>
                        <p className="text-white text-lg text-center">
                            Our clients love our services! Here’s what they have to say about their experience working with us.
                            We take pride in delivering exceptional quality and creating lasting relationships with our customers.
                            Your satisfaction is our top priority, and we strive to exceed expectations with every project.
                        </p>
                    </div>
                    {/* Videos carousel grid */}
                    <div className="flex items-center w-full justify-center relative gap-8 mt-4 mb-6">
                        {/* Left arrow */}
                        {/* <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 rounded-full text-3xl bg-black/60 text-white p-2 hover:bg-black/80 transition">
                            &#8592;
                        </button> */}
                        <div className="flex gap-8 w-full justify-center">
                            {/* Video 1 */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-md w-[60%]">
                                <video controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline className="w-full h-[280px] object-cover bg-black">
                                    <source src="/client project kallambalam out new.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            {/* Video 2 */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-xl max-w-md w-[60%]">
                                <video
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-[280px] object-cover bg-black"
                                >
                                    <source src="/House_Interior_Design.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        {/* Right arrow */}
                        {/* <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 rounded-full text-3xl bg-black/60 text-white p-2 hover:bg-black/80 transition">
                            &#8594;
                        </button> */}
                    </div>
                    {/* Visit Channel Button */}
                    {/* <div className="mt-6 mb-12">
                        <a
                            href="https://youtube.com/@yourchannel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white rounded-lg text-black font-semibold shadow hover:bg-gray-200 transition text-lg"
                        >
                            Visit our Channel
                        </a>
                    </div> */}
                </div>
            </section>



        </>
    );
}
export default About;
