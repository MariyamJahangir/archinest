import React, { useState } from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  // 🔹 Form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // 🔹 Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Top Banner Section */}
      <section
        className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/7e/e2/56/7ee2569fb6fe306ecaad1d18c78ea362.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center drop-shadow-xl">
          Get Contact With Us
        </h1>
      </section>

      {/* Contact Section */}
      <section>
        <div
          className="relative min-h-screen flex items-center justify-center bg-cover bg-fixed bg-center p-20"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/d6/44/87/d64487145fe58ec916aa9998eb80fbcb.jpg')",
          }}
        >
          <div className="absolute top-0 left-0 h-full w-full bg-black/30 z-0" />

          <div className="backdrop-blur-xl bg-black/40 rounded-2xl shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 p-10 relative z-10">
            {/* Contact Form */}
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <h2 className="text-3xl font-light text-white mb-2">
                Contact Us
              </h2>
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none"
              />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none"
              />
              <textarea
                required
                rows={4}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none resize-none"
              />
              <button
                type="submit"
                className="w-fit px-7 py-3 rounded-lg bg-white/20 text-white shadow-md hover:bg-white/30 transition"
              >
                Submit your application
              </button>
              {status && (
                <p className="text-sm text-white mt-2">{status}</p>
              )}
            </form>

            {/* Company Info */}
            <div className="flex flex-col gap-6 text-white/90 justify-center">
              <h3 className="text-2xl font-semibold mb-4">Company Info</h3>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>1234 Design Street, City, Country</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <a href="mailto:info@company.com" className="underline">
                  info@company.com
                </a>
              </div>

              <div className="flex gap-4 mt-4">
                <a href="#" className="text-white/80 hover:text-white">
                  <FaFacebookF size={24} />
                </a>
                <a href="#" className="text-white/80 hover:text-white">
                  <FaTelegramPlane size={24} />
                </a>
                <a href="#" className="text-white/80 hover:text-white">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
