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

    const handleAddToCard = (obj) =>{
        console.log(obj);
        const previousData = JSON.parse(localStorage.getItem('details-cart')) || [];
        previousData.push(obj);
        localStorage.setItem('details-cart', JSON.stringify(previousData));
    }
    
    return (
        <div>
            <div className='md:w-[1100px] mx-auto md:grid grid-cols-3 p-4 md:p-8 gap-8 my-12 md:my-24 text-gray-500'>
                <div className='space-y-5 col-span-2 p-3 md:p-6'>
                    <h2 className='font-medium'><span className='text-2xl font-bold text-orange-500'>Job Description:</span> {details.job_description}</h2>
                    <p className='font-medium'><span className='text-2xl font-bold text-orange-500'>Job Responsibility:</span> {details.job_responsibility}</p>
                    <p className='font-medium'><span className='text-2xl font-bold text-orange-500'>Educational Requirements:</span> {details.educational_requirements}</p>
                    <p className='font-medium'><span className='text-2xl font-bold text-orange-500'>Experiences:</span> {details.experiences}</p>
                </div>
               <div>
                <div>
                <div className='rounded-lg space-y-5 col-span-1 bg-orange-100 p-3 md:p-6 font-lg'>
                    <h2 className='text-2xl font-bold text-orange-500'>Job Details</h2>
                    <hr></hr>
                    <p className='font-medium'><span className='text-2xl font-bold text-orange-500'>Salary:</span> {details.salary}</p>
                    <p className='font-medium'><span className='text-2xl font-bold text-orange-500'>Job Title:</span> {details.job_title}</p>
                    <h2 className='text-2xl font-bold text-orange-500'>Contact information</h2>
                    <hr></hr>
                    <p className='font-medium'><span className='text-2xl font-bold text-orange-500'>Phone:</span> {details.phone}</p>
                    <p className='font-medium'><span className='text-2xl font-bold text-orange-500'>Email:</span> {details.email}</p>
                    <p className='font-medium'><span className='text-2xl font-bold text-orange-500'>Location:</span> {details.location}</p>
                </div>
                </div>
                <div className='font-bold text-white mt-6'>
                    <button onClick={()=>handleAddToCard(details)} className='bg-orange-500 hover:bg-orange-700 py-4 px-6 w-full rounded-lg'>Apply Now</button>
                </div>
               </div>
                
            </div>
        </div>
    );
};

export default JobDetails;

