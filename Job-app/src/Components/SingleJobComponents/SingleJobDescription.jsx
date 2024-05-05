import React from 'react';
import {Link} from 'react-router-dom'
import jobs from '../Jobs/JobData';
import { IoBusinessOutline,IoLocationOutline,IoNewspaper,IoBookmarkOutline  } from "react-icons/io5";
import JobMainCard from '../Jobs/JobMainCard';

const SingleJobDescription = ({job}) => {
    // Filter jobs based on contract status, location, and similar title words
    const similarJobs = jobs.filter(
        myJob =>
            myJob.contractStatus === job.contractStatus &&
            myJob.location ===job.location &&
            myJob.title.includes(job.title.split(" ")[0]) //Checking for similar title words
    ).slice(0,3);

  return (
    <div className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-col items-start gap-5 bg-white rounded-lg p-9 shadow-sm border border-gray-200">
            <h1 className="text-indigo-500 font-semibold text-xl">Job Description</h1>
            <p className="text-gray-600 leading-7" dangerouslySetInnerHTML={{__html: job.description || ""}}></p>

            <h1 className="text-indigo-500 font-semibold text-xl">What you'll do</h1>
            <p className="text-gray-600 leading-7" dangerouslySetInnerHTML={{__html: job.requirements || ""}}></p>

            <h1 className="text-indigo-500 font-semibold text-xl">About {job.company} </h1>
            <p className="text-gray-600 leading-7" dangerouslySetInnerHTML={{__html: job.about || ""}}></p>
        </div>
        <div className="w-full flex flex-col gap-4 items-center">
                <div className="w-full text-indigo-500 font-semibold text-xl text-center bg-white rounded-lg p-3 mb-4 border border-gray-200">
                    Similar Jobs
                </div>
               

           
                     {/* Display similar jobs */}
                     <div className="flex flex-wrap justify-start items-center">
                        {similarJobs.map((similarJob) => <JobMainCard key={similarJob.id} job={similarJob} />)}
                     </div>
        </div>
    </div>
  )
}

export default SingleJobDescription