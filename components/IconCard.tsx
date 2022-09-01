import React from 'react';
import { GrUserManager } from 'react-icons/gr';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { SiYourtraveldottv } from 'react-icons/si';
import { GoThumbsup } from 'react-icons/go';
export default function IconCard() {
  return (
    <section className='grid grid-cols-2 lg:grid-cols-4 my-16 container gap-4  text-c1 font-semibold '>
      <div className='flex flex-col justify-center items-center p-8 border  hover:shadow-md border-blue-100 rounded'>
        <GrUserManager className='text-6xl ' />
        <p className='mt-5'>8000+ Our Local Guides</p>
      </div>
      <div className='flex flex-col justify-center items-center p-8 border  hover:shadow-md border-blue-100 rounded'>
        <VscWorkspaceTrusted className='text-6xl ' />
        <p className='mt-5 '>100% Trusted Tour Agency</p>
      </div>
      <div className='flex flex-col justify-center items-center p-8  border hover:shadow-md border-blue-100 rounded'>
        <SiYourtraveldottv className='text-6xl ' />
        <p className='mt-5'>28+ Years of Travel Experience</p>
      </div>
      <div className='flex flex-col justify-center items-center p-8  border hover:shadow-md border-blue-100 rounded'>
        <GoThumbsup className='text-6xl ' />
        <p className='mt-5'>98% Our Travelers are Happy</p>
      </div>
    </section>
  );
}
