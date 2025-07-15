import React from 'react'
import { BiCopyright } from 'react-icons/bi'

const CardMyStory = () => {
    return (
        <>
            <div className='text-white p-10 border border-gray-500 flex flex-col gap-1 md:gap-40 rounded-3xl font-semibold'>
                <div>
                    <span className='flex text-lg text-lime-400 mb-5'>Paritosh<BiCopyright /></span>
                    <span className='capitalize text-2xl'>My programming journey</span>
                </div>
                <div className='text-sm font-normal'>
                    <p>I take pride in collaborating with a diverse range of clients, from ambitious startups to established enterprises.</p>
                </div>
            </div>
        </>
    )
}

export default CardMyStory