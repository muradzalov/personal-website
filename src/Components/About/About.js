import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'
import { Button } from 'react-bootstrap'

export default function About() {
  return (
    <div>

      <Navbar />

      <motion.div className='about-page' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Hello, about information is here

        <>
          <Button variant="primary">Primary</Button>{' '}
          <Button variant="secondary">Secondary</Button>{' '}
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
          <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
          <Button variant="link">Link</Button>
        </>



      </motion.div>

    </div>
  )
}
