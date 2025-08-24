import React from 'react'
import { Link } from 'react-router-dom'

const Card3 = (props) => {
    return (
        <>
            <div className='bg-zinc-900 py-12 text-white px-10 rounded-3xl text-sm'>
                <div className={` flex flex-col justify-between w-full md:w-4/6`}>
                    <div className='flex flex-col gap-1.5'>
                        <span className='text-3xl'>{props.heading}</span>
                        <p>{props.para}</p>
                    </div>
                    <div className='flex flex-col gap-3 my-12 capitalize'>
                        <span>{props.pointerOne}</span>
                        <hr className='text-gray-500'/>
                        <span>{props.pointerTwo}</span>
                        <hr className='text-gray-500'/>
                        <span>{props.pointerThree}</span>
                    </div>
                    <div className='flex justify-center sm:justify-start items-center'>
                        <Link className='p-3 text-sm flex justify-center items-center gap-1 text-black bg-lime-400 hover:bg-lime-300 rounded-full capitalize'>Starting price: ${props.price}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card3