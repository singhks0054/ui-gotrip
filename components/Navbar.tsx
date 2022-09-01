import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { navLinks } from '../data';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import Image from 'next/image';
import logo from '../public/logo.webp';
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className='bg-c1 container hidden lg:flex justify-between  py-2 text-sm  text-white '>
        <div className='flex gap-4 '>
          <p className='hidden sm:block'>needhelp@gotrip.com </p>
          <p className='hidden sm:block'>666 569 025077</p>
          <p className='hidden sm:block'>Broklyn Street Newyork</p>
        </div>

        <div className=' items-center gap-4 font-normal hidden lg:flex'>
          <FaFacebookF className=' hover:text-orange-500 cursor-pointer' />
          <FaTwitter className=' hover:text-orange-500 cursor-pointer' />
          <FaInstagram className=' hover:text-orange-500 cursor-pointer' />
          <FaLinkedin className=' hover:text-orange-500 cursor-pointer' />
        </div>
      </div>

      <nav className='container flex  shadow-xl fixed lg:static justify-between items-center py-4  font-semibold text-c1 bg-white z-20'>
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

        <div className='lg:flex uppercase items-center gap-8 hidden '>
          {navLinks.map(({ path, title }, i) => (
            <Link href={path} key={i}>
              <a className=' hover:text-orange-500'>{title}</a>
            </Link>
          ))}
        </div>
        {showMenu ? (
          <GrClose
            className='text-3xl bg-white rounded '
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <AiOutlineMenu
            className='lg:hidden text-3xl'
            onClick={() => setShowMenu(true)}
          />
        )}
      </nav>
      {showMenu && (
        <div className='flex w-screen flex-col fixed  mt-20 border-t-4 border-c1 text-c1 z-20 pt-6 p-4 transition-all duration-1000 bg-white'>
          {navLinks.map(({ path, title }, i) => (
            <Link href={path} key={i}>
              <a
                className={`mb-1 text-xl font-semibold w-fit p-2  hover:bg-villa uppercase ${
                  router.asPath === path && 'bg-c2 '
                }`}
                onClick={() => setShowMenu(false)}
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
