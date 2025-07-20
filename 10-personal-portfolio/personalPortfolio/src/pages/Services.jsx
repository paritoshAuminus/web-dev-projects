import React from 'react'
import Card3 from '../components/Card3'
import Card from '../components/Card'
import { FaAsterisk, FaCircle } from 'react-icons/fa'
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import { FcSupport } from 'react-icons/fc'

const cardData = [
    {
        heading: 'Web Design',
        para: 'Web design is more than just aesthetics; its about marrying form with function to create a seamless user experience that captivates and converts. My web design services focus on building responsive, engaging, and visually appealing websites that reflect your brand’s essence.',
        textColor: 'text-white',
        bgcolor: 'bg-zinc-900',
        pointers: [
            'custom tailored design',
            'Responsive layouts',
            'fully functional frontend'
        ],
        price: 81.26
    },
    {
        heading: 'Development',
        para: 'Front end development brings your website to life, transforming static designs into dynamic, interactive user experiences. I specialize in clean, efficient coding that ensures your website is fast, responsive, and visually stunning. Using tools like Git for efficient project management and collaboration.',
        textColor: 'text-white',
        bgcolor: 'bg-zinc-900',
        pointers: [
            'HTML, CSS & JS Expertise',
            'Cross-Browser Compatibility',
            'Faster Load Times'
        ],
        price: 139.3
    },
    {
        heading: 'Brand Identity',
        para: 'A strong brand identity is essential for standing out in today’s competitive market. I help businesses create cohesive and compelling brand images that resonate with their target audience and convey their core values. Developing color palettes, typography, and imagery guidelines for brand consistency.',
        textColor: 'text-white',
        bgcolor: 'bg-zinc-900',
        pointers: [
            'logo designs',
            'cohesive color palletes',
            'brand guidlines'
        ],
        price: 34.83
    }
]

const Services = () => {

    scrollTo(0, 0)

    return (
        <>
            <div className='text-white bg-black py-16 md:py-20 px-10'>
                <span className='text-5xl md:text-9xl uppercase'>Services</span>
            </div>
            <div className='py-16 md:py;20 px-10 grid grid-cols-1 gap-5 bg-black'>
                {cardData.map((item) => (
                    <Card3
                        heading={item.heading}
                        bgcolor={item.bgcolor}
                        textColor={item.textColor}
                        para={item.para}
                        pointerOne={item.pointers[0]}
                        pointerTwo={item.pointers[1]}
                        pointerThree={item.pointers[2]}
                        price={item.price}
                    />
                ))}
            </div>
            <section className='py-16 md:py-20 px-10 bg-stone-100'>
                <div className='flex flex-col gap-16 md:gap-24'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-sm px-1 py-0.5 w-40 border-1 border-black uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />My philosophy</span>
                        <span className='text-4xl md:text-6xl capitalize'>What to expect</span>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                        <Card
                            icon={<FaAsterisk />}
                            title='Personalized Approach'
                            description='Every project is unique, and I tailor my approach to fit your specific needs and goals.'
                        />
                        <Card
                            icon={<MdOutlinePhoneInTalk />}
                            title='Clear communication'
                            description='I keep you informed at every stage of the process and provide you regular updates.'
                        />
                        <Card
                            icon={<FcSupport />}
                            title='After support'
                            description="My commitment to your success doesn't end at launch. I provide after launch support."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services