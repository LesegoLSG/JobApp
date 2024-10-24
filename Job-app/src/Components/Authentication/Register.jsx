import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import LoadingModal from "../Reusables/LoadingModal";
import { useNavigate, useLocation } from "react-router-dom";
import {
  validateEmail,
  validateLettersOnly,
  validatePassword,
  validatePhoneNumber,
} from "../Reusables/Validations";
import DialogBox from "../Reusables/DialogBox";
import InputField from "../Reusables/InputFields/InputField";
// Register or sign up form
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsloading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(""); // Can be "success" or "error"
  const [message, setMessage] = useState("");

  // form input state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  //Global error state
  const [error, setError] = useState("");

  //Scroll to the top of a page when page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, []);

  //   Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //   Opening a dialog to display error meessage
  const openErrorDialog = () => {
    setDialogType("error");
    setMessage("Error processing your request, please try again later");
    setIsDialogOpen(true);
  };

  //   Closing the dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  //   Register user to the firebase
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    try {
      setIsloading(true);
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
        });
      }
      setIsloading(false);
      navigate("/auth-signIn", { state: { from: location } });
    } catch (error) {
      console.log(error.message);
      setIsloading(false);
      openErrorDialog();
    }

    // Submit form logic (e.g., API call)
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgColor mt-16 px-4">
      <div className="bg-white shadow-md rounded-lg p-4 md:p-8 w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-[#0E2954]">
          Sign Up
        </h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <InputField
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              validate={validateLettersOnly}
              errorMessage="Invalid, only letters allowed"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <InputField
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              validate={validateLettersOnly}
              errorMessage="Invalid, only letters allowed"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <InputField
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              validate={validateEmail}
              errorMessage="eg johnsmith@gmail.com"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <InputField
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              validate={validatePhoneNumber}
              errorMessage="10 digits allowed eg 01111111111"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <InputField
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              validate={validatePassword}
              errorMessage="6 characters long, at least 1 digit,1 special character"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <InputField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              validate={validatePassword}
              errorMessage="6 characters long, at least 1 digit,1 special character"
              placeholder="Confirm your password"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#1F6E8C] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0E2954] transition duration-300"
            >
              Sign Up
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-2">
              Already have an account?{" "}
              <a href="/auth-signIn" className="text-[#2E8A99] hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
      {/* Loading component to load while waiting for a response */}
      {isLoading && <LoadingModal />}
      {/* Displaying dialog details */}
      {isDialogOpen && (
        <DialogBox
          dialogType={dialogType}
          message={message}
          onClose={closeDialog}
        />
      )}
    </div>
  );
};

export default Register;
