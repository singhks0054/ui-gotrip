import Image from 'next/image';
import React from 'react';
import xsupport from '../public/xsupport.webp';
export default function Girl() {
  return (
    <section className='grid lg:grid-cols-2 container my-16 justify-center items-center gap-16'>
      <div className='z-0'>
        <Image src={xsupport} height={600} width={400} alt={'girl adventure'} />
        <h1 className='text-4xl w-fit py-2 px-4 relative -top-40 -right-60 -rotate-90 text-yellow-400 font-bold bg-blue-900 opacity-900'>
          SINCE 1992{' '}
        </h1>
      </div>
      <div>
        <p className='text-orange-500 text-xl mb-4'>ABOUT OUR COMPANY</p>
        <h1 className='text-6xl text-c1 font-bold mb-4'>
          We are Go Trip <br />
          Ravels Support Company
        </h1>
        <p className='text-lg font-medium'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <ul className='my-5 font-medium accent-blue-800'>
          <li>
            <input type='checkbox' className='mr-2 w-4 h-4 mb-4' /> Lorem ipsum
            dolor sit amet.
          </li>
          <li>
            <input type='checkbox' className='mr-2 w-4 h-4 mb-4' /> Consectetur
            adipisicing elit.
          </li>
          <li>
            <input type='checkbox' className='mr-2 w-4 h-4 mb-4' /> Ut enim ad
            minim veniam.
          </li>
          <li>
            <input type='checkbox' className='mr-2 w-4 h-4 mb-4' /> Lorem ipsum
            dolor sit amet.
          </li>
        </ul>
        <button className='text-blue-900 border font-semibold hover:bg-blue-900 hover:text-white rounded border-blue-900 py-2 px-4'>
          ABOUT US
        </button>
      </div>
    </section>
  );
}
