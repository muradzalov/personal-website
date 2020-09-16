import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Projects.css'
import { motion } from 'framer-motion'
import MuradZalovResume from '../../Static/MuradZalovResume.pdf'
// import { Document } from 'react-pdf'
import MyPdfViewer from '../../Components/resume'

export default function Projects() {
  return (
    <div>

      <Navbar />

      <motion.div className='projects-page' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>





        HELLOOOOOO

        {/* <div className='pdf'>
          <embed src={MuradZalovResume} type="application/pdf" width="1200px" height="1200px"/>
        </div> */}

        <MyPdfViewer />

        {/* <Document
          file="MuradZalovResume.pdf"
        /> */}





      </motion.div>

    </div>
  )
}
