'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/app/components/header';
import Sidebar from '@/app/components/sidebar';
import Image from 'next/image';
import '@/app/globals.css';


const cardData = [
  { title: 'Total Students', icon: '/icons/total_students.svg', key: 'students' },
  { title: 'Faculty', icon: '/icons/faculty.svg', key: 'faculty' },
  { title: 'Enrollments', icon: '/icons/enrolments.svg', key: 'enrollments' },
  { title: 'Departments', icon: '/icons/department.svg', key: 'departments' },
];



const Dashboard = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard-data'); // API route to fetch data
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container mx-auto p-6 text-center"> 
        <h1 className="text-3xl font-bold mb-4 justify-center flex tracking-wide ">Dashboard</h1>
        <p className="mb-6 text-gray-600 text-xl tracking-wider">Welcome to your dashboard</p>
        
        {/* Cards Section */}
        <div className="grid grid-cols-4 gap-6 pl-20">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-600 shadow-md rounded-lg p-4 border w-[250px] hover:shadow-lg transition-shadow"
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={60}
                height={60}
                className="mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{card.title}</h2>
                <p className="text-xl font-bold text-violet-300">
                  {data[card.key] !== undefined ? data[card.key] : 'Loading...'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
