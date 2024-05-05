import React, { useState } from 'react';
import { IoBusinessOutline, IoLocationOutline, IoNewspaper, IoBookmarkOutline } from "react-icons/io5";
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const JobMainCard = ({job}) => {
    console.log("In main card: ",job);
  return (
    <div key={job.id} className="md:w-[49%] w-full bg-white mb-5 rounded-lg flex items-center justify-between md:p-8">
    <div className="flex md:flex-row flex-col md:items-center items-start gap-6">
        <img
            src={job.logo}
            alt={job.title}
            className="w-[70px]"
        />
        <div className="flex flex-col gap-[6px]">
            <span className="font-semibold text-indigo-500 text-[22px]">
                {job.title}
            </span>
            {/* Business outline */}
            <div className="flex items-center gap-2">
                <IoBusinessOutline
                    width={"18px"}
                    height={"18px"}
                    color="#555"
                />
                <span className="text-[14px] font-medium text-gray-600">
                    {job.company}
                </span>
            </div>
            {/* Location */}
            <div className="flex items-center gap-2">
                <IoLocationOutline
                    width={"18px"}
                    height={"18px"}
                    color="#555"
                />
                <span className="text-[14px] font-medium text-gray-600">
                    {job.workStatus}
                </span>
            </div>
            {/* Newspaper */}
            <div className="flex items-center gap-2">
                <IoNewspaper
                    width={"18px"}
                    height={"18px"}
                    color="#555"
                />
                <span className="text-[14px] font-medium text-gray-600">
                    {job.contractStatus}
                </span>
            </div>
        </div>
    </div>
    <div className="flex flex-col gap-4 self-end">
        <Link to={`/singlejob/${job.id}`} className="button-action text-center cursor-pointer">
            Apply
        </Link>
        <button className="button-action-save-job flex justify-center items-center gap-2"><IoBookmarkOutline />Save Job</button>
    </div>
</div>
  )
}

export default JobMainCard