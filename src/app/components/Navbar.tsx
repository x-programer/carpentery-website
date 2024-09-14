'use client';
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const hancleNav = () => {
    //here we will set opposite menuopen value..
    setMenuOpen(!menuOpen);
    console.log(!menuOpen);
  }

  return (
    <nav className='fixed w-full h-24 z-50 bg-white'>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <Link href={'/'}>
          <Image
            alt='404 Not Found'
            src={logo}
            width={115}
            height={65}
            className='cursor-pointer'
            priority
          />
        </Link>
        <div className='hidden sm:flex'>
          <ul className='hidden sm:flex font-[family-name:var(--font-geist-sans)]'>

            <Link href={'/services'}>
              <li className='ml-10 uppercase '>SERVICES</li>
            </Link>
            <Link href={'/portfolio'}>
              <li className='ml-10 uppercase '>OUR WORK</li>
            </Link>
            <Link href={'/about'}>
              <li className='ml-10 uppercase '>ABOUT</li>
            </Link>
            <Link href={'/contact'}>
              <li className='ml-10 uppercase '>CONTACT</li>
            </Link>

          </ul>
        </div>
        {/* Hamburger menu bar */}
        <div onClick={hancleNav} className='sm:hidden cursor-pointer pl-24'>
          <AiOutlineMenu size={25} />
        </div>

        {/* for mobile screen */}
        <div className={
          menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-white p-10 ease-in duration-500 " : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }>
          <div className='flex w-full items-center justify-end'>
            <div className='cursor-pointer' onClick={hancleNav}>
              <AiOutlineClose size={25} />
            </div>
          </div>

          <div className='flex-col py-4'>
            <ul className='font-[family-name:var(--font-geist-sans)]'>

              <Link href={'/services'}>
                <li onClick={() => setMenuOpen(false)} className='py-4 uppercase hover:text-purple-600 '>SERVICES</li>
              </Link>
              <Link href={'/portfolio'}>
                <li onClick={() => setMenuOpen(false)} className='py-4 uppercase hover:text-purple-600'>OUR WORK</li>
              </Link>
              <Link href={'/about'}>
                <li onClick={() => setMenuOpen(false)} className='py-4 uppercase hover:text-purple-600'>ABOUT</li>
              </Link>
              <Link href={'/contact'}>
                <li onClick={() => setMenuOpen(false)} className='py-4 uppercase hover:text-purple-600'>CONTACT</li>
              </Link>

            </ul>
          </div>
          <div className='flex flex-row pt-10 items-start'>
            <AiOutlineInstagram size={25} className='cursor-pointer' />
          </div>

          <div className='flex flex-row pt-10 items-start'>

            <Link href={'/'}>
              <Image
                alt='404 Not Found'
                src={logo}
                width={115}
                height={65}
                className='cursor-pointer'
                priority
              />
            </Link>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar