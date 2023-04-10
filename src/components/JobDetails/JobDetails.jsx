import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const JobDetails = () => {
    const dynamic = useParams();
    const dynamicId = dynamic.jobDetailsId;

    const [details, setDetails] = useState({});
    useEffect(()=>{
        fetch('../featureJobs.json')
        .then(res => res.json())
        .then(data => {
            setDetails(data.find(dt=>dt.id==dynamicId))
        })
    },[dynamicId])
    console.log(details);

    //const data = useLoaderData();
    //console.log(data);
    // const detailsData = data.find(dt => dt.id == dynamicId);
    // setDetails(detailsData);
    // console.log(details);
    return (
        <div>
            <h2>details: </h2>
        </div>
    );
};

export default JobDetails;