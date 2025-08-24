import React from 'react'
import { Link, Links } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
            <title>Eden Aura</title>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/f'}>fb</Link>
                <Link to={'/ig'}>ig</Link>
                <Link to={'/yt'}>yt</Link>
                <Link to={'/x'}>x</Link>
            </nav>
        </header>
    </>
  )
}

export default Header