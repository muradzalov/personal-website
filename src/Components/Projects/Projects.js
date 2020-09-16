import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Projects.css'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <div>

      <Navbar />

      <motion.div className='projects-page' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

        Test run v3


      </motion.div>

    </div>
  )
}
