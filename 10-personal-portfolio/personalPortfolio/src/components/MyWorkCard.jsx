import React from 'react'
import { HiArrowTurnDownRight } from 'react-icons/hi2'

const MyWorkCard = (props) => {
    return (
      <>
        <section className='w-full border border-white rounded-4xl overflow-hidden'>
            <div className='py-7 px-5 flex justify-between text-sm'>
              <span className='flex gap-2'><HiArrowTurnDownRight className='text-lime-400 text-xl'/>{props.name}</span>
              <span>2025</span>
            </div>
            <div className='overflow-hidden border rounded-t-4xl'>
              <img src={props.image} alt="project image" />
            </div>
        </section>
      </>
    )
}

export default MyWorkCard