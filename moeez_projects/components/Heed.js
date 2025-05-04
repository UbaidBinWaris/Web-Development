"use client";
import React from "react";
import Image from "next/image";

export const Heed = () => {
  return (
    <div className="w-full border-2 m-2 py-7 px-20 flex justify-between">
      
      <div className="border-2 h-10 sm:w-56 w-96 md:h-18 md:w-60 lg:h-30 relative">
        <Image src="/assets/header-logo.svg" alt="Description" fill className="object-contain h-auto w-20"/>
      </div>

      <div className="border-2 h-18 w-7/11 flex justify-center items-center">
        <ul className="flex justify-between items-center w-full border-blue-600 border-2 p-2 m-2 ">
          <li className="border-2 h-4 w-16"></li>
          <li className="border-2 h-4 w-16"></li>{" "}
          <li className="border-2 h-4 w-16"></li>{" "}
          <li className="border-2 h-4 w-16"></li>{" "} 
        </ul>
      </div>
    </div>
  );
};
