import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='links-container'>
      
      <Link to='/'>
        <div className='navbar-link'> 
          home
        </div>
      </Link>

      <Link to='/about'>
        <div className='navbar-link'> 
          about
        </div>
      </Link>

      <Link to='/projects'>
        <div className='navbar-link'> 
          projects
        </div>
      </Link>

      <Link to='/contact'>
        <div className='navbar-link'> 
          contact
        </div>
      </Link>

    </div>
  )
}
