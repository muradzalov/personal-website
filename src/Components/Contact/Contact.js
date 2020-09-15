import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div>

      <Navbar />

      <motion.div className='contact-page' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hello, contact information is here
      </motion.div>

    </div>
  )
}
