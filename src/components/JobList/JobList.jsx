import React from 'react';



const JobList = (props) => {
    console.log(props.jobListData);
    const {id, logo, name, jobs_available} =props.jobListData;
    return (
        <div className='bg-slate-100 border-2 border-slate-200 p-6 rounded font-bold drop-shadow-lg text-lg hover:bg-orange-400'>
            <div className='space-y-2'>
                <p>{logo}</p>
                <p>{name}</p>
                <p>{jobs_available}</p>
            </div>
            
        </div>
    );
};

export default JobList;