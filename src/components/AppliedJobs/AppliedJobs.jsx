import React, { useEffect, useState } from 'react';
import AppliedJobDisplay from '../AppliedJobDisplay/AppliedJobDisplay';

const AppliedJobs = () => {
   
    const previousJob = JSON.parse(localStorage.getItem('details-cart')) || [];
    const [job, setJob] = useState(previousJob);
    console.log(job);
    
    return (
        // <div className='md:w-[1120px] mx-auto my-12'>
        //     <div className='flex justify-between items-center  mx-auto border-2 border-black'>
        //         <div className='flex'>
        //             <div>
        //                 <img src="" alt="" />
        //                 job
        //             </div>
        //             <div>
        //                 <img src="" alt="" />
        //                 <h2>{company_name}</h2>
        //             </div>
        //         </div>
        //         <div>
        //             <button>sakib</button>
        //         </div>
        //     </div>
        // </div>
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