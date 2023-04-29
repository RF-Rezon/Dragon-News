import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Rightnav from '../SideNav/Rightnav';
import Header from '../Shared/Header/Header';

const NewsLayout = () => {
    return (
        <div className='max-w-full md:max-w-7xl mx-auto'> 
        <div className='flex flex-col items-center text-center'>
        <Header />
           <div className='container md:flex gap-x-10'>
            <div className='basis-2/3'><Outlet/></div>
            <Rightnav/>
           </div>
            <Footer/>
        </div>
    </div>
    );
};

export default NewsLayout;