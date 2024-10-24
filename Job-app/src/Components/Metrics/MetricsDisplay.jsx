import React from "react";
import CountUp from "react-countup"; // Importing CountUp for animated number counting
import { FaBriefcase, FaUsers, FaSmile, FaClock } from "react-icons/fa"; // Importing icons for metrics

// MetricsDisplay component
const MetricsDisplay = () => {
  // Metrics data array, containing objects with the metric label, value, color, and associated icon
  const metrics = [
    {
      label: "Jobs Filled", // Metric label
      value: 250, // Numeric value to be displayed and animated
      color: "text-[#1F6E8C]", // Custom color class for styling
      icon: <FaBriefcase />, // Icon for the metric
    },
    {
      label: "Candidates Placed",
      value: 500,
      color: "text-[#1F6E8C]",
      icon: <FaUsers />,
    },
    {
      label: "Candidate Satisfaction (%)",
      value: 95,
      color: "text-[#1F6E8C]",
      icon: <FaSmile />,
    },
    {
      label: "Average Time to Hire (days)",
      value: 30,
      color: "text-[#1F6E8C]",
      icon: <FaClock />,
    },
  ];

  return (
    <div className="py-16 w-full h-full bg-gray-50">
      {" "}
      {/* Container for the entire section */}
      <div className="container max-w-6xl mx-auto text-center px-4">
        {" "}
        {/* Restricts the width of the content */}
        <div className="mb-4">
          {" "}
          {/* Section title and subtitle */}
          <h1 className="h1">Success Indicators</h1> {/* Main title */}
          <h3 className="subtitle mt-4">
            Measuring our milestones and accomplishments.
          </h3>
        </div>
        {/* Grid layout for displaying metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index} // Using index as the unique key for each metric
              className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl" // Styling for each metric card, includes hover effect
            >
              <div className="flex items-center justify-center my-2">
                <div className={`text-3xl ${metric.color}`}>{metric.icon}</div>{" "}
                {/* Displays the icon */}
              </div>
              <div className={`text-4xl font-bold ${metric.color}`}>
                <CountUp end={metric.value} duration={3.5} />{" "}
                {/* Animates the number using CountUp */}
              </div>
              <p className="mt-4 text-gray-600">{metric.label}</p>{" "}
              {/* Displays the label for the metric */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsDisplay; // Exporting the component to be used in other parts of the application
