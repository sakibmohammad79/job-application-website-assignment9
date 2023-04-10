import React from 'react';
import { Link } from 'react-router-dom';

const FeatureJob = (props) => {
    //console.log(props.featureJobsData);
    const {id, company_logo, job_title, company_name, location, remote_or_onsite, salary} = props.featureJobsData;
    return (
        <div className='border-2 border-gray-200 space-y-5 p-4 md:p-6 font-bold'>
            <img src="" alt="" />
            <p className='text-3xl '>{job_title}</p>
            <p className='font-lg 2xl'><small>{company_name}</small></p>
            <p><button className='border-2 border-orange-500 hover:bg-orange-500 px-6 py-2 mb-2'>{remote_or_onsite}</button></p>
            <span><small>{location} </small></span>
             <span><small>Salary: {salary}</small></span>
            <p><Link to={`/jobDetails/${id}`}><button  className= 'bg-orange-500 hover:bg-orange-700 px-6 py-3  text-white'>View Details</button></Link></p>
        </div>
    );
};

export default FeatureJob;