import type { NextPage } from 'next';
import Hero from '../components/Hero';
import IconCard from '../components/IconCard';
import PackCard from '../components/PackCard';
import { packData } from '../data';
import { BsFillPlayFill } from 'react-icons/bs';
import Girl from '../components/Girl';
import Image from 'next/image';
import qoute from '../public/qoute.webp';
import xhome1 from '../public/xhome1.webp';
import xhome2 from '../public/xhome2.webp';
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <IconCard />
      <h1 className='text-lg text-center font-semibold text-yellow-500'>
        FEATURED TOURS PACKAGES
      </h1>
      <h1 className='text-6xl font-extrabold text-c1 text-center'>
        Favourite Places
      </h1>
      <section className='grid sm:grid-cols-2 lg:grid-cols-3 container gap-8 my-16'>
        {packData.slice(0, 6).map((img, index) => (
          <PackCard key={index} img={img} />
        ))}
      </section>

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

      <Girl />

      <div className='flex flex-col text-center text-white justify-center bg-cover items-center bg-tree h-[70vh]'>
        <Image src={qoute} height={70} width={70} alt='qoute' />
        <p className='text-lg px-4 lg:w-1/2 mx-auto mt-6 text-c1 font-semibold'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit assumenda sed beatae eum quam autem quidem facere fuga
          possimus est?
        </p>
        <h1 className='text-6xl font-semibold mt-4'>- Jessa Inn</h1>
      </div>

      <section className='my-16'>
        <h1 className='text-lg text-center font-semibold text-yellow-500'>
          OUR RECENT NEWS
        </h1>
        <h1 className='text-6xl font-extrabold text-c1 text-center'>
          Tourist Blog
        </h1>
        <main className='grid lg:grid-cols-2 gap-8 my-8 container'>
          <div>
            <Image
              src={xhome1}
              height={400}
              width={500}
              className='hover:scale-125 transition-all duratio-300 '
              alt='blod'
            />
            <div className='flex items-center gap-8'>
              <p className='bg-blue-900 py-4 font-semibold text-white px-12 text-xl'>
                24 <br /> Nov
              </p>
              <p className='font-semibold bg-white'>
                Tips For Taking A Long-Term Trip With Kids.
                <br /> Read More
              </p>
            </div>
          </div>
          <div>
            <Image
              src={xhome2}
              height={400}
              width={500}
              className='hover:scale-125 transition-all duratio-300 '
              alt='blod'
            />
            <div className='flex items-center gap-8'>
              <p className='bg-blue-900 py-4 font-semibold text-white px-12 text-xl'>
                24 <br /> Nov
              </p>
              <p className='font-semibold'>
                Tips For Taking A Long-Term Trip With Kids.
                <br /> Read More
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
