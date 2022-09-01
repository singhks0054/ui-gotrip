import IconCard from '../components/IconCard';
import { BsFillPlayFill } from 'react-icons/bs';
import Girl from '../components/Girl';
import Image from 'next/image';
import qoute from '../public/qoute.webp';

export default function about() {
  return (
    <>
      <div className='bg-about w-full h-[45vh] flex justify-center flex-col items-center bg-cover text-white '>
        <h1 className='text-3xl font-extrabold absolute tracking-wider'>
          About Us
        </h1>
      </div>

      <Girl />

      <IconCard />

      <div className='flex flex-col text-center text-white bg-cover justify-center items-center bg-water h-[90vh]'>
        <div className='border border-white rounded-sm mb-8'>
          <button className='p-8 bg-c2 m-4 rounded-sm '>
            <BsFillPlayFill className='text-2xl text-black ' />
          </button>
        </div>
        <p className='text-lg font-semibold'>
          LOVE WHERE YOU&apos;RE GOING IN THE PERFECT TIME
        </p>
        <h1 className='text-4xl lg:text-6xl font-semibold mt-4'>
          Tripo is a World Leading Online <br /> Tour Booking Platform
        </h1>
      </div>

      <div className='flex flex-col text-center text-white justify-center bg-cover items-center bg-tree h-[70vh]'>
        <Image src={qoute} height={70} width={70} alt='qoute' />
        <p className='text-lg px-4 lg:w-1/2 mx-auto mt-6 text-c1 font-semibold'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit assumenda sed beatae eum quam autem quidem facere fuga
          possimus est?
        </p>
        <h1 className='text-6xl font-semibold mt-4'>- Jessa Inn</h1>
      </div>
    </>
  );
}
