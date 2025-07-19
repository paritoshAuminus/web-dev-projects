import React, { useEffect, useState } from 'react'
import MyWorkCard from '../components/MyWorkCard'
import workArray from '../mywork'
import { FaCircle } from 'react-icons/fa';
import Accordian from '../components/Accordian';
import { FaPlusCircle } from 'react-icons/fa'

const Projects = () => {

  const [category, setCategory] = useState('all');
  const [extenderQ1, setExtenderQ1] = useState(false);
  const [extenderQ2, setExtenderQ2] = useState(false);
  const [extenderQ3, setExtenderQ3] = useState(false);
  const [extenderQ4, setExtenderQ4] = useState(false);
  
  return (


  <>
    <section className='bg-black text-white px-10 py-16 md:py-20'>
      <span className='text-7xl md:text-9xl uppercase'>Projects</span>

      {/* Category bar */}
      <div className='flex gap-5 md:gap-7 text-2xl text-gray-500 my-20'>
        <button onClick={() => setCategory('all')} className='hover:text-white focus:text-white focus:border-b-4 transition-all delay-100 cursor-pointer' autoFocus>All</button>
        <button onClick={() => setCategory('eCommerce')} className='hover:text-white focus:text-white focus:border-b-4 transition-all delay-100 cursor-pointer'>E-Commerce</button>
        <button onClick={() => setCategory('react')} className='hover:text-white focus:text-white focus:border-b-4 transition-all delay-100 cursor-pointer'>React</button>
        <button onClick={() => setCategory('visualDesign')} className='hover:text-white focus:text-white focus:border-b-4 transition-all delay-100 cursor-pointer'>Visual Design</button>
        <button onClick={() => setCategory('vanillaJS')} className='hover:text-white focus:text-white focus:border-b-4 transition-all delay-100 cursor-pointer'>Vanilla JS</button>
      </div>

      {/* projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {(category == 'all'
          ? workArray
          : workArray.filter((item) => item.category.includes(category))
        ).map((item) =>

          <MyWorkCard
            key={item.index}
            name={item.title}
            image={item.image}
          />)}
      </div>
    </section>
    <section className='text-black bg-white flex flex-col md:flex-row px-10 py-16 md:py-20 gap-5'>
      <div className='w-full md:w-2/5'>
        <span className='text-sm px-1 py-0.5 w-36 border-1 border-gray-500 uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />Selected Work</span>
        <span className='text-4xl md:text-7xl capitalize'>Questions & answers</span>
      </div>
      <div className='w-full md:w-3/5'>
        <div>
          <Accordian
            onClick={() => setExtenderQ1(!extenderQ1)}
            question={'What services do you offer?'}
            answer={'I offer a range of services including web design, front-end development, UX/UI design, responsive design, e-commerce solutions, and brand identity creation. Visit my Services page for a detailed overview.'}
            icon={<FaPlusCircle />}
          />
          <Accordian
            onClick={() => setExtenderQ2(!extenderQ2)}
            question={'How do you approach your project?'}
            answer={'answer'}
            icon={<FaPlusCircle />}
          />
          <Accordian
            onClick={() => setExtenderQ3(!extenderQ3)}
            question={'What is your project timeline?'}
            answer={'answer'}
            icon={<FaPlusCircle />}
          />
          <Accordian
            onClick={() => setExtenderQ4(!extenderQ4)}
            question={'How much do your service cose?'}
            answer={'answer'}
            icon={<FaPlusCircle />}
          />
        </div>
      </div>
    </section>
  </>
  )
}

export default Projects