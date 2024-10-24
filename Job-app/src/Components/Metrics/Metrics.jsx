import React from "react";
import Image1 from "../../assets/ParallexImages/Image1.jpg";
import Image2 from "../../assets/ParallexImages/Image2.jpg";
import MetricsDisplay from "./MetricsDisplay";
import { useNavigate } from "react-router-dom";
// Metrics section with apply submit resume buttons
const Metrics = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      {/* first image */}
      <div
        className="bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Image2})` }}
      >
        <div className="h-[400px] bg-opacity-75 flex flex-col justify-center items-center pt-[80px] space-y-6">
          <h2 className=" text-white text-2xl text-center font-bold px-4">
            Take the first step toward your dream career today.
          </h2>
          {/* Apply button */}
          <button
            className="button-action"
            onClick={() => navigate("/jobs-all")}
          >
            Apply
          </button>
        </div>
      </div>
      {/* Main section */}
      <div className="w-full  bg-blue-500">
        <MetricsDisplay />
      </div>
      {/* second image */}
      <div
        className="bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <div className="h-[400px] bg-opacity-75 flex flex-col justify-center items-center pt-[80px] space-y-6">
          <h2 className="text-white text-2xl text-center font-bold px-4">
            Cannot find your perfect job?
          </h2>
          <h2 className=" text-white text-2xl text-center font-bold px-4">
            Submit your resume, and our experienced recruiter will review it to
            find a suitable job for you.
          </h2>
          {/* Submit resume button */}
          <button
            className="button-action"
            onClick={() => navigate("/resume/submit")}
          >
            Submit Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
