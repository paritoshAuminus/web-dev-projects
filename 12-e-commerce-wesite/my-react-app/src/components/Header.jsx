// Eden aura is the title of the site
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='flex justify-between items-center px-14 py-3 bg-indigo-400 text-white sticky top-0'>
        <h1 className='text-xl md:text-4xl hover:cursor-pointer'><Link to='/'>Eden Aura</Link></h1>
        <nav className='flex items-center'>
          <ul className='flex justify-around gap-7'>
            <li className='hover:text-indigo-200 hover:curusor-pointer'><Link to='/'>Home</Link></li>
            <li className='hover:text-indigo-200 hover:curusor-pointer'><Link to='/shop'>Shop</Link></li>
            <li className='hover:text-indigo-200 hover:curusor-pointer'><Link to='/about'>About</Link></li>
            <li className='hover:text-indigo-200 hover:curusor-pointer'><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <nav className='flex items-center'>
          <ul className='flex justify-around gap-5'>
            <li className='hover:text-indigo-200 hover:cursor-pointer'>Wishlist</li>
            <li className='hover:text-indigo-200 hover:cursor-pointer'>My account</li>
            <li className='hover:text-indigo-200 hover:cursor-pointer'>Cart</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header