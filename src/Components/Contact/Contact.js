import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'
import { motion } from 'framer-motion'
import GitHubLogo from '../../Static/GitHubLogo.png'
import LinkedInLogo from '../../Static/LinkedInLogo.png'

export default function Contact() {
  return (
    <div>

      <Navbar />

      <motion.div className='contact-page' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

        <div className='content-container'>

          {/* CONTACT + LOGOS BOX */}
          <div className='left-side'>
            <div className='contact-text'>
              CONTACT
            </div>
            <div className='links-container'>
              <a href="https://github.com/muradzalov" rel="noopener noreferrer" target="_blank">
                <img src={GitHubLogo} alt='' className='icon' /></a>
              <a href="https://www.linkedin.com/in/muradzalov" rel="noopener noreferrer" target="_blank">
                <img src={LinkedInLogo} alt='' className='icon' /></a>
            </div>
          </div>


          {/* EMAIL + PHONE + RESUME */}
          <div className='right-side'>


            <div className='titles-and-information-email'>
              <div className='titles'>
                EMAIL:
              </div>
              <div className='information'>
                mzalov@gmail.com
              </div>
            </div>

            <div className='titles-and-information-phone'>
              <div className='titles'>
                PHONE:
              </div>
              <div className='information'>
                847.529.7382
              </div>
            </div>

            <div className='titles-and-information-resume'>
              <div className='titles'>
                RESUME:
              </div>
              <div className='information-clickable'>

                {/* <Link to="/resume">
                  Click here
                </Link> */}

                <a href='https://drive.google.com/file/d/1y_LlWduFXNAnGlZChr56woOV4Qf6e5KK/view?usp=sharing' rel="noopener noreferrer" target="_blank">Click here</a>


              </div>
            </div>
          </div>

        </div>

      </motion.div>

    </div>
  )
}
