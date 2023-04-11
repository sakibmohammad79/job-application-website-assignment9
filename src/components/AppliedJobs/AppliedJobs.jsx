import React, { useEffect, useState } from 'react';
import AppliedJobDisplay from '../AppliedJobDisplay/AppliedJobDisplay';

const AppliedJobs = () => {
   
    const previousJob = JSON.parse(localStorage.getItem('details-cart')) || [];
    const [job, setJob] = useState(previousJob);
    console.log(job);
    
    return (
        <div>
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