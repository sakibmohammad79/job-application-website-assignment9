import React, { useEffect, useState } from 'react';
import AppliedJobDisplay from '../AppliedJobDisplay/AppliedJobDisplay';

const AppliedJobs = () => {
    // const [allJob, setJobs] = useState([])
   
    const previousJob = JSON.parse(localStorage.getItem('details-cart')) || [];
    const [job, setJob] = useState(previousJob);
    console.log(job);

    // setJobs(allJob);
    
    // const handleFilter = () =>{

    // }
    return (
        <div className='md:w-[1120px] mx-auto my-28'>
            <div className='text-end me-40  mb-4'>
            <button className='rounded mr-3 font-bold bg-orange-500 hover:bg-orange-700 py-2 px-4 text-white'>Remote</button>
            <button className='font-bold bg-orange-500 hover:bg-orange-700 py-2 px-4 rounded text-white'>Onsite</button>
            </div>
            {
                job.map(singleJob => <AppliedJobDisplay
                key={singleJob.id}
                singleJob={singleJob}
                ></AppliedJobDisplay>)
            }
        </div>
    );
};

export default AppliedJobs;