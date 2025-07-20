import React from 'react'
import { HiArrowTurnDownRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Card2 = (props) => {
    return (
        <>
            <div className={`${props.bgcolor} py-12 ${props.textColor} px-10 rounded-3xl text-sm flex flex-col justify-between`}>
                <div className={`${props.iconText} text-5xl h-10 w-10 rounded-full flex justify-center items-center mb-5`}>
                    {props.icon}
                </div>
                <div className='flex flex-col gap-1.5'>
                    <span className='text-3xl'>{props.heading}</span>
                    <p>{props.para}</p>
                </div>
                <div className='flex flex-col gap-3 my-12 capitalize'>
                    <span>{props.pointerOne}</span>
                    <hr />
                    <span>{props.pointerTwo}</span>
                    <hr />
                    <span>{props.pointerThree}</span>
                </div>
                <div className='flex justify-center sm:justify-start items-center'>
                    <Link to={'/contact'} className='p-3 text-sm flex justify-center items-center gap-1 text-black bg-lime-200 hover:bg-lime-100 rounded-full'><HiArrowTurnDownRight />Schedule a consultation</Link>
                </div>
            </div>
        </>
    )
}

export default Card2