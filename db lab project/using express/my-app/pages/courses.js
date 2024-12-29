'use client';
import React from 'react'
import { useEffect , useState } from 'react'
import "@/app/globals.css";
import Header from '@/app/components/header';
import Sidebar from '@/app/components/sidebar';
import { CourseTable } from '@/app/components/CourseTable';

const courses = () => {
  return (
    <div>
      <Header />
      <Sidebar />
        <div className="container mx-auto p-6">
            <h1 className="flex justify-center text-3xl p-5 mt-5">
            Courses
            </h1>
            <h3 className='flex justify-center text-gray-400'>There are fixed courses by our University</h3>
            </div>
            <CourseTable />
    </div>
  )
}

export default courses
