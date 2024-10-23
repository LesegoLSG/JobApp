import React from "react";
import CountUp from "react-countup";
import { FaBriefcase, FaUsers, FaSmile, FaClock } from "react-icons/fa"; // Importing icons

const MetricsDisplay = () => {
  const metrics = [
    {
      label: "Jobs Filled",
      value: 250,
      color: "text-[#1F6E8C]",
      icon: <FaBriefcase />,
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
      <div className="container max-w-6xl mx-auto text-center px-4">
        <div className="mb-4">
          <h1 className="h1">Success Indicators</h1>
          <h3 className="subtitle mt-4">
            Measuring our milestones and accomplishments.
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center my-2">
                <div className={`text-3xl ${metric.color}`}>{metric.icon}</div>
              </div>
              <div className={`text-4xl font-bold ${metric.color}`}>
                <CountUp end={metric.value} duration={3.5} />
              </div>
              <p className="mt-4 text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsDisplay;
