import React from 'react';
import { IoBusinessOutline,IoLocationOutline,IoNewspaper,IoBookmarkOutline  } from "react-icons/io5";
import { GiCash } from "react-icons/gi";

const SingleJobSideBar = ({job}) => {
   
  return (
    <div className="md:sticky relative md:top-10 md:w-[500px] w-full">
            <div className="w-full bg-white rounded-lg p-5 border border-gray-200 flex flex-col gap-4">
                <span className="text-indigo-500 font-medium text-lg">{job.title}</span>
                <span className="text-indigo-500 font-medium text-[14px]">{job.location}</span>
                <div className="flex items-center gap-2">
                    <IoBookmarkOutline 
                    width={"18px"}
                    height={"18px"}
                    color="#555"
                    />
                    <span className="text-[14px] font-medium text-gray-600">{job.company}</span>
                </div>
                <div className="flex items-center gap-2">
                    <IoLocationOutline 
                    width={"18px"}
                    height={"18px"}
                    color="#555"
                    />
                    <span className="text-[14px] font-medium text-gray-600">{job.workStatus}</span>
                </div>
                <div className="flex items-center gap-2">
                    <IoNewspaper 
                    width={"18px"}
                    height={"18px"}
                    color="#555"
                    />
                    <span className="text-[14px] font-medium text-gray-600">{job.contractStatus}</span>
                </div>
                <div className="flex items-center gap-2">
                    <GiCash 
                    width={"18px"}
                    height={"18px"}
                    color="#555"
                    />
                    <span className="text-[14px] font-medium text-gray-600">{job.salary}</span>
                </div>
                <button className="button-action">Apply Now</button>
            </div>
    </div>
  )
}

export default SingleJobSideBar