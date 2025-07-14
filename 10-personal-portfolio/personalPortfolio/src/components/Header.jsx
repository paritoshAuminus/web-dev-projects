import React from 'react'
import { LiaRegistered } from 'react-icons/lia'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="text-white body-font bg-black">
                <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span className="ml-3 text-3xl flex justify-between">Paritosh <LiaRegistered className='text-2xl'/></span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center gap-4 justify-center">
                        <Link to='/' className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">Home</Link>
                        <Link className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">About</Link>
                        <Link className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">Projects</Link>
                        <Link className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">Services</Link>
                        <Link className="mr-5 hover:text-lime-300 transition-all focus:text-lime-400">Contact</Link>
                    </nav>
                    <Link className="inline-flex items-center font-semibold bg-black border-2 border-white hover:text-black py-2 px-3 hover:border-lime-400 hover:bg-lime-400 rounded-full text-base mt-4 md:mt-0">
                        Contact Me
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header