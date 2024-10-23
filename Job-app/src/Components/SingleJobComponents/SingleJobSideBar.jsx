import React, { useContext } from "react";
import {
  IoBusinessOutline,
  IoLocationOutline,
  IoNewspaper,
  IoBookmarkOutline,
} from "react-icons/io5";
import { GiCash } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SingleJobSideBar = ({ job }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="md:sticky relative md:top-10 md:w-[500px] w-full">
      <div className="w-full bg-white rounded-lg p-5 border border-gray-200 flex flex-col gap-4">
        <span className="h3-small">{job.title}</span>
        <span className="h3-small text-[14px] mb-0">{job.location}</span>
        <div className="flex items-center gap-2">
          <IoBookmarkOutline width={"18px"} height={"18px"} color="#555" />
          <span className="text-[14px] font-medium text-gray-600">
            {job.company}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IoLocationOutline width={"18px"} height={"18px"} color="#555" />
          <span className="text-[14px] font-medium text-gray-600">
            {job.workStatus}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <IoNewspaper width={"18px"} height={"18px"} color="#555" />
          <span className="text-[14px] font-medium text-gray-600">
            {job.contractStatus}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <GiCash width={"18px"} height={"18px"} color="#555" />
          <span className="text-[14px] font-medium text-gray-600">
            {job.salary}
          </span>
        </div>
        <button
          className=""
          onClick={() => {
            if (currentUser) {
              navigate(`/apply/${job.id}`);
            } else {
              navigate("/auth-signIn");
            }
          }}
        >
          Apply Now
        </button>

        <Link to={`/apply/${job.id}`} className="button-action">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default SingleJobSideBar;
