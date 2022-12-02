import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='d-flex justify-content-evenly align-items-center p-2'>
      <Link to='/' className='text-decoration-none'>show</Link>
      <Link to='/create' className='text-decoration-none'>create</Link>
    </div>
  )
}

export default Nav
