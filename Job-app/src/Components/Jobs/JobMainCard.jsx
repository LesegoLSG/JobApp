import React from "react";
import {
  IoBusinessOutline,
  IoLocationOutline,
  IoNewspaper,
  IoBookmarkOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
// Job Card
const JobMainCard = ({ job }) => {
  return (
    <div
      key={job.id}
      className="w-full bg-white mb-5 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between p-6 shadow-lg transition transform duration-300 hover:shadow-2xl hover:scale-105"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
        <img
          src={job.logo}
          alt={job.title}
          className="w-[70px] h-[70px] object-contain rounded-full" // Added shadow and rounded image
        />
        <div className="flex flex-col gap-[8px] w-full">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-900 text-[18px]">
              {job.title}
            </span>
            <span className="text-sm text-gray-500 italic">
              Posted: {job.postedDate}
            </span>
          </div>
          {/* Company Name */}
          <div className="flex items-center gap-2 text-gray-600">
            <IoBusinessOutline width={"18px"} height={"18px"} />
            <span className="text-[14px] font-medium">{job.company}</span>
          </div>
          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <IoLocationOutline width={"18px"} height={"18px"} />
            <span className="text-[14px] font-medium">{job.workStatus}</span>
          </div>
          {/* Contract Status */}
          <div className="flex items-center gap-2 text-gray-600">
            <IoNewspaper width={"18px"} height={"18px"} />
            <span className="text-[14px] font-medium">
              {job.contractStatus}
            </span>
          </div>
        </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col gap-4 mt-4 md:mt-0 self-stretch md:self-end">
        {/* Apply button/link */}
        <Link
          to={`/singlejob/${job.id}`}
          className="button-action text-center py-2 px-4 bg-secondary text-white rounded-lg shadow-md transition-colors duration-300 hover:bg-secondary-dark"
        >
          Apply
        </Link>
        {/* Save job button */}
        <button className="button-action-save-job flex justify-center items-center">
          <IoBookmarkOutline />
          Save Job
        </button>
      </div>
    </div>
  );
};

export default JobMainCard;
