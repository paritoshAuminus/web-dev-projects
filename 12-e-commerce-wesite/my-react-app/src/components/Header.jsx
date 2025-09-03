// Eden aura is the title of the site
import React from 'react'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoSearch } from 'react-icons/io5';

const Header = () => {
  return (
    <>
      <header className='flex justify-between items-center px-14 py-6 bg-emerald-600 text-white sticky top-0'>
        <h1 className='text-xl md:text-4xl hover:cursor-pointer'><Link to='/'>Eden Aura</Link></h1>
        <nav className='flex items-center'>
          <ul className='flex justify-around gap-7'>
            <li className='hover:text-emerald-200 hover:curusor-pointer'><Link to='/'>Home</Link></li>
            <li className='hover:text-emerald-200 hover:curusor-pointer'><Link to='/shop'>Shop</Link></li>
            <li className='hover:text-emerald-200 hover:curusor-pointer'><Link to='/about'>About</Link></li>
            <li className='hover:text-emerald-200 hover:curusor-pointer'><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <nav className='flex items-center'>
          <ul className='flex justify-around items-center gap-5'>
            <li className='hover:text-emerald-200 hover:cursor-pointer text-xl font-bold'><CiHeart /></li>
            <li className='hover:text-emerald-200 hover:cursor-pointer'><FaRegUser /></li>
            <li className='hover:text-emerald-200 hover:cursor-pointer flex gap-2 items-center'><FaShoppingCart />Cart</li>
          </ul>
        </nav>
      </header>
      <search className='bg-emerald-700 text-white flex gap-3 py-2.5 px-6 text-xl'>
        <div className="group flex items-center gap-2 cursor-pointer py-4 px-5 bg-amber-500">

          <div className="w-9 h-6 shrink-0 flex flex-col justify-between 
              [perspective:1000px] [transform-style:preserve-3d] 
              transition-transform duration-300 ease-in-out 
              group-hover:[transform:rotateY(180deg)] origin-center">
            <span className="block h-1"><GiHamburgerMenu /></span>
          </div>

          <span className="font-medium uppercase">Shop by categories</span>
        </div>

        <div className='w-2xl bg-white p-1'>
          <input type="text"/>
          <button className='bg-black float-end h-full px-8 text-sm font-bold flex gap-2 items-center' aria-placeholder='Search the store'><IoSearch className='text-lg'/>Search</button>
        </div>
        <div><LuPhoneCall /></div>
      </search>
    </>
  )
}

export default Header