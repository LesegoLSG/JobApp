import React,{useState} from 'react'
import Filters from './Filters'
import jobs from './JobData';
import SearchBar from './SearchBar';
import ListedJobs from './ListedJobs';
import jobsData from './JobData';

const Jobs = () => {
      const [filters, setFilters] = useState({ contract: [], location: [] });
      const [searchQuery, setSearchQuery] = useState('');

       // Filter jobs based on filters and search query
    const filteredJobs = jobsData.filter(job => {
      const matchesContract = filters.contract.length === 0 || filters.contract.includes(job.contractStatus);
      const matchesLocation = filters.location.length === 0 || filters.location.includes(job.workStatus);
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesContract && matchesLocation && matchesSearch;
  });

  return (
    
    <section className="w-full h-auto" id="Jobs">
        <div className="flex flex-col justify-center items-center gap-y-2">
             <h1 className="h1">Find A <span className="text-secondary">Perfect Job!</span></h1>
             <h3>Let's help you find a Job of your Dreams</h3>
        </div>
        <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
            <Filters filters={filters} setFilters={setFilters}/>

            <div className="w-full">
                <SearchBar setSearchQuery={setSearchQuery}/>
                <ListedJobs jobs={filteredJobs}/>
            </div>

        </div>

    </section>
  )
}

export default Jobs