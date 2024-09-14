import Image from 'next/image'
import React from 'react'
import service_1 from '@/public/services_1.jpg'
import b_1 from '@/public/b_1.jpg'
import b_2 from '@/public/b_2.jpg'
import b_3 from '@/public/b_3.jpg'
import Link from 'next/link'
import { AiOutlineInstagram } from 'react-icons/ai'
import Footer from '../components/Footer'
import { Raleway, Lato } from 'next/font/google'

const raleway = Raleway({
    weight: '600',
    subsets: ['latin']
});

const lato = Lato({
    weight: '400',
    subsets: ['latin']
})

function page() {
    return (
        <>
            <div className='flex'>
                <div className='relative w-full h-[30rem] sm:h-[40rem]'>
                    <Image
                        src={service_1}
                        alt='404 Not Found'
                        priority
                        className='cursor-pointer'
                        style={{ filter: 'blur(4px)' }}
                        layout='fill'
                        objectFit='cover'
                    />
                    <div className='absolute inset-0 flex flex-col items-center justify-center'>
                        <div className={`${raleway.className} text-white sm:text-white font-thin mt-6 text-5xl border hover:border-white hover:text-black border-black p-8`}>
                            S E R V I C E S
                        </div>
                        <p className='text-white sm:text-white pt-7'>LUXURY RESIDENCES  | COMMERCIAL  | HOSPITALITY</p>
                    </div>
                </div>

            </div>

            {/* service second part */}
            <div className='flex items-center justify-center pt-9'>

                <div className={`${raleway.className} flex space-x-2`}>
                    <p className='uppercase text-black' >
                        p r e m i u m </p>
                    <p className='uppercase' style={{ color: '#777777' }}> q u a l i t y</p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center sm:px-14 px-5 pt-10 space-x-2 space-y-4 md:space-y-0'>
                <div className=''>
                    <Image
                        src={b_1}
                        alt='404 Not Found'
                        height={700}
                    />

                    <p className='pt-6 text-center'>LUXURY RESIDENCES</p>
                    <p className={`${lato.className} sm:pt-4 pt-6 text-start0`} style={{ color: '#777777', lineHeight: '2' }} >
                        At Aanand Carpentry we pay extraordinary attention<br />
                        to every detail to ensure and deliver the highest level<br />
                        of quality in our projects and surpass your expections<br />
                        when giving your living space a new look or building  <br />
                        your dream home.
                    </p>

                    <ol className={`${lato.className} pt-4 list-disc `} style={{ color: '#777777', lineHeight: '2' }}>
                        Our works includes:
                        <div className='ml-8'>

                            <li>Kitchen & bathroom cabinetry</li>
                            <li>Built - ins</li>
                            <li>Interior doors</li>
                            <li>Decorative beams and columns</li>
                            <li>Closet</li>
                            <li>Wall paneling</li>
                            <li>Handcrafted furniture</li>
                        </div>
                    </ol>

                    <div className='mt-7'>
                        <Link href={'/contact'}>
                            <button className='border-2 border-spacing-3 border-black px-5 py-3 hover:bg-black hover:text-white'>
                                CONTACT US
                            </button>
                        </Link>
                    </div>
                    <div className='py-4'></div>

                </div>
                <div className=''>
                    <Image
                        src={b_2}
                        alt='404 Not Found'
                        height={700}
                    />
                    <p className='pt-6 text-center'>COMMERCIAL</p>

                    <p className={`${lato.className} sm:pt-4 pt-6 text-start0`} style={{ color: '#777777', lineHeight: '2' }} >
                        We pride ourselves of being a preferred millwork<br />
                        contractor among local builders, designers and <br />
                        architects for the commitment and professionalism <br /> we put in our work. We manage our highly trained <br />
                        carpenters to complete any commercial
                    </p>

                    <ol className={`${lato.className} pt-4 list-disc `} style={{ color: '#777777', lineHeight: '2' }}>
                        Our works includes:
                        <div className='ml-8'>

                            <li>Lobbies and reception desks</li>
                            <li>Wall and ceiling panels</li>
                            <li>Round, oval and square columns </li>
                            <li>Corian manufacturing </li>
                            <li>Elevator cabin panels.</li>
                            <li>Doors & windows</li>
                            <li>Interior and Exterior Finishes</li>
                        </div>
                    </ol>

                    <div className='mt-7'>
                        <Link href={'/contact'}>
                            <button className='border-2 border-spacing-3 border-black px-5 py-3 hover:bg-black hover:text-white'>
                                CONTACT US
                            </button>
                        </Link>
                    </div>
                    <div className='py-4'></div>

                </div>

                <div className=''>
                    <Image
                        src={b_3}
                        alt='404 Not Found'
                        height={700}
                    />
                    <p className='pt-4 text-center'>HOSPITALITY</p>

                    <p className={`${lato.className} sm:pt-4 pt-6 text-start0`} style={{ color: '#777777', lineHeight: '2' }} >
                        At Aanand Carpentry we understand the needs of <br />
                        hospitality  properties. <br />
                        Our dedicated staff works hard to  meet the high <br />
                        standards and requirements that come with these type <br />
                        of projects.
                    </p>

                    <ol className={`${lato.className} pt-4 list-disc `} style={{ color: '#777777', lineHeight: '2' }}>
                        Our works includes:
                        <div className='ml-8'>

                            <li>Bars</li>
                            <li>Reception desk</li>
                            <li>Wainscot paneling</li>
                            <li>Wall and ceilling panels</li>
                            <li>Round oval square columns</li>
                            <li>Corean manufacturing</li>
                            <li>Interior and Exterior Finishes</li>
                        </div>
                    </ol>

                    <div className='mt-7'>
                        <Link href={'/contact'}>
                            <button className='border-2 border-spacing-3 border-black px-5 py-3 hover:bg-black hover:text-white'>
                                CONTACT US
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

            <div className='border-b-2 pt-10 mx-5'></div>

            {/* Review */}
            <div className='flex flex-col items-center justify-center pt-10'>

                <p className='uppercase'>Customer Review</p>

                <div className='py-4'></div>
                <p className='italic px-4' style={{ color: '#777777' }}>
                    This is simply the best carpentry company in the Adhartal Area. Great Quality, Great timing, Fab Furniture. I am very happy I found them!
                </p>
                <div className='py-4'></div>

                <p className='italic border-b' style={{ color: '#777777' }}> - Shubham Patel</p>

            </div>

            <div className='border-b-2 pt-10 mx-10' style={{ borderColor: '#B89047' }}></div>

            <div className='py-4'></div>

            <div className='flex flex-col items-center text-2xl justify-center'>

                <p style={{ color: '#B89047' }}> AANAND CARPENTRY</p>

                <Link href='https://www.instagram.com/pacifistaayush?igsh=MWptZGEwczA5czJzYg==' className='pt-5'>
                    <AiOutlineInstagram size={75} className='cursor-pointer' style={{ color: '#B89047' }} />
                </Link>

            </div>

            <div className='py-4'></div>
            <Footer />

        </>
    )
}

export default page