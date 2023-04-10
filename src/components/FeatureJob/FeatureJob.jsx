import React from 'react';
import { Link } from 'react-router-dom';

const FeatureJob = (props) => {
    //console.log(props.featureJobsData);
    const {id, company_logo, job_title, company_name, location, type_one, type_two, salary} = props.featureJobsData;
    return (
        <div className='border-2 border-gray-200 space-y-5 p-4 md:p-6 font-bold text-gray-500'>
            <img src={company_logo} alt="" />
            <p className='text-3xl '>{job_title}</p>
            <p className=' text-2xl'><small>{company_name}</small></p>
            <button className='border-2 border-orange-500 hover:bg-orange-500 text-2xl px-6 py-2 mb-2 mr-4'>{type_one}</button>
            <button className='border-2 border-orange-500 hover:bg-orange-500 text-2xl px-6 py-2 mb-2'>{type_two}</button>
            <span className='block text-2xl'><small>{location} </small></span>
             <span><small className='text-2xl'>Salary: {salary}</small></span>
            <p><Link to={`/jobDetails/${id}`}><button  className= 'bg-orange-500 hover:bg-orange-700 px-6 py-3 text-white text-2xl'>View Details</button></Link></p>
        </div>
    );
};

export default FeatureJob;