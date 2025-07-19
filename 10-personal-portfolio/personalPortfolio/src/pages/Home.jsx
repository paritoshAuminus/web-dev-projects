import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import { FaAsterisk, FaCircle, FaCubes, FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { HiArrowTurnDownRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import herobg from '../assets/herobg.png' // keep import for possible future use
import Card from '../components/Card'
import { HiMiniCubeTransparent } from 'react-icons/hi2'
import { RiServiceFill } from 'react-icons/ri'
import MyWorkCard from '../components/MyWorkCard'
import workArray from '../mywork'
import WorkFlow from '../components/WorkFlow'
import workflow from '../workflow'
import Card2 from '../components/Card2'
import { PiStarFourFill } from 'react-icons/pi'
import { SiVorondesign } from 'react-icons/si'
import aboutMe from '../assets/aboutMe.png'
import { GrGithub } from 'react-icons/gr'
import CardMyStory from '../components/CardMyStory'
import CardTestimonial from '../components/CardTestimonial'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'


const Home = () => {

    scrollTo(0, 0);

    const cardData = [
        {
            heading: 'Web Design',
            para: 'Creating visually stunning and user-friendly websites is at the heart of what I do.',
            icon: <SiVorondesign />,
            iconText: 'text-gray-50',
            textColor: 'text-black',
            bgcolor: 'bg-lime-400',
            pointers: [
                'custom tailored design',
                'Responsive layouts',
                'fully functional frontend'
            ]
        },
        {
            heading: 'Development',
            para: 'I bring your designs to life with clean, efficient, and high-performing code.',
            icon: <PiStarFourFill />,
            iconText: '',
            textColor: 'text-white',
            bgcolor: 'bg-zinc-900',
            pointers: [
                'HTML, CSS & JS Expertise',
                'Cross-Browser Compatibility',
                'Faster Load Times'
            ]
        },
        {
            heading: 'Brand Identity',
            para: 'Building a strong brand identity is essential for standing out in a crowded market.',
            icon: <FaCubes />,
            iconText: '',
            textColor: 'text-black',
            bgcolor: 'bg-stone-50',
            pointers: [
                'logo designs',
                'cohesive color palletes',
                'brand guidlines'
            ]
        }
    ]

    const testimonialData = []

    return (
        <>
            <section className='relative bg-black flex flex-col p-5 md:p-7 gap-3 md:gap-7 justify-center items-center text-white overflow-hidden'>
                <div className='flex flex-col gap-3 items-center mb-32'>
                    <span className='text-sm px-1 py-0.5 border-1 border-white uppercase italic rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />Available for work</span>
                    <span className='flex text-6xl md:text-9xl uppercase z-0 shadow-2xl'>Paritosh<BiCopyright /></span>
                </div>
                <div className='absolute top-28 z-10'>
                    <img src={`${herobg}`} alt="image" />
                </div>
                <div className='w-full flex flex-col gap-8 md:gap-12 justify-center md:justify-start mb-32 z-10'>
                    <p className='text-sm text-left w-full md:w-1/4'>I blend artistry with cutting-edge technology to deliver websites that not only look stunning but also<br />drive results.</p>
                    <Link className='py-3 text-sm flex justify-center items-center gap-1 text-black w-52 bg-lime-400 hover:bg-lime-300 rounded-full'><HiArrowTurnDownRight />Schedule a consultation</Link>
                </div>
            </section>
            <section className='py-16 md:py-20 px-10 bg-stone-100'>
                <div className='flex flex-col gap-16 md:gap-24'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-sm px-1 py-0.5 w-40 border-1 border-black uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />Why choose me</span>
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
                    <span className='text-sm px-1 py-0.5 w-40 border-1 border-white uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />Selected Work</span>
                    <span className='text-3xl md:text-7xl'>Elevating Brands with<br />Design Brilliance</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {workArray.slice(0, 4).map((item) => {
                        return (
                            <MyWorkCard
                                name={item.title}
                                image={item.image}
                            />
                        )
                    })}
                </div>
                <Link to={'/projects'} className='mx-auto py-3 text-sm flex justify-center items-center gap-1 text-black w-52 bg-lime-400 hover:bg-lime-300 rounded-full'><HiArrowTurnDownRight />Browse all work</Link>
            </section>
            <section className='bg-white py-16 md:py-20 px-10 flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 flex flex-col gap-10 mb-8'>
                    <div>
                        <span className='text-sm px-1 py-0.5 mb-1.5 w-32 border-1 border-black uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />My process</span>
                        <span className='text-6xl md:w-7xl mb-12'>My creative workflow</span>
                    </div>
                    <Link className='py-3 text-sm flex justify-center items-center gap-1 text-black w-52 bg-lime-400 hover:bg-lime-300 rounded-full'><HiArrowTurnDownRight />Schedule a consultation</Link>
                </div>
                <div className='w-full md:w-1/2'>
                    {workflow.map((item) => (
                        <WorkFlow
                            key={item.index}
                            heading={item.heading}
                            para={item.para}
                        />
                    ))}
                </div>
            </section>
            <section className='bg-black text-white py-16 md:py-20 px-10'>
                <div className='flex flex-col gap-1'>
                    <span className='text-sm px-1 py-0.5 mb-1.5 w-32 border-1 border-gray-500 uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />What I offer</span>
                    <span className='text-4xl md:text-7xl capitalize'>Empowering brands<br />through design</span>
                </div>
                <div className='py-16 grid grid-cols-1 sm:grid-cols-3 gap-5'>
                    {cardData.map((item) => (
                        <Card2
                            icon={item.icon}
                            heading={item.heading}
                            iconText={item.iconText}
                            bgcolor={item.bgcolor}
                            textColor={item.textColor}
                            para={item.para}
                            pointerOne={item.pointers[0]}
                            pointerTwo={item.pointers[1]}
                            pointerThree={item.pointers[2]}
                        />
                    ))}
                </div>
            </section>
            <section className='flex flex-col md:flex-row py-16 md:py-32 px-10 gap-12'>
                <div className='w-full md:w-1/2 flex items-center '>
                    <div className='w-96 bg-gradient-to-b from-lime-300 to-lime-50 rounded-3xl'>
                        <img src={aboutMe} alt="My image" />
                    </div>
                </div>
                <div className='p-10 flex flex-col gap-7'>
                    <div>
                        <span className='text-sm px-1 py-0.5 w-28 mb-1.5 border-1 border-gray-500 uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-300' />about me</span>
                        <span className='text-5xl md:text-7xl capitalize'>Discover my journey</span>
                    </div>
                    <p>Hello! I'm Paritosh, a passionate Web Designer with over a year of experience in creating visually appealing and user-friendly websites. My mission is to bring your brand to life through innovative design solutions tailored to your unique needs.</p>
                    <div className='flex gap-4 text-4xl'>
                        <Link className='hover:text-lime-400 transition-all'><FaFacebook /></Link>
                        <Link className='hover:text-lime-400 transition-all'><GrGithub /></Link>
                        <Link className='hover:text-lime-400 transition-all'><FaLinkedinIn /></Link>
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-1 sm:grid-cols-3 bg-gradient-to-b from-lime-400 to-lime-200 py-20 px-10 gap-5'>
                <div className='p-5 flex flex-col gap-5'>
                    <span className='text-6xl'>01+</span>
                    <hr />
                    <div className='flex flex-col gap-1'>
                        <p className='text-2xl capitalize'>year of experience</p>
                        <p>Significant experience in delivering exceptional projects.</p>
                    </div>
                </div>
                <div className='p-5 flex flex-col gap-5'>
                    <span className='text-6xl'>10+</span>
                    <hr />
                    <div className='flex flex-col gap-1'>
                        <p className='text-2xl capitalize'>Projects built</p>
                        <p>Tailored for real world application and various organisations.</p>
                    </div>
                </div>
                <div className='p-5 flex flex-col gap-5'>
                    <span className='text-6xl'>98%</span>
                    <hr />
                    <div className='flex flex-col gap-1'>
                        <p className='text-2xl capitalize'>Client satisfaction</p>
                        <p>I build long-term partnerships through proven results.</p>
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-3 gap-5 px-10 p-20 md:py-28 bg-black'>
                <CardMyStory />
                <CardTestimonial
                    textColor={'text-white'}
                    bgColor={'bg-zinc-900'}
                    para={'"Working with Paritosh was a game-changer for our online presence. The new website exceeded our expectations in both design and functionality."'}
                    source={user1}
                    clientName={'Jerome Bell'}
                    clientCompany={'CTO, Waverio'}
                    companyText={'text-gray-300'}
                />
                <CardTestimonial
                    textColor={'text-black'}
                    bgColor={'bg-white'}
                    para={'"Paritosh delivered a stunning website that truly reflects our brand\'s essence. He continuously involves in feedbacks. Highly recommend his expertise!"'}
                    source={user2}
                    clientName={'Wade Warren'}
                    clientCompany={'Founder, Creaty'}
                    companyText={'text-gray-500'}
                />
            </section>
        </>
    )
}

export default Home