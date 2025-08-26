// Eden aura is the title of the site
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className='flex justify-between mx-14 my-3'>
        <h1>Eden Aura</h1>
        <ul className='flex justify-around gap-7'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header