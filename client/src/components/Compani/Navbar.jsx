import React from 'react'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 
    border-b border-gray-300 py-3 bg-white transition-all duration-300'>
        <Link to='/'>
        <div className="flex flex-row">
            <img src={assets.jou} alt="logo" className='pb-2 h-14' />
            <p className='h-9 text-4xl font-playfair text-bold '>JoStay</p>
        </div>
        </Link>
        <UserButton/>
    </div>
  )
}

export default Navbar