'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import c_1 from '../../public/c_1.jpg'
import c_2 from '../../public/c_2.jpg'
import c_3 from '../../public/c_3.jpg'
import Link from 'next/link'
import lux_img from '@/public/lux_img.jpg'
import AC_img from '@/public/AC_Whatwedo.png'
import bl_img from '@/public/bl_img_1.jpg'
import imag_logo from '@/public/img_1-removebg-preview.png'
import b_1 from '@/public/b_1.jpg'
import b_2 from '@/public/b_2.jpg'
import b_3 from '@/public/b_3.jpg'
import lower_img from '@/public/lower_.png'

import { Raleway } from 'next/font/google'
import { AiOutlineInstagram } from 'react-icons/ai'

const images = [
    c_1,
    c_2,
    c_3
    // Add more image paths here
];

const raleway = Raleway({
    weight: '500',
    subsets: ['latin']
})

function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <>
            <div className='h-screen flex items-center justify-center'>
                <div className="relative w-full h-[40rem] sm:h-80 md:h-96 lg:h-[600px] overflow-hidden z-10">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Image src={image} alt={`Slide ${index}`} layout="fill" objectFit="cover" />
                        </div>
                    ))}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    >
                        ◀
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    >
                        ▶
                    </button>
                </div>
            </div>

            <div className='text-xl font-extrabold flex items-center justify-center space-x-4  '>
                <p className='border-b border-black hover:border-t'> A A N A N D </p> <p className='border-b hover:border-t border-black'>F U R N I T U R E</p>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 pt-5 px-2'>
                <div className='uppercase font-serif sm:px-3'>
                    Architectural woodwork & Luxury Millwork
                    <p className='font-light italic lowercase'>
                        Is a family owned and operated custom-woodwork corporation located in Miami, <br /> Florida. For many generations superior craftsmanship has been a tradition in the
                        <br /> Martinez Family, our family. Today, Roberto & Robeisy Martinez (3rd and 4th <br />
                        Generations carpenters)
                    </p>
                </div>
                <div>
                    <ul className='space-y-5'>
                        <li className='font-bold font-serif'>P H O N E :</li>
                        <li className=''>+91 8103774500</li>
                        <li className='font-serif font-bold'>L O C A T I O N : </li>
                        <li>SANJAY NAGAR ADHARTAL JABALPUR PIN: 482004</li>
                        <li>
                            <Link href={'/contact'}>
                                <button className='border-2 border-spacing-3 border-black p-3 hover:bg-black hover:text-white'>
                                    GET IN TOUCH
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mid part */}
            <div className='relative pt-9'>
                <Image
                    alt='404 Not Found'
                    src={lux_img}
                    className='cursor-pointer'
                    priority
                />
                <div className='absolute inset-0 flex items-center justify-center space-x-10'>
                    <h1 className='text-white sm:text-4xl font-bold border border-black hover:border-white hover:text-black p-3'>S U P E R I O R </h1>
                    <h1 className='text-white sm:text-4xl font-bold border border-black hover:border-white  p-3'>C R A F T S M A N S H I P</h1>
                </div>
            </div>

            {/* mid thoird part */}
            <div className='flex flex-col md:flex-row items-center justify-center pt-9 px-5 space-x-14'>
                <div className='border border-black'>
                    <Image src={AC_img} alt='404 Not Found' />
                </div>
                <div className='spcae-y-3 sm:pt-5 pt-5'>
                    <div className='flex space-x-4 text-2xl border-black'>
                        <p>W H A T</p>
                        <p>WE</p>
                        <p>D O ?</p>
                    </div>
                    <div className='font-thin mt-3 italic'>
                        <p>We provide our clients with years of experience of work </p>
                        <p>hardwoods, traditional plywood and the most exotic wood veneers</p>
                        <p>which set the standard for a superior craftsmanship and an</p>
                        <p>exceptional finish. Our finishing team is capable of matching any</p>
                        <p>existing finish or creates the desirable client’s expectation. </p>
                    </div>
                    <div className='mt-3'>
                        <ol className='list-disc pl-5 uppercase space-y-3'>
                            <li>Luxury residences</li>
                            <li>condominium lobby</li>
                            <li>restaurant</li>
                            <li>commercial </li>
                            <li>handcrafted furniture</li>
                            <li>CUSTOM SOLID SURFACING MANUFACTURING</li>
                        </ol>
                    </div>

                    <div className='mt-7'>
                        <Link href={'/services'}>
                            <button className='border-2 border-spacing-3 border-black p-3 hover:bg-black hover:text-white'>
                                OUR SERVICES
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* mid-4th part */}
            <div className='pt-10'>
                <div className='h-[40rem] relative'>
                    <Image
                        alt='404 Not Found'
                        src={bl_img}
                        layout='fill'
                        objectFit='cover'
                        className='cursor-pointer'
                        priority
                    />
                    <div className='absolute inset-0 flex flex-col items-center justify-center'>
                        <div className='border-2 border-white'>

                            <Image
                                alt='404 Not Found'
                                src={imag_logo}
                                width={400}  // Adjust the width as needed
                                height={400} // Adjust the height as needed
                                className='cursor-pointer'
                                priority
                            />
                        </div>
                        <div className={`${raleway.className} text-white font-bold mt-6 text-2xl border-b-2`}>AANAND  CARPENTER</div>
                        {/* <div className={`${raleway.className} text-white font-bold mt-6 text-2xl flex `}>
                            <p>AANAND CARPENTER</p>
                            <p> COMMERCIAL</p>
                            <p>HOSPITALITY</p>
                            
                        </div> */}
                    </div>
                </div>

            </div>
            <div className='flex flex-col md:flex-row items-center justify-center px-4 pt-10 space-x-2 space-y-4 md:space-y-0'>
                <div className=''>
                    <Image
                        src={b_1}
                        alt='404 Not Found'
                        height={900}
                    />
                    <p className='pt-4 text-center'>LUXURY RESIDENCES</p>
                </div>
                <div className=''>
                    <Image
                        src={b_2}
                        alt='404 Not Found'
                        height={900}
                    />
                    <p className='pt-4 text-center'>COMMERCIAL</p>
                </div>
                <div className=''>
                    <Image
                        src={b_3}
                        alt='404 Not Found'
                        height={900}
                    />
                    <p className='pt-4 text-center'>HOSPITALITY</p>
                </div>
            </div>
            <div className='border-2 border-black mx-5 mt-10'></div>
            <div className='flex items-center justify-center mt-10'>
                <Link href={'/portfolio'}>
                    <button className='border-2 border-spacing-3 border-black p-3 hover:bg-black hover:text-white'>
                        SEE PORTFOLIO
                    </button>
                </Link>
            </div>
            <div className='border-2 border-black mx-5 mt-10'></div>

            <div className=' flex items-center justify-center'>
                <Image
                    src={lower_img}
                    alt='404 Not Found'
                    height={400}
                />
            </div>

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

export default HeroSection
//previous..