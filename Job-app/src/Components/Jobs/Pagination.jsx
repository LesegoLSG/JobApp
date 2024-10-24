import React from "react";

const Pagination = ({
  handlePreviousPage,
  handleNextPage,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className=" flex justify-center">
      {/* Previous page button */}
      <button
        className="bg-action text-white font-semibold px-2 py-1 rounded-l-lg"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {/* Page number buttons */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`bg-white w-[2rem] h-[2rem] mx-1 shadow-md  ${
            index + 1 === currentPage ? "bg-accent" : ""
          }`}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {/* Next page button */}
      <button
        className="bg-action text-white font-semibold px-2 py-1 rounded-r-lg"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
