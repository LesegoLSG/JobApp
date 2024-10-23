import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceData from "../ServiceData";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = ServiceData.find((service) => service.id === parseInt(id));

  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="w-full h-auto my-20 px-4 flex justify-center">
      {service ? (
        <div className="max-w-5xl flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={service.imageUrl}
            alt={service.service}
            className="w-full object-cover h-96"
          />
          <div className="p-4 ">
            <h1 className="text-3xl font-bold text-gray-800">
              {service.service}
            </h1>
            <p className="mt-4 text-gray-600">{service.description}</p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">
                More About This Service:
              </h2>
              <p className="mt-2 text-gray-600">
                {service.expandedContent.map((paragraph, index) => (
                  <p key={index} className="mt-1">
                    {paragraph}
                  </p>
                ))}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <h2 className="text-xl text-gray-500">Service not found.</h2>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
