import React from 'react'
import Image from 'next/image'

export const Button = ({
    label,
    iconURL,
  }) => {
  return (
    <button className='flex justify-center items-center gap-2 px-6 py-4  font-primary bg-orange-500 rounded-full text-lg leading-none'>
        {label}
        {iconURL && (
            <Image
                src={iconURL}
                alt="arrow"
                width={20}
                height={20}
                className='ml-2 rounded-full bg-orange-500 w-5 h-5'
            />
        )}
    </button>
  )
}
