import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-black text-white font-bold'>
            <div className='md:flex justify-around items-center pb-8 pt-4'>
                <div className='text-4xl mb-4 md:mb-0 ml-4 md:ml-0'>
                    <h3 className='text-white'>GrowYour<span className='text-orange-500'>Career</span></h3>
                </div>
                <div className='font-lg mb-4 md:mb-0 ml-4 md:ml-0 '>
                    <Link className='hover:text-orange-500' to="/">Home</Link>
                    <Link className='mx-6 hover:text-orange-500' to="/statistics">Statistics</Link>
                    <Link className='hover:text-orange-500' to="/appliedJobs">Applied Jobs</Link>
                    <Link className='mx-6 hover:text-orange-500' to="/blog">Blog</Link>
                </div>
                <div className='ml-4 md:ml-0'>
                    <button className='font-lg  bg-orange-500 hover:bg-orange-700 rounded-lg px-6 py-3'>Start Applying</button>
                </div>
            </div>
            <div className='flex justify-center'>
                <h3 className='text-3xl ms-8 pb-10 text-orange-400'>Job Details</h3>
            </div>
        </div>
    );
};

export default Header;