import React from 'react'

const WorkFlow = (props) => {
  return (
    <>
        <div className='flex flex-col gap-3 mb-8'>
            <span className='text-2xl md:text-3xl'>{props.heading}</span>
            <p className='text-sm'>{props.para}</p>
        </div>
        <hr className='mb-8'/>
    </>
  )
}

export default WorkFlow