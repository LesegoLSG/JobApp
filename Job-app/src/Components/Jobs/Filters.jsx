import React, { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoBusinessOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Filters = ({ filters, setFilters }) => {
    const [contract, setContract] = useState("");
    const [work,setWork] = useState("");
    // const navigate = useNavigate();

    const [savedJobs,setSavedJobs] = useState({})
    

    const handleCloseFilter = () =>{

    }

    const handleContractStatusChange = (e) => {
        const value = e.target.value;
        if (filters.contract.includes(value)) {
            setFilters({ ...filters, contract: filters.contract.filter(item => item !== value) });
        } else {
            setFilters({ ...filters, contract: [...filters.contract, value] });
        }
    };
  
    const handleLocationStatusChange = (e) => {
        const value = e.target.value;
        if (filters.location.includes(value)) {
            setFilters({ ...filters, location: filters.location.filter(item => item !== value) });
        } else {
            setFilters({ ...filters, location: [...filters.location, value] });
        }
    };

    const clearFilters = () => {
        setFilters({ contract: [], location: [] });
    };

  return (
    <div className="md:sticky relative md:top-10 md:w-[500px] w-full">
        <div className="w-full bg-white rounded-lg p-5 border border-gray-200">
            <div className="w-full flex items-center justify-between">
                <span className="text-gray-800 font-semibold text-[15px]">Filter Jobs</span>
                <IoCloseCircleOutline 
                    className="cursor-pointer"
                    size={20}
                    onClick={clearFilters}
                />
            </div>
            <div className="w-full flex md:flex-col flex-row justify-between gap-4 mt-5">
                <div className="flex flex-col gap-4">
                    <span className="h3">Contract Status</span>
                    <div className="w-full flex flex-col gap-2">
                        {/* Full time */}
                        <div className="w-full flex items-center gap-2">
                            <input 
                            type="checkbox"
                            value="Full Time"
                            checked={filters.contract.includes("Full Time")}
                            onChange={handleContractStatusChange}
                            className="w-[16px] h-[16px]"
                            />
                            <span className="span">Full Time</span>
                        </div>
                        {/* Part time */}
                        <div className="w-full flex items-center gap-2">
                            <input 
                            type="checkbox"
                            value="Part Time"
                            checked={filters.contract.includes("Part Time")}
                            onChange={handleContractStatusChange}
                            className="w-[16px] h-[16px]"
                            />
                            <span className="span">Part Time</span>
                        </div>
                        {/* Internship */}
                        <div className="w-full flex items-center gap-2">
                            <input 
                            type="checkbox"
                            value="Internship"
                            checked={filters.contract.includes("Internship")}
                            onChange={handleContractStatusChange}
                            className="w-[16px] h-[16px]"
                            />
                            <span className="span">Internship</span>
                        </div>

                    </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="h3">Location Status</span>
                        {/* On-Site */}
                        <div className="w-full flex items-center gap-2">
                                <input 
                                type="checkbox"
                                value="On-Site"
                                checked={filters.location.includes("On-Site")}
                                onChange={handleLocationStatusChange}
                                className="w-[16px] h-[16px]"
                                />
                            <span className="span">On-Site</span>
                        </div>
                        {/* Remote */}
                        <div className="w-full flex items-center gap-2">
                                <input 
                                type="checkbox"
                                value="Remote"
                                checked={filters.location.includes("Remote")}
                                onChange={handleLocationStatusChange}
                                className="w-[16px] h-[16px]"
                                />
                            <span className="span">Remote</span>
                        </div>
                        {/* Hybrid */}
                        <div className="w-full flex items-center gap-2">
                            <input 
                            type="checkbox"
                            value="Hybrid"
                            checked={filters.location.includes("Hybrid")}
                            onChange={handleLocationStatusChange}
                            className="w-[16px] h-[16px]"
                            />
                            <span className="span">Hybrid</span>
                        </div>
                    </div>
               
            </div>

        </div>
        <div className="w-full bg-white rounded-lg p-5 mt-5 border border-gray-200">
            <div className="w-full flex flex-col gap-2">
                <span className="text-gray-800 font-semibold text-[15px]">Saved Jobs</span>
                <div className="flex flex-col w-full gap-5">
                    {!savedJobs.length && (
                    <span className="text-gray-400 text-[14px]">
                        You don't have saved jobs yet!
                    </span>
                    )}
                    {/* {savedJobs.map((job) =>{
                        const mySavedJobs = jobs.find((mySavedJobs) => mySavedJobs.id ===job);
                        if(mySavedJobs){
                            return (
                                <div 
                                key={job}
                                className="text-gray-800 flex items-center justify-between w-full order-b"
                                >
                                    <div className="flex flex-col- items-start gap-1">
                                        <span>{mySavedJobs.title}</span>
                                        <div className="flex items-center gap-2">
                                        <IoBusinessOutline  
                                            width={"18px"} 
                                            height={"18px"}
                                            color="#555"
                                        />
                                        <span>{mySavedJobs.company}</span>
                                        </div>
                                    </div>
                                    <button
                                    className="text-white font-semibold text-[15px] rounded-md bg-indigo-500 w-20 h-8" 
                                    >
                                     Apply
                                    </button>
                                    
                                </div>
                            )
                        // }
                        return null;
                    })

                    } */}

                </div>
            </div>
        </div>
    </div>
  )
}

export default Filters