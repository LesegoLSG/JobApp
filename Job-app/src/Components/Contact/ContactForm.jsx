import React, { useState } from "react";
import { motion } from "framer-motion";
import { cardVariant } from "../Reusables/AnimationVariants";
import InputField from "../Reusables/InputFields/InputField";
import { validateEmail, validateLettersOnly } from "../Reusables/Validations";
import DialogBox from "../Reusables/DialogBox";

// Contact form
const ContactForm = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(""); // Can be "success" or "error"
  const [message, setMessage] = useState("");
  // Input field state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  //Open success dialog
  const openSuccessDialog = () => {
    setDialogType("success");
    setMessage("Thank you, our team will get back to you in a moment.");
    setIsDialogOpen(true);
  };
  //   Close success dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  //   On submit of a form
  const submitContactForm = (e) => {
    e.preventDefault();
    openSuccessDialog();
  };

  return (
    <motion.div
      className="w-full h-auto p-4 bg-white shadow-lg rounded-lg"
      variants={cardVariant(1)}
      initial="hidden"
      whileInView="visible"
    >
      <h3 className="h3-small">Send Your Query</h3>
      <p className="text-gray-600 font-normal mb-4">
        Let us know how to get back to you
      </p>
      {/* contact form */}
      <form className="space-y-4" onSubmit={submitContactForm}>
        <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* First name input */}
          <InputField
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            validate={validateLettersOnly}
            errorMessage="Letters only"
            required
          />
          {/* Last Name input */}
          <InputField
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            validate={validateLettersOnly}
            errorMessage="Letters only"
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Email input */}
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            validate={validateEmail}
            errorMessage="eg JohnSmith@gmail.com"
            required
          />
          {/* Subject input form */}
          <InputField
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            validate={validateLettersOnly}
            errorMessage="Letters only"
            required
          />
        </div>
        <div>
          <h3 className="h3-small">How can we help</h3>
          <p className="text-gray-600 font-normal mb-4">
            Feel free to ask a question or send a comment
          </p>
        </div>
        {/* Message text area */}
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
      {/* Open success dialog */}
      {isDialogOpen && (
        <DialogBox
          dialogType={dialogType}
          message={message}
          onClose={closeDialog}
        />
      )}
    </motion.div>
  );
};

export default ContactForm;
