import React, { useState } from 'react'
import MyWorkCard from '../components/MyWorkCard'
import workArray from '../mywork'
import { FaCircle } from 'react-icons/fa';
import Accordian from '../components/Accordian';

const Projects = () => {

  const [category, setCategory] = useState('all');
  
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
        <span className='text-sm px-1 py-0.5 w-16 border-1 border-gray-500 uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />Faq</span>
        <span className='text-4xl md:text-7xl capitalize'>Questions & answers</span>
      </div>
      <div className='w-full md:w-3/5'>
        <div>
          <Accordian
            question={'What services do you offer?'}
            answer={'I offer a range of services including web design, front-end development, UX/UI design, responsive design, e-commerce solutions, and brand identity creation. Visit my Services page for a detailed overview.'}
          />
          <Accordian
            question={'How do you approach your project?'}
            answer={'With a strong focus on user experience, I design websites that are intuitive and easy to navigate.'}
          />
          <Accordian
            question={'What is your project timeline?'}
            answer={'It depends on the person or organisation altogether with the goals and benchmark demands of the project but in general it would take anywhere from six to twelve days.'}
          />
          <Accordian
            question={'How much do your service cose?'}
            answer={'There are different services having a differnt cost each, frontend only projects will cost approximately $70 to $80 and full development can cost anywhere from $120 to $170. Please note that all the prices mentioned are approximations and can fluctuate based on the project requirements.'}
          />
        </div>
      </div>
    </section>
  </>
  )
}

export default Projects