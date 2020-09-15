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





          <div className='left-side'>


            <div className='contact-text'>
              CONTACT
            </div>

            <div className='links-container'>
              <a href="https://www.linkedin.com/in/muradzalov/" rel="noopener noreferrer" target="_blank">
                <img src={GitHubLogo} alt='' className='icon' /></a>
              <a href="https://github.com/muradzalov" rel="noopener noreferrer" target="_blank">
                <img src={LinkedInLogo} alt='' className='icon' /></a>
            </div>



          </div>



          <div className='right-side'>
            Email: mzalov@gmail.com
            Phone: 847.529.7382
            Resume: click here
          </div>




        </div>

      </motion.div>

    </div>
  )
}
