import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ singleService }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto rounded-lg overflow-hidden shadow-lg bg-white transform transition hover:scale-105">
      {/* Card Image */}
      <img
        src={singleService.imageUrl}
        alt={singleService.service}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        {/* Service Title */}
        <h2 className=" mb-2 text-center h3-small">{singleService.service}</h2>
        {/* Service Description */}
        <p className="text-gray-700 text-base mb-4">
          {singleService.description}
        </p>
        {/* Learn More Button */}
        <div className="w-full flex justify-center items-center">
          <button
            className="button-action"
            onClick={() => navigate(`/service/${singleService.id}`)}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
