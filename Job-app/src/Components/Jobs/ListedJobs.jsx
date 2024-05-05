import React,{useState} from 'react';
import { IoBusinessOutline,IoLocationOutline,IoNewspaper,IoBookmarkOutline  } from "react-icons/io5";
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import JobMainCard from './JobMainCard';

const ListedJobs = ({jobs}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8 // Number of jobs per page

    // Get current jobs based on pagination
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = jobs.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(jobs.length / recordsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < lastIndex) {
            setCurrentPage(currentPage + 1);
        }
    }

  return (
    <div className="w-full flex items-center justify-between flex-wrap mt-8">
        {!jobs.length && <span className="w-full text-center">No Jobs matched your filters!</span>}
        {records.map((job) => <JobMainCard key={job.id} job={job} />)}

        {/* Pagination */}
        <div className="w-full flex justify-center items-center">
                <Pagination 
                handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage}  
                currentPage={currentPage} 
                totalPages={totalPages} 
                setCurrentPage={setCurrentPage}/>
        </div>
      
    </div>
  )
}

export default ListedJobs