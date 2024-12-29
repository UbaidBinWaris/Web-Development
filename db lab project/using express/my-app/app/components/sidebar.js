'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/router

const sidebarData = [
  { icon: '/icons/dashboard.svg', text: 'Dashboard', link: '/dashboard' },
  { icon: '/icons/enrollment.svg', text: 'Enrollments', link: '/enrollments' },
  { icon: '/icons/student.svg', text: 'Students', link: '/students' },
  { icon: '/icons/classroom.svg', text: 'Classroom', link: '/classroom' },
  { icon: '/icons/course.svg', text: 'Courses', link: '/courses' },
  { icon: '/icons/schedule.svg', text: 'Schedule', link: '/schedule' },
  { icon: '/icons/library.svg', text: 'Library', link: '/library' },
  { icon: '/icons/financial.svg', text: 'Financial', link: '/financial' },
  { icon: '/icons/about.svg', text: 'About Us', link: '/AboutUs' }, // Example link
];

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed left-0 top-48 bg-violet-600 text-white
        transition-all duration-300 ${isHovered ? 'w-64' : 'w-16'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className="h-full flex flex-col items-start justify-start py-4 gap-3">
        {sidebarData.map((item, index) => (
          <li
            key={index}
            className="flex items-center w-full px-4 group cursor-pointer transition-all py-2"
          >
            {/* Make the card a link using Next.js Link component */}
            <Link href={item.link} className="flex items-center w-full">
              <Image
                src={item.icon}
                alt={item.text}
                width={50}
                height={50}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              {/* Render the text with hover animation */}
              <span
                className={`whitespace-nowrap overflow-hidden px-7 transition-all duration-300 font-semibold ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
