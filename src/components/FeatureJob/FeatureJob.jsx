import React from 'react';

const FeatureJob = (props) => {
    //console.log(props.featureJobsData);
    const {id, company_logo, job_title, company_name, location, remote_or_onsite, salary} = props.featureJobsData;
    return (
        <div className=''>
            <img src="" alt="" />
            <p>{job_title}</p>
            <p><small>{company_name}</small></p>
            <button>{remote_or_onsite}</button>
            <span><small>{location}</small></span>
             <span><small>{salary}</small></span>
            <button>View Details</button>

        </div>
    );
};

export default FeatureJob;