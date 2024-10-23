import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import jobs from "../../Components/Jobs/JobData";
import { AuthContext } from "../../Contexts/AuthContext";
import { db } from "../../Components/firebase";
import { setDoc, doc } from "firebase/firestore";
import InputField from "../../Components/Reusables/InputFields/InputField";
import {
  validateEmail,
  validateLettersOnly,
} from "../../Components/Reusables/Validations";

const ApplyNowForm = () => {
  const { id } = useParams();
  const jobToApply = jobs.find((job) => job.id === parseInt(id));

  const { currentUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    coverLetter: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("Please login to submit an application");
      return;
    }

    try {
      const applicationData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        coverLetter: formData.coverLetter,
        jobId: jobToApply.id,
        jobTitle: jobToApply.title,
        companyName: jobToApply.company,
        userId: currentUser.uid,
        timestamp: new Date(),
      };
      // Store application data in Firestore under the current user's ID
      await setDoc(
        doc(
          db,
          "users",
          currentUser.uid,
          "applications",
          jobToApply.id.toString()
        ),
        applicationData
      );
      console.log("Application submitted successfully!");
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error submitting the application. Please try again.");
    }

    console.log("Form Submitted:", formData);
    // Add form submission logic here (e.g., API call to send formData)
  };

  return (
    <section className="w-full flex justify-center mt-20">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-6 text-center">
          Apply for the Job :{" "}
          <span className="text-gray-700">{jobToApply.title}</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* First Name */}
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

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
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
          {/* Cover letter */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Cover Letter*
            </label>
            <textarea
              type="text"
              name="coverLetter"
              id="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
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
    </section>
  );
};

export default ApplyNowForm;
