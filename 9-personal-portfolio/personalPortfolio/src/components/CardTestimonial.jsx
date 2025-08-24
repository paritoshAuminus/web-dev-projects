import React from 'react'
import { TbStarFilled } from 'react-icons/tb'

const CardTestimonial = (props) => {
    return (
        <>
            <div className={`${props.textColor} ${props.bgColor} p-10 flex flex-col gap-1 md:gap-40 rounded-3xl font-semibold`}>
                <div>
                    <span className='flex text-lg text-lime-400 mb-5 gap-2'>
                        <TbStarFilled />
                        <TbStarFilled />
                        <TbStarFilled />
                        <TbStarFilled />
                        <TbStarFilled />
                    </span>
                    <span className='capitalize text-md'>{props.para}</span>
                </div>
                <div className='flex flex-col gap-3 text-sm font-normal'>
                    <hr className='text-gray-500 mb-1' />
                    <div className=' flex gap-3 items-center'>
                        <div className='w-16 rounded-full overflow-hidden'>
                            <img src={props.source} alt="My Clients" className='object-cover' />
                        </div>
                        <div className='flex flex-col'>
                        <span className='font-semibold'>{props.clientName}</span>
                        <span className={props.companyText}>{props.clientCompany}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardTestimonial