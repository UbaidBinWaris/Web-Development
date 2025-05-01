// "use client";
import React from "react";
//import { shoes, statistics } from "../constants";
// import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../../public/assets/images";
import { arrowRight } from "../../public/assets/icons";
import { Button } from "../Button";
import { getStatistics , getShoes } from "../constants/my_local_data";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="w-full px-4 sm:px-10">
      {/* Section Title */}
      <div className="pt-16 sm:pt-28 text-lg sm:text-2xl text-orange-500">
        Our Summer Collection
      </div>

      {/* Heading */}
      <div className="text-3xl sm:text-7xl font-bold pt-6 sm:pt-20 flex flex-col gap-2 sm:gap-4">
        <span>The New Arrival</span>
        <span>
          <span className="text-orange-400">Nike</span> Shoes
        </span>
      </div>

      {/* Paragraph */}
      <p className="pt-4 sm:pt-10 text-sm sm:text-base text-gray-600 leading-relaxed max-w-md sm:max-w-2xl">
        Discover the latest Nike shoes, designed for performance and style.
        <br className="hidden sm:block" />
        Explore stylish arrivals with comfort and innovation for your active
        lifestyle.
      </p>

      {/* Button */}
      <div className="pt-8 sm:pt-20">
        <Button label="Shop now" iconURL={arrowRight} />
      </div>

      {/* Statistics */}
      <div className="pt-10 sm:pt-20 w-[30vw] sm:w-full">
        <div className="flex flex-row gap-10 sm:gap-16">
          {getStatistics().map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[80px] text-center"
            >
              <span className="text-xl sm:text-4xl font-bold">
                {item.value}
              </span>
              <span className="text-xs sm:text-base text-gray-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 justify-end max-w-[100vw] bg-orange-400">
        

          <div>
            <Image
              src={bigShoe1}
              alt="Big Shoe"
              width={500}
              height={500}
              className="absolute top-0 right-0 w-[50vw] sm:w-[40vw] lg:w-[30vw] xl:w-[20vw]"
            />
          </div>



        <div className="flex flex-wrap gap-4">
          {getShoes().map((shoe, index) => (
              <Image src={shoe.thumbnail} alt={`Shoe ${index + 1}`} width={200} height={200} key={index} />
            ))}
        </div>
      </div>

      

    </section>
  );
};
