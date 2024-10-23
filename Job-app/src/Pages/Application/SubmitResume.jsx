import React, { useState, useEffect } from "react";
import {
  validateEmail,
  validateLettersOnly,
  validatePhoneNumber,
} from "../../Components/Reusables/Validations";
import InputField from "../../Components/Reusables/InputFields/InputField";

const SubmitResume = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cv: null,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div className="w-full flex justify-center mt-20">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-6 text-center">
          Resume Submittion
        </h2>

        <form className="flex flex-col gap-6">
          {/* First Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-medium"
              >
                First Name*
              </label>
              <InputField
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                validate={validateLettersOnly}
                errorMessage="eg John"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-medium"
              >
                Last Name*
              </label>
              <InputField
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                validate={validateLettersOnly}
                errorMessage="eg Smith"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-2">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email Address*
              </label>
              <InputField
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                validate={validateEmail}
                errorMessage="Invalid email address"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Phone Number*
              </label>
              <InputField
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                validate={validatePhoneNumber}
                errorMessage="Invalid phone Number eg 0111111111"
                required
              />
            </div>
          </div>

          {/* Upload CV */}
          <div>
            <label htmlFor="cv" className="block text-gray-700 font-medium">
              Upload CV*
            </label>
            <input
              type="file"
              name="cv"
              id="cv"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitResume;
