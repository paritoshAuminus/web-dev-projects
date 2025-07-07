import { useState } from 'react';
import { Link, Links, NavLink } from 'react-router-dom'

function Header() {

    const [display, setDisplay] = useState(false)

    return (
        <>
            <header className="bg-blue-950 text-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between p-5">
                    <Link to="/" className="text-3xl font-bold text-amber-50">MSK</Link>
                    <nav className="hidden md:flex gap-14 font-bold items-center">
                        <Link to="/">Home</Link>
                        <Link to="/courses">Courses</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/login" className='flex'><i className='fa-regular fa-circle-user mr-1 text-xl'></i>Login</Link>
                        <Link to="/register" className='font-normal border py-1 px-6 border-amber-50 rounded-md bg-blue-950 hover:bg-amber-50 hover:text-blue-950'>Registration</Link>
                        <button className='hidden md:block border-2 bg-amber-50 text-blue-950 rounded-full cursor-pointer'><i className='fa-solid fa-magnifying-glass p-4'></i></button>
                    </nav>
                    <button onClick={() => setDisplay(!display)} className='block md:hidden cursor-pointer text-white text-3xl'><i className='fa-solid fa-bars'></i></button>
                </div>

                {/* This is the side bar */}
                <aside className={`fixed top-0 right-0 w-96 h-full p-4 z-20 bg-white transform transition-transform duration-300 ease-in-out ${display ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div onClick={() => setDisplay(false)} className='float-end text-gray-500 text-2xl cursor-pointer'>
                        <i className='fa-solid fa-xmark'></i>
                    </div>
                    <h1 className='text-xl text-gray-600 mb-8'>MSK</h1>
                    <nav className="flex flex-col gap-12 p-4 font-bold text-gray-500">
                        <Link to="/" onClick={() => setDisplay(false)} className='border-b-1 border-gray-500 pb-6 pl-3'>Home</Link>
                        <Link to="/courses" onClick={() => setDisplay(false)} className='border-b-1 border-gray-500 pb-6 pl-3'>Courses</Link>
                        <Link to="/contact" onClick={() => setDisplay(false)} className='border-b-1 border-gray-500 pb-6 pl-3'>Contact Us</Link>
                        <Link to="/login" onClick={() => setDisplay(false)} className='flex pl-3'>
                            <i className='fa-regular fa-circle-user mr-1'></i>Login
                        </Link>
                        <Link to="/register" onClick={() => setDisplay(false)} className='font-normal border py-1 px-6 border-gray-500 rounded-md text-center text-gray-500'>
                            Registration
                        </Link>
                    </nav>
                </aside>

            </header>
        </>

    )
}

export default Header;
