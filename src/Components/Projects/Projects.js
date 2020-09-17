import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Projects.css'
import { motion } from 'framer-motion'
import DeployedSiteIcon from '../../Static/DeployedSiteIcon.png'
import GitHubLogo from '../../Static/GitHubLogo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ResumePhoto from '../../Static/ResumePhoto.png'


export default function Projects() {

  const getConfigurableProps = () => ({
    showThumbs: false,
    infiniteLoop: true,
    showStatus: false
  });

  return (
    <div>
      <Navbar />
      <motion.div className='projects-page' exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>


        <div className='all-projects-container'>

          <div className='single-project-container'>

            <div className='project-title-container'>
              <div className='project-title'>
                GeoWeather
              </div>
            </div>


            <div className='description-technologies-container'>

              <div className='description-header-and-content'>
                <div className='description-header'>
                  Description:
                </div>

                <p className='description-content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>



              <div className='technologies-header-and-content'>
                <div className='technologies-header'>
                  Technologies Used:
                </div>

                <p className='technologies-content'>
                  React, React Hooks, HTML, CSS, JavaScript, Netlify, RESTful API
                </p>
              </div>

            </div>




            <div className='carousel-div'>
              <Carousel className='carousel-container' {...getConfigurableProps()}> 
                  <div>
                    <img src={DeployedSiteIcon} />
                  </div>
                  <div>
                    <img src={GitHubLogo} />
                  </div>
                  <div>
                    <img src={ResumePhoto} />
                  </div>
                </Carousel>
            </div>






            <div className='links-div'>
              <div className='github-link-div'>
                <a href="https://github.com/muradzalov/weatherApp2020" rel="noopener noreferrer" target="_blank">
                  <img src={GitHubLogo} alt='' className='link-icon' /> GitHub
                </a>
              </div>

              <div className='deployed-link-div'>
                <a href="https://weather-app-mz-2020.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <img src={DeployedSiteIcon} alt='' className='link-icon' /> Deployed Site
                </a>
              </div>
            </div>

          </div>














































        </div>
      </motion.div>
    </div>
  )
}
