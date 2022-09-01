import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { ImLocation } from 'react-icons/im';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
export default function PackCard({ img }: StaticImageData | any) {
  return (
    <div className='flex flex-col rounded hover:shadow  bg-white border '>
      <div className=' '>
        <Image
          src={img}
          alt='package'
          height={400}
          width={500}
          className='hover:scale-125 transition-all duration-700 '
        />
      </div>
      <div className='px-4  py-4 font-semibold '>
        <p>
          <AiFillStar className='text-yellow-400 inline mr-2 text-2xl' />
          8.0 Superb
        </p>
        <h1 className='text-2xl my-2'>The Dark Forest Adventure</h1>
        <p>
          {' '}
          <span className='text-[rgb(76,175,164)] text-xl'>$1870</span> / Per
          Person
        </p>
        <div className='text-gray-400 flex justify-between items-center mt-4 text-lg'>
          <p>
            <AiOutlineClockCircle className='inline mr-2' /> 3 Days
          </p>
          <p>
            <ImLocation className='inline mr-2' /> Los Angeles
          </p>
        </div>
      </div>
    </div>
  );
}
