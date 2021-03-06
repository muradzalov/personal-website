import React, { Fragment } from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'
import Description from '../../Static/Description'
import ComputerWallpaper from '../../Static/ComputerWallpaper.jpg'
import ResumePhoto from '../../Static/ResumePhoto.png'

export default function About() {
  return (
    <div>

      <Navbar />

      <motion.div className='about-page' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

        <div className='white-container'>

          <div className='about-title'>
            // Hello World
            </div>

          <div className='description-container'>
            {Description.split('\n').map((item, key) => {
              return <Fragment key={key}>{item}<br /></Fragment>
            })}

            <div className='resume-container'>
              {/* <Link to="/resume">
                  <img src={ResumeLogo} alt='' className='pdf-image' />
              </Link> */}
              <a href='https://drive.google.com/file/d/1cxaFQ_T-CAPnBcTzHuOM1u3gKxaWQICs/view?usp=sharing' rel="noopener noreferrer" target="_blank">              
              <img src={ResumePhoto} alt='' className='pdf-image' /></a>
            </div>
          </div>

          <div className='image-container'>
            <img src={ComputerWallpaper} alt='' className='computer-image' />
          </div>


        </div>
      </motion.div>

    </div>
  )
}
