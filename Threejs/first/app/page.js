'use client';
// pages/index.js
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ThreeScene with SSR disabled
const ThreeScene = dynamic(() => import('../Components/ThreeSeen'), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <h1>Three.js in Next.js</h1>
      <ThreeScene />
    </div>
  );
};

export default HomePage;
