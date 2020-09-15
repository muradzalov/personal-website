import React from 'react'
import PersonalPhoto from '../../Static/LinkedIn.jpg'
import { Link } from 'react-router-dom'
import './Home.css'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className='home'>


      {/* Wrapper for the photo and namecard */}
      <div className='name-photo-wrapper'>
        <div className='photo-container'>
          <img src={PersonalPhoto} alt="Murad Zalov" className='personal-photo' />
        </div>

        <div className='name-container'>

          <Typewriter
            options={{
              cursor: ''
            }}
            onInit={(typewriter) => {
              typewriter.typeString('// Murad Zalov')
                .start();
            }}
          />

        </div>
      </div>


      {/* Wrapper for the 3 buttons */}
      <div className='button-wrapper'>

        {/* About Button */}
        <Link to="/about">
          <div className='button'>
            About
          </div>
        </Link>

        {/* Projects Button */}
        <Link to="/projects">
          <div className='button'>
            Projects
          </div>
        </Link>

        {/* Contact Button */}
        <Link to="/contact">
          <div className='button'>
            Contact
          </div>
        </Link>

      </div>

    </div>
  )
}
