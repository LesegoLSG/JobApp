import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

// Filters component receives two props: filters and setFilters
const Filters = ({ filters, setFilters }) => {
  // State to handle contract type and work type selections
  const [contract, setContract] = useState("");
  const [work, setWork] = useState("");

  // State to handle saved jobs
  const [savedJobs, setSavedJobs] = useState({});
  // Function to handle closing the filter (currently empty)
  const handleCloseFilter = () => {};
  // Handle change in contract status filter
  const handleContractStatusChange = (e) => {
    const value = e.target.value;
    // If the selected value is already in filters.contract, remove it; otherwise, add it
    if (filters.contract.includes(value)) {
      setFilters({
        ...filters,
        contract: filters.contract.filter((item) => item !== value), // Remove value from the filter
      });
    } else {
      setFilters({ ...filters, contract: [...filters.contract, value] }); // Add value to the filter
    }
  };

  // Handle change in location status filter
  const handleLocationStatusChange = (e) => {
    const value = e.target.value;
    // If the selected value is already in filters.location, remove it; otherwise, add it
    if (filters.location.includes(value)) {
      setFilters({
        ...filters,
        location: filters.location.filter((item) => item !== value), // Remove value from the filter
      });
    } else {
      setFilters({ ...filters, location: [...filters.location, value] }); // Add value to the filter
    }
  };
  // Function to clear all filters (reset contract and location filters)
  const clearFilters = () => {
    setFilters({ contract: [], location: [] });
  };
  // Render the filters and saved jobs sections
  return (
    <div className="md:sticky relative md:top-10 md:w-[500px] w-full ">
      {/* Main container for filter section */}
      <div className="w-full bg-white rounded-lg p-5 shadow-lg">
        {/* Header section with "Filter Jobs" title and close button */}

        <div className="w-full flex items-center justify-between">
          <span className="text-gray-800 font-semibold text-[15px]">
            Filter Jobs
          </span>
          <IoCloseCircleOutline
            className="cursor-pointer"
            size={20}
            onClick={clearFilters}
          />
        </div>
        {/* Filter options: contract and location */}
        <div className="w-full flex md:flex-col flex-row justify-between gap-4 mt-5">
          {/* Contract status filter */}
          <div className="flex flex-col gap-4">
            <span className="h3-small">Contract Status</span>
            <div className="w-full flex flex-col gap-2">
              {/* Full time option */}
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
          {/* Location status filter */}
          <div className="flex flex-col gap-4">
            <span className="h3-small">Location Status</span>
            <div className="w-full flex flex-col gap-2">
              {" "}
              {/* Added gap-2 here */}
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
      </div>
      {/* Saved jobs section */}
      <div className="w-full bg-white rounded-lg p-5 mt-5 border border-gray-200">
        <div className="w-full flex flex-col gap-2">
          <span className="text-gray-800 font-semibold text-[15px]">
            Saved Jobs
          </span>
          <div className="flex flex-col w-full gap-5">
            {!savedJobs.length && (
              <span className="text-gray-400 text-[14px]">
                You don't have saved jobs yet!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
