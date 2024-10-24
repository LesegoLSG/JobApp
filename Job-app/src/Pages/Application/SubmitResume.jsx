import React, { useState, useEffect } from "react";
import {
  validateEmail,
  validateLettersOnly,
  validatePhoneNumber,
} from "../../Components/Reusables/Validations";
import InputField from "../../Components/Reusables/InputFields/InputField";
import { useNavigate } from "react-router-dom";

const SubmitResume = () => {
  const navigate = useNavigate();
  // Set up form data state for controlled form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cv: null,
  });
  // Set up state for managing form errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cv: "",
  });
  // Scroll to the top of the page when the component mounts (for user experience)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, []);
  // Handle input changes, updating state for form fields
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };
  // Function to validate all form fields
  const validateFields = () => {
    let formIsValid = true;
    let newErrors = { ...errors };

    // Validate first name field
    if (!validateLettersOnly(formData.firstName)) {
      newErrors.firstName = "First name should contain only letters";
      formIsValid = false;
    }
    // Validate last name field
    if (!validateLettersOnly(formData.lastName)) {
      newErrors.lastName = "Last name should contain only letters";
      formIsValid = false;
    }
    // Validate email field
    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
      formIsValid = false;
    }
    // Validate phone number field
    if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number (e.g., 0111111111)";
      formIsValid = false;
    }
    // Check if CV is uploaded
    if (!formData.cv) {
      newErrors.cv = "Please upload your CV";
      formIsValid = false;
    }
    // Set errors and return whether the form is valid or not
    setErrors(newErrors);
    return formIsValid;
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // If form is valid, proceed to submit
    if (validateFields()) {
      navigate("/successpage"); // Navigate to a success page after submission
    } else {
      console.log("Form contains errors");
    }
    console.log(formData);
  };

  return (
    <div className="w-full flex justify-center my-20 px-2">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-accent mb-6 text-center">
          Resume Submittion
        </h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
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
          <p className="text-gray-600">Accepted formats: pdf,doc,docx</p>

          {/* Submit Button */}
          <div className="w-full flex justify-center items-center">
            <button type="submit" className="button-action">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitResume;
