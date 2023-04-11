import React from 'react';

const AppliedJobDisplay = (props) => {
    const {location, salary, company_logo, company_name, job_title, type_one, type_two} = props.singleJob;
    return (
        <div className='md:w-[1120px] mx-auto my-16'>
            <div className='font-bold text-gray-600 py-8 px-6 flex justify-between items-center md:h-[180px] md:w-[800px]  mx-auto border-2 border-gray-300 drop-shadow-lg'>
            <div className='flex justify-center items-center gap-4'>
                <div>
                    <img className='rounded border-2 border-gray-200 p-12' src={company_logo} alt="" />
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>{job_title}</h3>
                    <h2>{company_name}</h2>
                    <button className='mr-3 border-2 border-orange-500 hover:bg-orange-500 py-2 px-5'>{type_one}</button>
                    <button className='border-2 border-orange-500 hover:bg-orange-500 py-2 px-5'>{type_two}</button>
                    <p>{location}</p>
                    <p>salary: {salary}</p>
                </div>
            </div>
            <div>
                <button className='text-white bg-orange-500 hover:bg-orange-700 py-3 px-6 rounded'>View Details</button>
            </div>
        </div>
    </div>
    );
};

export default AppliedJobDisplay;