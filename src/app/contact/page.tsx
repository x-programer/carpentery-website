import Image from 'next/image'
import React from 'react'
import c_c_1 from '@/public/c_c_1.jpg'
import BeautifulForm from '../components/Form';
import { Raleway, Lato } from 'next/font/google'
import Footer from '../components/Footer';

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

            <div className='flex relative'>
                <div className='relative w-full h-[30rem] sm:h-[40rem]'>
                    <Image
                        src={c_c_1}
                        alt='404 Not Found'
                        priority
                        className='cursor-pointer'
                        style={{ filter: 'blur(2px)' }}
                        layout='fill'
                        objectFit='cover'
                    />
                    <div className='absolute inset-0 flex flex-col items-center justify-center'>
                        <div className={`${raleway.className} text-white sm:text-white font-thin mt-6 text-5xl border hover:border-white hover:text-black border-black p-8`}>
                            C O N T A C T
                        </div>
                        <p className='text-white sm:text-white pt-7'>GET IN TOUCH WITH US</p>
                    </div>
                </div>
            </div>
            <div className='border-b-2 py-10 mx-10'></div>

            <div className='py-8'></div>

            <div className='flex flex-col relative items-center justify-center sm:pt-3'>
                <p className={`${raleway.className} sm:text-xxl text-xl`}>
                    Simple Form
                </p>
                <p className={`text-start pt-2 ${lato.className}`} style={{ color: '#777777' }} >WE WOULD LOVE TO WORK WITH YOU</p>


            </div>

            {/* Form.. */}
                    <div className="py-8"></div>
                    <BeautifulForm />

            {/* footer */}
            <Footer/>
        </>

    )
}

export default page