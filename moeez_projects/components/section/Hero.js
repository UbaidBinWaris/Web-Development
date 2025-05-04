"use client";

import React, { useState } from "react";
import Image from "next/image";
import { bigShoe1 } from "../../public/assets/images";
import { arrowRight } from "../../public/assets/icons";
import { Button } from "../Button";
import { getStatistics, getShoes } from "../constants/my_local_data";

const ShoeCard = ({ shoe, selected, onClick }) => (
  <div
    className={`relative rounded-xl p-4 sm:p-3 w-[130px] h-[130px] sm:w-[100px] sm:h-[100px] 
                flex items-center justify-center transition-all duration-300
                ${selected ? "border-2 border-orange-500" : "border-2 border-transparent"}
                bg-[#E9ECFC] cursor-pointer`}
    onClick={onClick}
  >
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
        <path d="M0,180 C50,160 150,160 200,180" stroke="#c4c8e3" strokeWidth="2" fill="none" />
        <path d="M0,150 C50,130 150,130 200,150" stroke="#c4c8e3" strokeWidth="2" fill="none" />
      </svg>
    </div>
    <Image
      src={shoe.thumbnail}
      alt={shoe.name}
      width={100}
      height={100}
      className="object-contain z-10"
    />
  </div>
);

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className="w-full px-4 sm:px-10 pt-16 sm:pt-28">
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-20">
        {/* Left Side: Text Content */}
        <div className="flex-1">
          <div className="text-lg sm:text-2xl text-orange-500">Our Summer Collection</div>

          <div className="text-3xl sm:text-7xl font-bold pt-6 sm:pt-20 flex flex-col gap-2 sm:gap-4">
            <span>The New Arrival</span>
            <span>
              <span className="text-orange-400">Nike</span> Shoes
            </span>
          </div>

          <p className="pt-4 sm:pt-10 text-sm sm:text-base text-gray-600 leading-relaxed max-w-md sm:max-w-2xl">
            Discover the latest Nike shoes, designed for performance and style.
            <br className="hidden sm:block" />
            Explore stylish arrivals with comfort and innovation for your active lifestyle.
          </p>

          <div className="pt-8 sm:pt-20">
            <Button label="Shop now" iconURL={arrowRight} />
          </div>

          {/* Statistics */}
          <div className="pt-10 sm:pt-20 w-full">
            <div className="flex flex-row gap-10 sm:gap-16 flex-wrap">
              {getStatistics().map((item, index) => (
                <div key={index} className="flex flex-col items-center min-w-[80px] text-center">
                  <span className="text-xl sm:text-4xl font-bold">{item.value}</span>
                  <span className="text-xs sm:text-base text-gray-500">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Shoe Image */}
        <div className="flex-1 flex flex-col items-center md:items-end pr-20 lg:pr-12">
          <Image
            src={bigShoeImg}
            alt="Big Shoe"
            width={600}
            height={600}
            className="object-contain w-full max-w-[280px] sm:max-w-md lg:max-w-xl"
          />

          <div className="flex flex-wrap gap-4 sm:gap-6 pt-6 pb-6 justify-center md:justify-end">
            {getShoes().map((shoe, index) => (
              <ShoeCard
                key={index}
                shoe={shoe}
                selected={shoe.thumbnail === bigShoeImg}
                onClick={() => setBigShoeImg(shoe.thumbnail)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
