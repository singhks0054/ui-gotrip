import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.webp';
export default function Footer() {
  return (
    <footer className='container text-white bg-[rgb(9,31,51)]'>
      <div className='mx-6 py-10 text-center'>
        <div className='grid grid-1 grid-cols-2  lg:grid-cols-4 gap-8'>
          <div>
            <div className='  font-semibold mb-4 flex items-center justify-start '>
              <Link href='/'>
                <Image
                  src={logo}
                  height={50}
                  width={120}
                  alt={'logo'}
                  quality={100}
                  className='cursor-pointer'
                />
              </Link>
            </div>
            <p className='font-thin text-start '>
              Lorem iaspsum doldfor sit amvset, consectetur adipisicing cvelit
              csed do eiusmod tempor incididucvccnt ut labovre.
            </p>
          </div>

          <div>
            <h6 className=' font-semibold mb-4 text-start'>New Products</h6>
            <ul className='text-start font-thin'>
              <li className='mb-1 text-gray-300 cursor-pointer hover:text-orange-500'>
                Woman Cloth
              </li>
              <li className='mb-1 text-gray-300 cursor-pointer hover:text-orange-500'>
                Fashion Accessories
              </li>
              <li className='mb-1 text-gray-300 cursor-pointer hover:text-orange-500'>
                Man Accessories
              </li>
              <li className='mb-1 text-gray-300 cursor-pointer hover:text-orange-500'>
                Rubber made Toys
              </li>
            </ul>
          </div>
          <div className='text-start '>
            <h6 className=' font-semibold mb-4 flex justify-start '>
              Quick Menu
            </h6>
            <Link href='/hotel'>
              <a className='font-thin block hover:text-orange-500'>Hotels</a>
            </Link>
            <Link href='/about'>
              <a className='font-thin block hover:text-orange-500'>About</a>
            </Link>
            <Link href='/blog'>
              <a className='font-thin block hover:text-orange-500'>Blog</a>
            </Link>
          </div>
          <div>
            <h6 className=' font-semibold mb-4 text-start'>Support</h6>
            <ul className='font-thin text-start'>
              <li className='mb-1 text-gray-300 cursor-pointer hover:text-orange-500'>
                Frequently Asked Questions
              </li>
              <li className='mb-1 text-gray-300 cursor-pointer hover:text-orange-500'>
                Terms & Conditions
              </li>
              <li className='mb-1 text-gray-300 cursor-pointer hover:text-orange-500'>
                Privacy Policy{' '}
              </li>
              <li className='mb-1 text-gray-300 cursor-pointer hover:text-orange-500'>
                Report \a Payment Issue
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
