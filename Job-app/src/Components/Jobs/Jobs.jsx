import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import jobs from "./JobData";
import SearchBar from "./SearchBar";
import ListedJobs from "./ListedJobs";
import jobsData from "./JobData";
// Job Main section
const Jobs = () => {
  const [filters, setFilters] = useState({ contract: [], location: [] });
  const [searchQuery, setSearchQuery] = useState("");

  // Filter jobs based on filters and search query
  const filteredJobs = jobsData.filter((job) => {
    const matchesContract =
      filters.contract.length === 0 ||
      filters.contract.includes(job.contractStatus);
    const matchesLocation =
      filters.location.length === 0 ||
      filters.location.includes(job.workStatus);
    const matchesSearch = job.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesContract && matchesLocation && matchesSearch;
  });

  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  }, []);

  return (
    <section className="w-full h-auto py-20 bg-bgColor" id="Jobs">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-y-2">
        <h1 className="h1">
          Find A <span className="text-secondary">Perfect Job!</span>
        </h1>

        <h3 className="h3-small text-center mb-4">
          Let's help you find a Job of your Dreams
        </h3>
      </div>
      <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
        <Filters filters={filters} setFilters={setFilters} />

        <div className="w-full">
          {/* Search bar */}
          <SearchBar setSearchQuery={setSearchQuery} />
          {/* Jobs listing */}
          <ListedJobs jobs={filteredJobs} />
        </div>
      </div>
    </section>
  );
};

export default Jobs;
