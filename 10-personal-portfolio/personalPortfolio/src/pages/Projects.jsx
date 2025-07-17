import React, { useEffect, useState } from 'react'
import MyWorkCard from '../components/MyWorkCard'
import workArray from '../mywork'

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
    </>
  )
}

export default Projects