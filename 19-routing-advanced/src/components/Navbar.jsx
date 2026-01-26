import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex item-center py-4 px-8 bg-blue-400 justify-between'>
      <h2 className='text-xl font-bold'>Waleed</h2>
      <div className='flex gap-8 '></div>
      <Link className='text-lg font-medium' to='/'>Home</Link>
      <Link className='text-lg font-medium' to='/about'>About</Link>
            <Link className='text-lg font-medium' to='/courses'>Courses</Link>

      <Link className='text-lg font-medium' to='/product'>Product</Link>

      
  
    </div>
  )
}

export default Navbar
