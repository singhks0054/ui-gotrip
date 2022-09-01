import React from 'react';
import PackCard from '../components/PackCard';
import { packData } from '../data';
import pack from '../public/pack.webp';

export default function packag() {
  return (
    <>
      <div className='bg-pack w-full h-[45vh] flex justify-center flex-col items-center bg-cover text-white '>
        <h1 className='text-3xl font-extrabold absolute tracking-wider'>
          Our Package
        </h1>
      </div>
      <h1 className='text-lg text-center mt-8 font-semibold text-yellow-500'>
        FEATURED TOURS PACKAGES
      </h1>
      <h1 className='text-6xl font-extrabold text-c1 text-center'>
        Favourite Places
      </h1>
      <section className='grid sm:grid-cols-2 lg:grid-cols-3 container gap-8 my-16'>
        {packData.map((img, index) => (
          <PackCard key={index} img={img} />
        ))}
      </section>
    </>
  );
}
