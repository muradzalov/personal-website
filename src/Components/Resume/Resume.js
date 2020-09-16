import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Resume.css'
import { motion } from 'framer-motion'
import MuradZalovResume from '../../Static/MuradZalovResume.jpg'

export default function Projects() {
  return (
    <div>

      <Navbar />

      <motion.div className='projects-page' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

        <div className='image-container'>
            <img src={MuradZalovResume} alt='' className='resume-image' />
          </div>

      </motion.div>

    </div>
  )
}
