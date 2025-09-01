import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className='fixed bottom-0 flex justify-around w-full py-7'>
                <div className='flex flex-col justify-around items-start'>
                    <h1 className='text-xl font-semibold'>Info</h1>
                    <div>
                        <FaLocationDot className='text-md' />
                        <p>
                            location_onAcme Widgets
                            123 Widget Street
                            Acmeville, AC 12345
                            United States of America
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-around items-start'>
                    <h1 className='text-xl font-semibold'>Navigate</h1>
                </div>
                <div className='flex flex-col justify-around items-start'>
                    
                    <h1 className='text-xl font-semibold'>Categories</h1>
                </div>
            </footer>
        </>
    )
}

export default Footer