'use clinet';

import { Raleway } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import imag_logo from '@/public/img_1-removebg-preview.png'
import { AiOutlineInstagram } from "react-icons/ai";

const raleway = Raleway({
    weight: '500',
    subsets: ['latin']
});

import React from 'react'

function Footer() {
    return (
        <>

            <footer className='border h-[30rem] p-4 bg-black'>
                <p className={`text-white text-center mt-6 ${raleway.className}`}>AANAND CARPENTRY</p>

                <div className='mt-10 flex flex-col sm:flex-row justify-between px-6'>



                    <div className='text-white flex items-center justify-center flex-col flex-grow px-4'>
                        <p className={`${raleway.className}`} style={{ color: '#606660' }}>
                            © Copyright 2024 Aand carpentry | Brand
                        </p>

                        <p className={`${raleway.className}`} style={{ color: '#606660' }}>
                            Developed by
                        </p>
                        <Link href='https://www.instagram.com/patel.shrawana?igsh=eTIwanlnZDVnbmZr'>
                            <p className={`${raleway.className} border-b`} style={{ color: '#B89047' }}>
                                S H R A V A N A
                            </p>
                        </Link>
                    </div>

                    <div className='text-white flex-grow px-4'>
                        <Link href={'/'}>

                            <Image
                                alt='404 Not Found'
                                src={imag_logo}
                                width={400}  // Adjust the width as needed
                                height={400} // Adjust the height as needed
                                className='cursor-pointer'
                                priority
                            />
                        </Link>
                    </div>

                    <div className='text-white flex items-center justify-center sm:flex-row space-x-2 flex-grow px-4'>
                        <p className='font-serif'>
                            Follow Us:
                        </p>
                        <p>
                            <Link href='https://www.instagram.com/pacifistaayush?igsh=MWptZGEwczA5czJzYg=='>
                                <AiOutlineInstagram size={45} className='cursor-pointer' style={{ color: '#FE0161' }} />
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

