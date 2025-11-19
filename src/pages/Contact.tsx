// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaTelegramPlane,
//   FaInstagram,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
// } from "react-icons/fa";

// function Contact() {
//   // 🔹 Form state
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   // 🔹 Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // 🔹 Handle form submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const response = await fetch("https://formsubmit.co/ajax/hello@aieera.com", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", phone: "", email: "", message: "" });
//       } else {
//         setStatus("Failed to send. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setStatus("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <>
//       {/* Top Banner Section */}
//       <section
//         className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center bg-fixed bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://i.pinimg.com/1200x/7e/e2/56/7ee2569fb6fe306ecaad1d18c78ea362.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//         <h1 className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center drop-shadow-xl">
//           Get Contact With Us
//         </h1>
//       </section>

//       {/* Contact Section */}
//       <section>
//         <div
//           className="relative min-h-screen flex items-center justify-center bg-cover bg-fixed bg-center p-20"
//           style={{
//             backgroundImage:
//               "url('https://i.pinimg.com/1200x/d6/44/87/d64487145fe58ec916aa9998eb80fbcb.jpg')",
//           }}
//         >
//           <div className="absolute top-0 left-0 h-full w-full bg-black/30 z-0" />

//           <div className="backdrop-blur-xl bg-black/40 rounded-2xl shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 p-10 relative z-10">
//             {/* Contact Form */}
//             <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
//               <h2 className="text-3xl font-light text-white mb-2">
//                 Contact Us
//               </h2>
//               <input
//                 required
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none"
//               />
//               <input
//                 required
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none"
//               />
//               <input
//                 required
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none"
//               />
//               <textarea
//                 required
//                 rows={4}
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-200 outline-none resize-none"
//               />
//               <button
//                 type="submit"
//                 className="w-fit px-7 py-3 rounded-lg bg-white/20 text-white shadow-md hover:bg-white/30 transition"
//               >
//                 Submit your application
//               </button>
//               {status && (
//                 <p className="text-sm text-white mt-2">{status}</p>
//               )}
//             </form>

//             {/* Company Info */}
//             <div className="flex flex-col gap-6 text-white/90 justify-center">
//               <h3 className="text-2xl font-semibold mb-4">Company Info</h3>
//               <div className="flex items-center gap-3">
//                 <FaMapMarkerAlt />
//                 <span>1234 Design Street, City, Country</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <FaPhoneAlt />
//                 <span>+123 456 7890</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <FaEnvelope />
//                 <a href="mailto:info@company.com" className="underline">
//                   info@company.com
//                 </a>
//               </div>

//               <div className="flex gap-4 mt-4">
                
//                 <a href="#" className="text-white/80 hover:text-white">
//                   <FaInstagram size={24} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Contact;
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
      const response = await fetch("https://formsubmit.co/ajax/hello@aieera.com", {
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
                <span>+91 90378 13345</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope />
                <a href="mailto:info@company.com" className="underline">
                  info@company.com
                </a>
              </div>

              <div className="flex gap-4 mt-4">
                <a href="#" className="text-white/80 hover:text-white">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="w-full bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7307.559240570725!2d76.78774826577504!3d8.761370118883828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e996fd7b8bbf%3A0x6355bee8f140cb65!2sDream%20home%20Designers!5e0!3m2!1sen!2sin!4v1763547734552!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
            title="Dream Home Designers Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Contact;
