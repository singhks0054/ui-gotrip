import React from 'react';

export default function Hero() {
  return (
    <main className='bg-hero bg-cover h-[95vh] bg-center flex flex-col font-semibold gap-4 justify-center items-start'>
      <div>
        <h1 className='text-c2 mx-[8vw] font-normal font-f2 text-7xl lg:text-8xl'>
          Find your next tour!
        </h1>
        <p className='pl-[8vw] text-2xl mt-4  text-white '>
          Where would you like to go?{' '}
        </p>
      </div>
      <div className='flex flex-col sm:flex-row py-6 px-8 justify-around  mx-[8vw] w-[84vw] rounded bg-[#c2dfca66] gap-4'>
        <input
          type='text'
          className='outline-none p-4 w-full rounded text-xl'
          placeholder='When would you like to go?'
        />
        <input
          type='date'
          className='outline-none w-full p-4 rounded text-xl'
          placeholder='When'
        />
        <button className='bg-c2 py-2 px-16 rounded text-lg'>SEARCH</button>
      </div>
    </main>
  );
}
