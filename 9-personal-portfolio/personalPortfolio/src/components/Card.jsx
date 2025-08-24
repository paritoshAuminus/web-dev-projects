import React from 'react'

const Card = (props) => {
    return (
        <>
            <section className='flex flex-col gap-8 py-5 px-7 rounded-2xl bg-white'>
                <span className='rounded-full flex justify-center items-center h-12 w-12 bg-black text-4xl text-lime-400'>
                    {props.icon}
                </span>
                <div className='flex flex-col gap-3'>
                    <span className='text-2xl'>{props.title}</span>
                    <span className='text-sm'>{props.description}</span>
                </div>
            </section>
        </>
    )
}

export default Card