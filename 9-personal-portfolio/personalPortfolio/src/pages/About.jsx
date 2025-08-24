import React from 'react'
import aboutMe from '../assets/aboutMe.png'
import { FaCircle } from 'react-icons/fa'
import { HiArrowTurnDownRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import pic1 from '../assets/travelPics/pic1.avif'
import pic2 from '../assets/travelPics/pic2.jpg'
import pic3 from '../assets/travelPics/pic3.jpg'
import pic4 from '../assets/travelPics/pic4.jpg'

const About = () => {

    scrollTo(0, 0);

    return (
        <>
            <section className='bg-black text-white px-10 py-28'>
                <span className='text-7xl md:text-9xl uppercase'>About</span>
                <div className='flex mt-10 flex-col md:flex-row gap-14'>
                    <div className='w-full md:w-1/2 flex items-center'>
                        <div className='w-96 bg-gradient-to-b from-lime-300 to-lime-50 rounded-3xl'>
                            <img src={aboutMe} alt="My image" />
                        </div>
                    </div>
                    <div className='p-10 flex flex-col gap-7'>
                        <div>
                            <span className='text-5xl md:text-7xl capitalize'>Discover my journey</span>
                        </div>
                        <div className='flex flex-col gap-3.5'>
                            <p>My journey into the world of design began during my college years, where I was captivated by the intersection of creativity and technology. Inspired by the power of visual storytelling, I persued a degree in my main subject and honed my programming skills in various design disciplines.</p>
                            <p>Today, I am driven by the belief that great design is not just about aesthetics; it's about creating meaningful connections between brands and their audiences.</p>
                        </div>
                        <Link className='py-3 text-sm flex justify-center items-center gap-1 text-black w-40 bg-lime-400 hover:bg-lime-300 rounded-full capitalize'><HiArrowTurnDownRight />Download resume</Link>
                    </div>
                </div>
            </section>
            <section className='flex flex-col md:flex-row bg-white text-black px-10 py-16 md:py-20 gap-10'>
                <div className='w-full md:w-2/5'>
                    <span className='text-sm px-1 py-0.5 mb-1.5 w-28 border-1 border-black uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />Experience</span>
                    <span className='text-6xl capitalize text-wrap'>My work experience</span>
                </div>
                <div className='flex flex-col px-10 capitalize w-full md:w-3/5'>
                    <div className='flex justify-between'>
                        <span className='text-2xl'>web designer</span>
                        <div className='flex flex-col'>
                            <span>MSK institute</span>
                            <span className='text-gray-500'>March 2025 - Now</span>
                        </div>
                    </div>
                    <hr className='my-6'/>
                    <div className='flex justify-between'>
                        <span className='text-2xl'>frontend engineer</span>
                        <div className='flex flex-col'>
                            <span>MSK institute</span>
                            <span className='text-gray-500'>March 2025 - Now</span>
                        </div>
                    </div>
                    <hr className='my-6'/>
                    <div className='flex justify-between'>
                        <span className='text-2xl'>backend designer</span>
                        <div className='flex flex-col'>
                            <span>MSK institute</span>
                            <span className='text-gray-500'>March 2025 - Now</span>
                        </div>
                    </div>
                    <hr className='my-6'/>
                    <div className='flex justify-between'>
                        <span className='text-2xl'>web developer</span>
                        <div className='flex flex-col'>
                            <span>MSK institute</span>
                            <span className='text-gray-500'>March 2025 - Now</span>
                        </div>
                    </div>
                    <hr className='my-6'/>
                </div>
            </section>
            <section className='bg-black text-white py-16 md:py-20 px-10'>
                <div className='flex flex-col gap-2 items-center mb-14 md:mb-20'>
                    <span className='text-sm px-1 py-0.5 mb-1.5 w-28 border-1 border-gray-400 uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />my world</span>
                    <span className='text-3xl md:text-7xl mx-auto text-center'>When I am not Working I am travelling</span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                    <div className='bg-cover bg-center overflow-hidden h-72 md:h-96 rounded-3xl'>
                        <img src={pic1} alt="travel destination" className='object-cover h-full w-full' />
                    </div>
                    <div className='bg-cover bg-center overflow-hidden h-72 md:h-96 rounded-3xl'>
                        <img src={pic2} alt="travel destination" className='object-cover h-full w-full' />
                    </div>
                    <div className='bg-cover bg-center overflow-hidden h-72 md:h-96 rounded-3xl'>
                        <img src={pic3} alt="travel destination" className='object-cover h-full w-full' />
                    </div>
                    <div className='bg-cover bg-center overflow-hidden h-72 md:h-96 rounded-3xl'>
                        <img src={pic4} alt="travel destination" className='object-cover h-full w-full' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About