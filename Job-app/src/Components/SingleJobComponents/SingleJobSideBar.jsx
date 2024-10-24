import React, { useContext } from "react";
import {
  IoBusinessOutline,
  IoLocationOutline,
  IoNewspaper,
  IoBookmarkOutline,
} from "react-icons/io5";
import { GiCash } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

const SingleJobSideBar = ({ job }) => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  return (
    <div className="md:sticky relative md:top-10 md:w-[500px] w-full">
      {/* Main container for the job sidebar, with sticky positioning for medium and larger screens */}
      <div className="w-full bg-white rounded-lg p-5 border border-gray-200 flex flex-col gap-4">
        {/* Job Title */}
        <span className="h3-small">{job.title}</span>
        {/* Job Location */}
        <span className="h3-small text-[14px] mb-0">{job.location}</span>
        {/* Company Name with Bookmark Icon */}
        <div className="flex items-center gap-2">
          <IoBookmarkOutline width={"18px"} height={"18px"} color="#555" />
          <span className="text-[14px] font-medium text-gray-600">
            {job.company}
          </span>
        </div>
        {/* Work Status with Location Icon */}
        <div className="flex items-center gap-2">
          <IoLocationOutline width={"18px"} height={"18px"} color="#555" />
          <span className="text-[14px] font-medium text-gray-600">
            {job.workStatus}
          </span>
        </div>

        {/* Contract Status with Newspaper Icon */}
        <div className="flex items-center gap-2">
          <IoNewspaper width={"18px"} height={"18px"} color="#555" />
          <span className="text-[14px] font-medium text-gray-600">
            {job.contractStatus}
          </span>
        </div>
        {/* Salary with Cash Icon */}
        <div className="flex items-center gap-2">
          <GiCash width={"18px"} height={"18px"} color="#555" />
          <span className="text-[14px] font-medium text-gray-600">
            {job.salary}
          </span>
        </div>
        <button
          className="button-action"
          onClick={() => {
            if (currentUser) {
              navigate(`/apply/${job.id}`); // Navigate to the apply page if the user is authenticated
            } else {
              navigate("/auth-signIn"); // Navigate to the sign-in page if not authenticated
            }
          }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default SingleJobSideBar;
