import { useState } from 'react';

import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
// import ThreeDShowcase from '../components/ThreeDShowcase';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaQuoteLeft } from "react-icons/fa";

import { projects } from "../data/projectsData";
import ContactForm from '../components/ContactForm';



interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  notRobot: boolean;
}


function Home() {


  // Get the 6 most recently added, reversed (optional if you want newest first)
  const RECENT_PROJECTS = projects.slice(-6).reverse();
  // Split into two arrays of 3 each for the two rows
  const row1 = RECENT_PROJECTS.slice(0, 3);
  const row2 = RECENT_PROJECTS.slice(3, 6);



  // 👇 Explicitly typed: can hold number or null
  const [hoveredRow1, setHoveredRow1] = useState<number | null>(null);
  const [hoveredRow2, setHoveredRow2] = useState<number | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Handle contact form submission logic (e.g., call your backend API)
  const handleContactSubmit = async (formData: ContactFormData) => {
    setSubmitting(true);
    setStatusMessage("");
    try {
      console.log('formdata: ', formData);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatusMessage("Message sent successfully! Thank you.");
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("Error sending message. Please try again.");
    }
    setSubmitting(false);
  };





  return (
    <>
      <Hero />

      <section
        className="max-w-7xl mx-auto px-6 pt-40 pb-20 h-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center overflow-hidden relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/sec2bg.jpg')" }} // <-- update with your image path
      >
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-xs z-5 pointer-events-none"></div>

        {/* left Column */}
        <div className="relative flex justify-center items-center z-10">
          <div className="absolute inset-0 bg-emerald-600/10 blur-3xl rounded-full -z-10" />
          <img
            src="https://i.pinimg.com/1200x/15/89/be/1589bedbf3a45bc0548d2d2bc228cc46.jpg"
            alt="Archinest design preview"
            className="w-full max-w-md rounded-2xl shadow-2xl object-contain hover:scale-105 transition duration-500"
          />
        </div>

        {/* right Column */}
        <div className="space-y-6 z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-800 mb-4 leading-tight">
              Where Vision Meets <span className="text-[#19B3B1]">Creation</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Established in <span className="font-semibold text-emerald-700">2009</span> by{" "}
              <span className="font-semibold text-gray-900">Mr. ABC</span>, Archinest Associates Pvt. Ltd
              was born from a deep passion for redefining design excellence. Inspired by his journey that
              began in 2005, our studio continues to blend creativity, trust, and innovation to craft
              timeless spaces that inspire and connect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-7 py-3 rounded-full font-semibold shadow-lg transition duration-300">
              Read More
            </button>

            <Link
              to="/reach-us"
              className="flex items-center justify-center gap-2 bg-[#19B3B1] hover:bg-[#118d8b] text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
            >
              <FaPhoneAlt size={20} />
              <span className="font-semibold tracking-wide">+91 01234 56789</span>
            </Link>
          </div>

          <p className="text-gray-800 italic text-lg font-medium mt-4">
            “Let’s build your dream space together.”
          </p>
        </div>
      </section>




      <ServicesSection />

      <section
        className="max-w-7xl mx-auto py-20 px-6 overflow-hidden relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/sec2bg.jpg')" }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none"></div>

        <div className="relative z-10">
          {/* Text Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-800 mb-4">
              Recent Projects
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
              Explore our latest projects that showcase innovation, elegance, and functionality.
              Each design reflects our commitment to turning visions into reality with impeccable craftsmanship.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-rows-2 gap-8 p-10">
            {/* -------- Row 1 -------- */}
            <div className="flex justify-center gap-2 transition-all duration-500 ease-in-out">
              {row1.map((proj, idx) => {
                const isHovered = hoveredRow1 === idx;
                const defaultExpanded = idx === 0;
                const width =
                  hoveredRow1 === null
                    ? defaultExpanded
                      ? "50%"
                      : "25%"
                    : isHovered
                      ? "50%"
                      : "25%";
                return (
                  <Link
                    to={`/project/${proj.title.toLowerCase().replace(/\s+/g, '-')}`}
                    key={proj.title}
                    className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ease-in-out"
                    style={{
                      width,
                      height: "350px",
                      flexShrink: 0,
                      zIndex: isHovered || defaultExpanded ? 20 : 10,
                    }}
                    onMouseEnter={() => setHoveredRow1(idx)}
                    onMouseLeave={() => setHoveredRow1(null)}
                  >
                    <img
                      src={proj.image}
                      alt={`Project ${idx + 1}`}
                      className="w-full h-full object-cover rounded-xl select-none transition-all duration-500 ease-in-out"
                      draggable={false}
                    />
                    {(isHovered || defaultExpanded) && (
                      <div className="absolute bottom-0 left-0 w-full bg-black/70 py-4 px-2 flex items-end justify-center">
                        <span className="text-white text-lg font-semibold text-center">{proj.title}</span>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* -------- Row 2 -------- */}
            <div className="flex justify-center gap-2 transition-all duration-500 ease-in-out">
              {row2.map((proj, idx) => {
                const isHovered = hoveredRow2 === idx;
                const defaultExpanded = idx === 1;
                const width =
                  hoveredRow2 === null
                    ? defaultExpanded
                      ? "50%"
                      : "25%"
                    : isHovered
                      ? "50%"
                      : "25%";
                return (
                  <Link
                    to={`/project/${proj.title.toLowerCase().replace(/\s+/g, '-')}`}
                    key={proj.title}
                    className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ease-in-out"
                    style={{
                      width,
                      height: "350px",
                      flexShrink: 0,
                      zIndex: isHovered || defaultExpanded ? 20 : 10,
                    }}
                    onMouseEnter={() => setHoveredRow2(idx)}
                    onMouseLeave={() => setHoveredRow2(null)}
                  >
                    <img
                      src={proj.image}
                      alt={`Project ${idx + 4}`}
                      className="w-full h-full object-cover rounded-xl select-none transition-all duration-500 ease-in-out"
                      draggable={false}
                    />
                    {(isHovered || defaultExpanded) && (
                      <div className="absolute bottom-0 left-0 w-full bg-black/70 py-4 px-2 flex items-end justify-center">
                        <span className="text-white text-lg font-semibold text-center">{proj.title}</span>
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>





        </div>

        <div className="relative pt-20 px-4 z-10">
          <h2 className="text-6xl font-extrabold text-center mb-16 tracking-widest">OUR VALUES</h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-gray-300 rounded-xl p-8 flex flex-col items-center text-center bg-white bg-opacity-80 transition-shadow duration-300 hover:shadow-lg">
              <div className="text-7xl font-bold mb-2 text-emerald-700">01</div>
              <div className="text-2xl font-semibold mb-2">Collaboration</div>
              <p className="text-gray-700 text-lg">
                We work closely with our clients and team at every stage, ensuring each project is fueled by shared inspiration, dialogue, and respect.
              </p>
            </div>
            {/* Card 2 */}
            <div className="border border-gray-300 rounded-xl p-8 flex flex-col items-center text-center bg-white bg-opacity-80 transition-shadow duration-300 hover:shadow-lg">
              <div className="text-7xl font-bold mb-2 text-emerald-700">02</div>
              <div className="text-2xl font-semibold mb-2">Integrity</div>
              <p className="text-gray-700 text-lg">
                Honesty and transparency are our cornerstones. We deliver what we promise with clear intent and ethical practice at every step.
              </p>
            </div>
            {/* Card 3 */}
            <div className="border border-gray-300 rounded-xl p-8  flex flex-col items-center text-center bg-white bg-opacity-80 transition-shadow duration-300 hover:shadow-lg">
              <div className="text-7xl font-bold mb-2 text-emerald-700">03</div>
              <div className="text-2xl font-semibold mb-2">Excellence</div>
              <p className="text-gray-700 text-lg">
                We pay attention to detail and craftsmanship, striving to exceed expectations and set new standards for quality in every project.
              </p>
            </div>
          </div>
        </div>


      </section>



      <section className="max-w-7xl mx-auto p-16">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          {/* Large Video */}
          <div className="w-full md:w-2/3">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/VIDEO_ID_1"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Intro Text */}
          <div className="w-full md:w-1/3">
            <h2 className="text-5xl font-extrabold mb-4">Visit Our <span className="text-yellow-700">Youtube Channel</span></h2>
            <p className="text-lg text-gray-700 mb-2">
              Concepts Design Studio is highly active and updated in YouTube. We feature everything from ongoing to completed works of interior, exterior, and landscape design—sharing creative ideas for every style and budget.
            </p>
          </div>
        </div>
        {/* Thumbnails Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="rounded-xl overflow-hidden shadow">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/VIDEO_ID_4"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-center mt-4">
          <a
            href="https://youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-400 rounded-xl text-lg font-medium transition hover:bg-gray-100"
          >
            Visit our Channel
          </a>
        </div>
      </section>


      <section className="max-w-7xl mx-auto pt-20  overflow-hidden relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/sec2bg.jpg')" }}
      >

        {/* Background overlay */}
        <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none"></div>

        {/* Heading and Subtext */}
        <div className="text-center pb-8 relative z-20">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Voices That <span className="text-yellow-700"> Inspire</span>
          </h2>
          <div className="text-gray-700 text-md mt-2 mb-2">
            “Every project tells a story — of trust, transformation, and timeless design<br />
            Hear from those who’ve experienced our craft and discover how we turn visions into reality.”
          </div>
        </div>

        {/* Image & Testimonial Overlay */}
        <div className="relative w-full flex justify-center items-center min-h-[420px]">
          {/* Background Image */}
          <img
            src="/testimon.jpg"
            alt="Project background"
            className="w-full h-[620px] object-cover"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white bg-opacity-20"></div>
          {/* Testimonial Box overlays image */}
          <div className="absolute inset-0 flex items-center justify-center left-[50%] top-[50%] transform -translate-y-1/2">
            <div className="bg-white rounded-xl shadow-xl p-10 max-w-xl mx-auto text-center backdrop-blur-md">
              <div className="flex justify-center mb-4">
                <FaQuoteLeft size={28} />
              </div>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                As we look at our beautiful home, we couldn’t be more grateful.<br />
                The quality of the work speaks for itself, and the result is a space that is not only stunning but feels uniquely ours.
                <br />We wholeheartedly recommend this company to anyone seeking a team that delivers exceptional craftsmanship, professionalism, and a truly collaborative experience.
              </p>
              <div className="border-t border-gray-200 mt-4 pt-2 font-semibold text-gray-500">
                Jincy Thomas Varkey
              </div>
            </div>
          </div>
        </div>
      </section>


      <section
        className="w-full min-h-screen flex items-center justify-center px-4 py-16 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/7f/12/90/7f129040f42f076b1fa4a1d813524456.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row relative z-10">
          {/* Left: Form */}
          <div className="flex-1 flex flex-col justify-center bg-white rounded-xl shadow-xl px-8 py-10 md:px-16 md:py-16 max-w-xl ml-auto">
            <h3 className="text-3xl font-extrabold mb-6 text-gray-900">
              Get In Touch <span className="text-emerald-700">With Us</span>
            </h3>
            {/* Use your reusable ContactForm here */}
            <ContactForm
              onSubmit={handleContactSubmit}
              submitting={submitting}
              statusMessage={statusMessage}
            />
          </div>

          {/* Right: Text and overlay */}
          <div className="flex-1 flex flex-col justify-center px-10 py-12 md:py-24">
            <div className="bg-black bg-opacity-40 rounded-xl p-10 md:p-14">
              <h2 className="text-5xl font-extrabold text-white mb-6">
                Let's Connect
                <br />
                With Us
              </h2>
              <p className="text-white text-lg font-medium">
                Get in touch with us to discuss your ideas! We’re here to assist you
                and make your vision a reality. Let’s create something amazing
                together!
              </p>
            </div>
          </div>
        </div>
      </section>





    </>
  );
}
export default Home;
