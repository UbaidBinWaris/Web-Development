'use client';
import React from 'react'
import { useEffect , useState } from 'react'
import "@/app/globals.css";
import Header from '@/app/components/header';
import Sidebar from '@/app/components/sidebar';
import ScheduleTable from '@/app/components/ScheduleTable';

const schedule = () => {
  return (
    <div>
        <Header />
        <Sidebar />
            <div className="container mx-auto p-6">
                <h1 className="flex justify-center text-3xl p-5 mt-5">
                Schedule
                </h1>
                <h3 className='flex justify-center text-gray-400'>The time table for the classes</h3>
                </div>
                <ScheduleTable />
    </div>
  )
}

export default schedule
