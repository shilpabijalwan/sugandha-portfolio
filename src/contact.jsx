import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // 🔁 Replace with your EmailJS Service ID
        "your_template_id", // 🔁 Replace with your EmailJS Template ID
        formData,
        "your_public_key" // 🔁 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section
      className="bg-gradient-to-br from-[#1b2735] to-[#0f1a24] text-white px-4 py-20 relative"
      id="contact"
    >
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-[url('/asfalt-dark.png')] opacity-10 mix-blend-overlay pointer-events-none z-0" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1b2735] p-8 rounded-xl  shadow-md space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0f1a24] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#ffd277]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-[#0f1a24] border border-white/20 text-white focus:ring-2 focus:ring-[#ffd277]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-[#0f1a24] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#ffd277]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#ffd277] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
