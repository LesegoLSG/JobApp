import React from "react";
import EmptyUser from "../../assets/EmptyUser.png";

const TestimonialCard = ({ singleTestimonial }) => {
  return (
    <div className="flex flex-col justify-between items-center w-full max-w-md h-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Image and User Info */}
      <div className="flex justify-start items-center p-4">
        <img
          src={singleTestimonial.imageUrl}
          alt="User"
          className="object-cover w-16 h-16 rounded-full border-2 border-secondary" // Border for image
        />
        <div className="ml-4">
          <h1 className="text-lg font-bold text-gray-800">
            {singleTestimonial.name}
          </h1>
          <h2 className="text-sm text-gray-500">Customer</h2>
        </div>
      </div>

      {/* Comment Section */}
      <div className="p-4">
        <p className="text-gray-700 italic text-center">
          &quot;{singleTestimonial.comment}&quot;{" "}
          {/* Added quotes around the comment */}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
