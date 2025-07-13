import React from 'react'
import { FaCircle } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
        <footer className='h-300px md:h-[500px] py-8 flex justify-center text-white items-center bg-zinc-900 font-semibold'>
            <div className='container h-full w-full bg-black flex flex-col justify-center items-center'>
                <span className='p-1 border-1 border-white uppercase rounded-full flex gap-1 items-center w-60'><FaCircle className='text-lime-500' />Have a project in mind?</span>
                <span className='text-8xl text-wrap text-center'>Let's turn your ideas into reality</span>
                <span></span>
            </div>
        </footer>
    </>
  )
}

export default Footer