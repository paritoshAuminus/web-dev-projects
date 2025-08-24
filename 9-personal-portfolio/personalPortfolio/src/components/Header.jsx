import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { LiaRegistered } from 'react-icons/lia'
import { Link } from 'react-router-dom'

const Header = () => {

    const [nav, setNav] = useState(false)

    return (
        <>
            <header className="text-white body-font bg-black">
                <div className="mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
                    <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span className="ml-3 text-3xl flex justify-between">Paritosh <LiaRegistered className='text-2xl' /></span>
                    </Link>

                    {/* Nav for bigger screens */}
                    <nav className="hidden md:ml-auto md:flex flex-wrap items-center gap-4 justify-center">
                        <Link to={'/'} className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400" autoFocus>Home</Link>
                        <Link to={'/about'} className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">About</Link>
                        <Link to={'/projects'} className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">Projects</Link>
                        <Link to={'/services'} className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">Services</Link>
                        <Link to={'/contact'} className="inline-flex items-center font-semibold bg-black border-2 border-white hover:text-black py-2 px-3 hover:border-lime-400 transition-all hover:bg-lime-400 rounded-full text-base">Contact</Link>
                    </nav>

                    {/* Nav for smaller screens */}

                    <button onClick={() => setNav(!nav)} className='inline md:hidden text-lg'><FaBars /></button>

                    {nav ?
                        <nav className='flex md:hidden flex-col flex-wrap items-center w-full p-5 gap-4 h-full fixed top-0 right-0 z-50 bg-black text-2xl'>
                            <button onClick={() => setNav(!nav)} className='fixed right-5 text-lg'><ImCross /></button>
                            <Link to={'/'} className="hover:text-lime-300 transition-all focus:text-lime-400" autoFocus>Home</Link>
                            <Link to={'/about'} className="hover:text-lime-300 transition-all focus:text-lime-400">About</Link>
                            <Link to={'/projects'} className="hover:text-lime-300 transition-all focus:text-lime-400">Projects</Link>
                            <Link to={'/services'} className="hover:text-lime-300 transition-all focus:text-lime-400">Services</Link>
                            <Link to={'/contact'} className="inline-flex items-center font-semibold bg-black border-2 border-white hover:text-black py-2 px-3 hover:border-lime-400 transition-all hover:bg-lime-400 rounded-full text-base">Contact</Link>
                        </nav>
                    : false}

                </div>
            </header>
        </>
    )
}

export default Header