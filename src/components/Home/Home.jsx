import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobList from '../JobList/JobList';
import images from '../../assets/All Images/P3OLGJ1 copy 1.png';
import FeatureJob from '../FeatureJob/FeatureJob';


const Home = () => {
    const featureJobsDatas = useLoaderData();
    console.log(featureJobsDatas);
    
    // const [featureJobDatas, setFeatureJobDatas] = useState([]);
    // setFeatureJobDatas(useLoaderData())
    const [jobListDatas, setJobListDatas] = useState([]);
    
    useEffect(()=>{
        fetch('jobList.json')
        .then(res => res.json())
        .then(data => setJobListDatas(data))
    },[]) ;
    
    return (
        <div> 
            {/* Banner section start hear */}
            <section className='md:w-[1120px] mx-auto md:grid grid-cols-2 justify-center items-center gap-4 mt-4 md:mt-12 p-4 md:p-0'>
            <div>
                <h1 className='text-4xl md:text-6xl font-bold'>
                    One Step<br></br> Closer To Your<br></br> <span className='text-orange-500'>Dream Job</span>
                </h1>
                <p className='font-bold mt-2 md:mt-4'>
                Explore thousands of job opportunities with all the<br></br>information you need. Its your future. Come find it. Manage all<br></br> your job application from start to finish.
                </p>
                <button className='rounded-lg bg-orange-500 hover:bg-orange-700 px-6 py-3 text-white font-bold mt-2 md:mt-4'>Get Started</button>
            </div>
            <div className='mt-4 md:mt-0'>
                <img className='w-[550px]' src={images} alt="" />
            </div>
            </section>
            {/* Banner Section end hear */}

            {/* Job list section start Here */}
            <div className='mt-4 md:mt-24 mb-3 md:mb-8'>
                <h3 className='text-3xl text-center font-bold text-orange-500'>Job Category List</h3>
                <p className='text-center font-bold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='md:w-[1120px] mx-auto md:grid grid-cols-4 justify-center items-center gap-4 md:gap-8  mt-3 md:mt-6'>
                {
                    jobListDatas.map((jobListData) => <JobList
                    key={jobListData.id}
                    jobListData = {jobListData}
                    ></JobList> )
                }
                </div>
            </div>
            {/* Job list section end Here */}

            {/* Featured jobSection start here */}
            <div className=' mt-12 md:mt-24 mb-3 md:mb-8'>
                <div>
                    <h3 className='text-3xl text-center font-bold text-orange-500'>Featured Jobs</h3>
                    <p className='text-center font-bold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='md:w-[1120px] mx-auto md:grid grid-cols-2 justify-center items-center gap-6 mt-4 md:mt-6'>
                    {/* {
                        featureJobDatas.map((featureJobsData) => <FeatureJob
                        key={featureJobsData.id}
                        featureJobsData={featureJobsData}
                        ></FeatureJob>)
                    } */}
                    {
                        featureJobsDatas?featureJobsDatas.map((featureJobsData) => <FeatureJob
                        key={featureJobsData.id}
                        featureJobsData={featureJobsData}
                        ></FeatureJob>):''
                    }
                </div>
            </div>
            {/* Featured jobSection end here */}

        </div>
    );
};

export default Home;