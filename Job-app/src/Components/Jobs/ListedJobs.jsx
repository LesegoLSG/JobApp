import React, { useState } from "react";
import Pagination from "./Pagination";
import JobMainCard from "./JobMainCard";

// Mapping through jobs data and display
const ListedJobs = ({ jobs }) => {
  const [currentPage, setCurrentPage] = useState(1); //Current page
  const recordsPerPage = 8; // Number of jobs per page

  // Get current jobs based on pagination
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = jobs.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(jobs.length / recordsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-8">
        {/* If there are no job display "No jobs found or matched"*/}
        {!jobs.length && (
          <span className="w-full text-center">
            No Jobs matched your filters!
          </span>
        )}
        {/* If there are job, then display them */}
        {records.map((job) => (
          <JobMainCard key={job.id} job={job} />
        ))}
      </div>
      {/* Pagination */}
      <div className="w-full flex justify-center items-center">
        <Pagination
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ListedJobs;
