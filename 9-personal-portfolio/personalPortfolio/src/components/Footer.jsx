import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { HiArrowTurnDownRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='flex flex-col p-8 text-white items-center bg-zinc-900 font-semibold gap-y-8'>
        <div className='container h-full w-full py-20 bg-black flex flex-col gap-4 justify-center rounded-3xl items-center'>
          <span className='px-1 py-0.5 text-sm border-1 border-white uppercase rounded-full flex gap-1 items-center'><FaCircle className='text-lime-400' />Have a project in mind?</span>
          <span className='text-3xl md:text-7xl text-wrap text-center'>Let's turn your ideas<br />into reality</span>
          <span className='text-xl flex flex-col gap-1'><a href="mailto:paritoshverma2038@gmail.com" className='flex items-center gap-1'><HiArrowTurnDownRight />paritoshverma2038@gmail.com</a><hr className='border-1 text-gray-500' /></span>
        </div>
        <nav className="m-5 flex flex-col sm:flex-row flex-wrap items-center gap-1 font-normal justify-center">
          <Link to={'/'} className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">Home</Link>
          <Link to={'/about'} className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">About</Link>
          <Link to={'/projects'} className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">Projects</Link>
          <Link to={'/services'} className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">Services</Link>
          <Link to={'/contact'} className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">Contact</Link>
        </nav>
      </footer>
    </>
  )
}

export default Footer