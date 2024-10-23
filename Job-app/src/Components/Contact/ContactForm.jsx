import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardVariant } from "../Reusables/AnimationVariants";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const submitContactForm = (e) => {
    e.preventDefault();
    console.log("Contact formData", formData);
  };

  return (
    <motion.div
      className="w-full h-auto p-4 bg-white shadow-lg rounded-lg"
      variants={cardVariant(1)}
      initial="hidden"
      whileInView="visible"
    >
      <h3 className="h3">Send Your Query</h3>
      <p className="subtitle font-normal mb-4">
        Let us know how to get back to you
      </p>
      <form className="space-y-4" onSubmit={submitContactForm}>
        <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-[#1F6E8C] focus:border-[#1F6E8C] text-gray-900"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className=" w-full px-4 py-2 border rounded-lg focus:ring-[#1F6E8C] focus:border-[#1F6E8C] text-gray-900"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-[#1F6E8C] focus:border-[#1F6E8C] text-gray-900"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className=" w-full px-4 py-2 border rounded-lg focus:ring-[#1F6E8C] focus:border-[#1F6E8C] text-gray-900"
          />
        </div>
        <div>
          <h3 className="h3">How can we help</h3>
          <p className="subtitle font-normal mb-4">
            Feel free to ask a question or send a comment
          </p>
        </div>
        <textarea
          type="text"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-[#1F6E8C] focus:border-[#1F6E8C] text-gray-900"
          rows="5"
        />
        <div className="w-full flex justify-center items-center mt-4">
          <button type="submit" className="button-action">
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
