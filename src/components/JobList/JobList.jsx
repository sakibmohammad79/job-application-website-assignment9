import React from 'react';



const JobList = (props) => {
    const { logo, name, jobs_available} =props.jobListData;
    return (
        <div className='bg-slate-50 border-2 border-slate-100 p-6 rounded font-bold drop-shadow-md text-lg hover:bg-orange-400'>
            <div className='space-y-2 text-gray-500'>
                <img src={logo} alt="" />
                <p>{name}</p>
                <p>{jobs_available}</p>
            </div>
            
        </div>
    );
};

export default JobList;