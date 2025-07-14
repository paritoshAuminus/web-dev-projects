import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { FaAsterisk, FaCircle } from 'react-icons/fa'
import { HiArrowTurnDownRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import herobg from '../assets/herobg.png' // keep import for possible future use
import Card from '../components/Card'
import { HiMiniCubeTransparent } from 'react-icons/hi2'
import { RiServiceFill } from 'react-icons/ri'
import MyWorkCard from '../components/MyWorkCard'
import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
import project3 from '../assets/projects/project3.png'
import project4 from '../assets/projects/project4.png'


const Home = () => {
    return (
        <>
            <section className='relative bg-black flex flex-col p-5 md:p-7 gap-3 md:gap-7 justify-center items-center text-white overflow-hidden'>
                <div className='flex flex-col gap-3 items-center mb-32'>
                    <span className='text-sm px-1 py-0.5 border-1 border-white uppercase italic rounded-full flex gap-1 items-center'><FaCircle className='text-lime-500' />Available for work</span>
                    <span className='flex text-6xl md:text-9xl uppercase z-0 shadow-2xl'>Paritosh<BiCopyright /></span>
                </div>
                <div className='absolute top-28 z-10'>
                    <img src={`${herobg}`} alt="image" />
                </div>
                <div className='w-full flex flex-col gap-8 md:gap-12 justify-center md:justify-start mb-32 z-10'>
                    <p className='text-sm text-left w-full md:w-1/4'>I blend artistry with cutting-edge technology to deliver websites that not only look stunning but also<br />drive results.</p>
                    <Link className='py-3 text-sm flex justify-center items-center gap-1 text-black w-52 bg-lime-500 rounded-full'><HiArrowTurnDownRight />Schedule a consultation</Link>
                </div>
            </section>
            <section className='py-16 md:py-20 px-10 bg-stone-100'>
                <div className='flex flex-col gap-16 md:gap-24'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-sm px-1 py-0.5 w-40 border-1 border-black uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-500' />Why choose me</span>
                        <span className='text-4xl md:text-6xl'>Why Work with Me</span>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                        <Card
                            icon={<HiMiniCubeTransparent />}
                            title='Tailored design'
                            description='I believe that every brand is unique and deserves a website that is just as distinctive'
                        />
                        <Card
                            icon={<RiServiceFill />}
                            title='User-Centric Approach'
                            description='With a strong focus on user experience, I design websites that are intuitive and easy to navigate.'
                        />
                        <Card
                            icon={<FaAsterisk />}
                            title='Trending Technologies'
                            description='I stay at the forefront of web design trends and technologies to offer you the most innovative solutions.'
                        />
                    </div>
                </div>
            </section>
            <section className='text-white bg-neutral-900 py-16 md:py-20 px-10 flex flex-col gap-10 md:gap-20'>
                <div className='flex flex-col gap-3'>
                    <span className='text-sm px-1 py-0.5 w-40 border-1 border-white uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-500' />Selected Work</span>
                    <span className='text-3xl md:text-7xl'>Elevating Brands with<br />Design Brilliance</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <MyWorkCard 
                    name='Amber roast'
                    image={project1}
                />
                <MyWorkCard 
                    name='Amber roast'
                    image={project2}
                />
                <MyWorkCard 
                    name='Amber roast'
                    image={project3}
                />
                <MyWorkCard 
                    name='Amber roast'
                    image={project4}
                />
                </div>
            </section>
        </>
    )
}

export default Home