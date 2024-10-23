import React from "react";
import Image1 from "../../assets/ParallexImages/Image1.jpg";
import Image2 from "../../assets/ParallexImages/Image2.jpg";
import MetricsDisplay from "./MetricsDisplay";

const Metrics = () => {
  return (
    <div className="">
      {/* first image */}
      <div
        className="bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Image2})` }}
      >
        <div className="h-[400px] bg-opacity-75 flex flex-col justify-center items-center pt-[80px] space-y-6">
          <h2 className=" text-white text-2xl text-center font-bold px-4">
            Submit your resume, and our experienced recruiter will review it to
            find a suitable job for you.
          </h2>
          <button className="button-action ">Submit Resume</button>
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
        <div className="h-[400px] bg-opacity-75 flex justify-center pt-[80px]">
          <h2 className="flex justify-center items-center text-white text-4xl text-center font-bold px-4">
            Streamlined Hiring for Success
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
