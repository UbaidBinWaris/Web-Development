import React from 'react'

import { shoes, statistics } from "../constants";
// import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../../public/assets/images";
import { arrowRight } from "../../public/assets/icons";
import Button from '../Button';


export const Hero = () => {
  return (
    <section className='w-full pl-10'>
      <div className='pt-28 text-2xl text-orange-500 '>
        Our Summer Collection
      </div>

      <span className='text-7xl font-bold pt-20 gap-4 flex flex-col'>
        The New Arival
      <br />
      <span>
      <span className='text-orange-400'>Nike</span> Shoes
      </span>
      </span>

      <p className='pt-10 text-gray-500 '>
      Discover the latest Nike shoes, designed for performance and style.
      <br />
      Discover stylish Nike arrivals, quality comfort, and innovation for
      your active life.
      </p>

      <Button label='Shop now' iconURL={arrowRight} />
    </section>
  )
}
