import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import LoadingModal from "../Reusables/LoadingModal";
import DialogBox from "../Reusables/DialogBox";
import { validateEmail, validatePassword } from "../Reusables/Validations";
import InputField from "../Reusables/InputFields/InputField";
import { useLocation } from "react-router-dom";
// Login section
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsloading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState(""); // Can be "success" or "error"
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //Smooth scrolling to the top of a section
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, []);

  //Input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //Error dialog pop up
  const openErrorDialog = () => {
    setDialogType("error");
    setMessage("Error processing your request, please try again later");
    setIsDialogOpen(true);
  };

  //Closing the error dialog pop up
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  //Navigating the user after login is successful
  const navigateOnSuccess = () => {
    const previousPage = location.state?.from?.pathname || "/";
    console.log("previous page:", previousPage);
    if (previousPage === "/auth-signUp") {
      navigate("/jobs-all");
    } else {
      navigate(-1);
    }
  };

  //Submit login details for authentication
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsloading(true);
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      setIsloading(false);
      navigateOnSuccess();
    } catch (error) {
      setIsloading(false);
      openErrorDialog();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bgColor px-4">
      <div className="bg-white shadow-md rounded-lg p-4 md:p-8 w-full max-w-md">
        {/* header */}
        <h2 className="text-3xl font-semibold text-center mb-6 text-[#0E2954]">
          Login to Your Account
        </h2>
        {/* Login form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <InputField
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              validate={validateEmail}
              errorMessage="Invalid email format"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <InputField
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              validate={validatePassword}
              errorMessage="Should contain at least 6 characters"
              placeholder="Password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#1F6E8C] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0E2954] transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Forgot Password / Sign Up */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Forgot your password?{" "}
            <a
              href="/forgot-password"
              className="text-[#2E8A99] hover:underline"
            >
              Reset it here
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Don't have an account?{" "}
            <a href="/auth-signUp" className="text-[#2E8A99] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      {/* Loading effect while waiting for a response */}
      {isLoading && <LoadingModal />}
      {/* Dialog
       */}
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

export default Login;
