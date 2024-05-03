import React,{useState} from 'react';
import { IoBusinessOutline,IoLocationOutline,IoNewspaper } from "react-icons/io5";
import Pagination from './Pagination';

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
        {records.map((myJob) =>{
            return (
                <div 
                key={myJob.id} 
                className="md:w-[49%] w-full bg-white mb-5 rounded-lg flex items-center justify-between md:p-8"
                > 
                  <div className="flex md:flex-row flex-col md:items-center items-start gap-6"> 
                    <img 
                        src={myJob.logo}
                        alt={myJob.title}
                        className="w-[70px]"
                    /> 
                    <div className="flex flex-col gap-[6px]">
                        <span className="font-semibold text-indigo-500 text-[22px]">
                            {myJob.title}
                        </span>
                        {/* Business outline */}
                        <div className="flex items-center gap-2">
                            <IoBusinessOutline
                                width={"18px"}
                                height={"18px"}
                                color="#555"
                            />
                            <span className="text-[14px] font-medium text-gray-600">
                                {myJob.company}
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
                                {myJob.workStatus}
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
                                {myJob.contractStatus}
                            </span>
                         </div>
                    </div>
                     </div> 
                     <div className="flex flex-col gap-4 self-end">
                        <button className="button-action">
                            Apply
                        </button>
                        <button className="button-action-save-job">Save Job</button>
                        </div>
                         
                    
                </div>
            )
        })

        }

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