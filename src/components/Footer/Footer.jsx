import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='grid grid-cols-3 md:grid-cols-5 p-4 md:p-12 bg-black text-white font-bold'>
                <div className='space-y-3'>
                    <h3 className='text-2xl  text-orange-500'>CareerHub</h3>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div className='space-y-2'>
                    <h3 className='text-2xl  text-orange-500'>Company</h3>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-2xl  text-orange-500'>Product</h3>
                    <p>Prototype</p>
                    <p>Plane&Princing</p>
                    <p>Customer</p>
                    <p>Integrations</p>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-2xl  text-orange-500'>Support</h3>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a partner</p>
                    <p>developer</p>
                </div>
                <div className='space-y-2'>
                    <h3 className='text-2xl text-orange-500'>Contact</h3>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;