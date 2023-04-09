import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobList from '../JobList/JobList';
import images from '../../assets/All Images/P3OLGJ1 copy 1.png';


const Home = () => {
    const jobListDatas = useLoaderData();
    console.log(jobListDatas);
    return (
        <div> 
            {/* Banner section start hear */}
            <section className='md:w-[1120px] mx-auto md:flex justify-center items-center gap-4 mt-4 md:mt-12 p-4 md:p-0'>
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
            <div className='mt-4 md:mt-16 mb-3 md:mb-8'>
                <h3 className='text-3xl text-center font-bold'>Job Category List</h3>
                <p className='text-center font-bold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='md:w-[1120px] mx-auto md:flex justify-center items-center gap-8 mt-3 md:mt-6'>
                {
                    jobListDatas.map((jobListData) => <JobList
                    key={jobListData.id}
                    jobListData = {jobListData}
                    ></JobList> )
                }
                </div>
            </div>
            {/* Job list section end Here */}

        </div>
    );
};

export default Home;