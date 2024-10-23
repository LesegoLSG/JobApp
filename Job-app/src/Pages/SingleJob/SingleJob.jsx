import React from "react";
import { useParams } from "react-router-dom";
import SingleJobSideBar from "../../Components/SingleJobComponents/SingleJobSideBar";
import SingleJobDescription from "../../Components/SingleJobComponents/SingleJobDescription";
import jobs from "../../Components/Jobs/JobData";
import { useEffect } from "react";

const SingleJob = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  console.log("singleJob:", job);
  return (
    <div className="w-full mt-28 mb-16">
      <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
        <SingleJobSideBar job={job} />
        <div className="w-full">
          <SingleJobDescription job={job} />
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
