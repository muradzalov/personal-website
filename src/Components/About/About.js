import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'
import Description from '../../Static/Description'

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
              {Description}
            </div>






        </div>
      </motion.div>

    </div>
  )
}
