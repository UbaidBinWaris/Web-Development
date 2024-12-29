'use client';

import Header from '@/app/components/header';  // Import Header component
import '@/app/globals.css';
import React from 'react';
import Sidebar from '@/app/components/sidebar';

const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className='bg-blue-500 text-white p-4 text-center text-2xl'>
        <p>Hello World </p>
        </div>
    </div>
  );
};

export default Home;
