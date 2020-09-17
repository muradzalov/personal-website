import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Projects.css'
import { motion } from 'framer-motion'
import DeployedSiteIcon from '../../Static/DeployedSiteIcon.png'
import GitHubLogo from '../../Static/GitHubLogo.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import GeoWeather1 from '../../Static/Carousel/GeoWeather1.png'
import GeoWeather2 from '../../Static/Carousel/GeoWeather2.png'
import CrossSnap1 from '../../Static/Carousel/CrossSnap1.png'
import CrossSnap2 from '../../Static/Carousel/CrossSnap2.png'
import CrossSnap3 from '../../Static/Carousel/CrossSnap3.png'
import CrossSnap4 from '../../Static/Carousel/CrossSnap4.png'
import DouglasFir1 from '../../Static/Carousel/DouglasFir1.png'
import DouglasFir2 from '../../Static/Carousel/DouglasFir2.png'
import DouglasFir3 from '../../Static/Carousel/DouglasFir3.png'


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


          {/* ********* GEOWEATHER ********* */}
          <div className='single-project-container'>

            <div className='project-title-container'>
              <div className='project-title'>
                GeoWeather
              </div>
            </div>

            {/* ********* CONTENT ********* */}
            <div className='description-technologies-container'>
              <div className='description-header-and-content'>
                <div className='description-header'>
                  Description:
                </div>
                <p className='description-content'>
                  GeoWeather is a web application I developed that fetches temperature, weather conditions, and city image based on a user's input. The frontend is built using modular React components and styled with CSS. I used React Hooks in this application to learn first-hand about the benefits of foregoing 'this' context and method binding. This application is deployed using Netlify.
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

            {/* ********* CAROUSEL ********* */}
            <div className='carousel-div'>
              <Carousel className='carousel-container' {...getConfigurableProps()}>
                <div>
                  <img src={GeoWeather1} alt='' />
                </div>
                <div>
                  <img src={GeoWeather2} alt='' />
                </div>
              </Carousel>
            </div>

            {/* ********* LINKS ********* */}
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










          {/* ********* International Space Station Tracker ********* */}
          <div className='single-project-container'>

            <div className='project-title-container'>
              <div className='project-title'>
                International Space Station Tracker
              </div>
            </div>

            {/* ********* CONTENT ********* */}
            <div className='description-technologies-container'>
              <div className='description-header-and-content'>
                <div className='description-header'>
                  Description:
                </div>
                <p className='description-content'>
                  The International Space Station Tracker is a web application I developed for fun to plot the location of the ISS while in orbit onto a world map. This project is a work-in-progress, and I aim to also add a feature that allows users to pinpoint a coordinate set on the world map and receive a set of times that the ISS will be visible in the night sky for them. The frontend is built using modular React components with CSS styling, and this application is powered by a number of API such as React-Maps and OpenNotify. This application is deployed using AWS Amplify.
                </p>
              </div>
              <div className='technologies-header-and-content'>
                <div className='technologies-header'>
                  Technologies Used:
                </div>
                <p className='technologies-content'>
                  React, React Maps, AWS, HTML, CSS, JavaScript, RESTful API
                </p>
              </div>
            </div>

            {/* ********* CAROUSEL *********
            <div className='carousel-div'>
              <Carousel className='carousel-container' {...getConfigurableProps()}>
                <div>
                  <img src={GeoWeather1} alt='' />
                </div>
                <div>
                  <img src={GeoWeather2} alt='' />
                </div>
              </Carousel>
            </div> */}

            {/* ********* LINKS ********* */}
            <div className='links-div'>
              <div className='github-link-div'>
                <a href="https://github.com/muradzalov/SpaceStationTracker/tree/master/src" rel="noopener noreferrer" target="_blank">
                  <img src={GitHubLogo} alt='' className='link-icon' /> GitHub
                </a>
              </div>

              <div className='deployed-link-div'>
                <a href="https://master.d11vj5ny5dd1v.amplifyapp.com/" rel="noopener noreferrer" target="_blank">
                  <img src={DeployedSiteIcon} alt='' className='link-icon' /> Deployed Site
                </a>
              </div>
            </div>

          </div>










          {/* ********* PERSONAL WEBSITE ********* */}
          <div className='single-project-container'>

            <div className='project-title-container'>
              <div className='project-title'>
                Personal Website
              </div>
            </div>

            {/* ********* CONTENT ********* */}
            <div className='description-technologies-container'>
              <div className='description-header-and-content'>
                <div className='description-header'>
                  Description:
                </div>
                <p className='description-content'>
                  I created a personal website to practice using basic HTML, CSS, and modularized React components. This site as a hub for my projects and contact information and is deployed through AWS Amplify and Route 53.
                </p>
              </div>
              <div className='technologies-header-and-content'>
                <div className='technologies-header'>
                  Technologies Used:
                </div>
                <p className='technologies-content'>
                  React, HTML, CSS, AWS Amplify, AWS Route 53
                </p>
              </div>
            </div>

            {/* ********* LINKS ********* */}
            <div className='links-div'>
              <div className='github-link-div'>
                <a href="https://github.com/muradzalov/personal-website" rel="noopener noreferrer" target="_blank">
                  <img src={GitHubLogo} alt='' className='link-icon' /> GitHub
                </a>
              </div>

              <div className='deployed-link-div'>
                <a href="https://www.muradzalov.com/" rel="noopener noreferrer" target="_blank">
                  <img src={DeployedSiteIcon} alt='' className='link-icon' /> Deployed Site
                </a>
              </div>
            </div>

          </div>










          {/* ********* CROSSSNAP ********* */}
          <div className='single-project-container'>

            <div className='project-title-container'>
              <div className='project-title'>
                CrossSnap
              </div>
            </div>

            {/* ********* CONTENT ********* */}
            <div className='description-technologies-container'>
              <div className='description-header-and-content'>
                <div className='description-header'>
                  Description:
                </div>
                <p className='description-content'>
                  CrossSnap is a multiplayer crossword mobile application that allows users to complete New York Times crossword puzzles together. The application features real-time gameplay with multiple users, game and user persistence, and a dynamic custom-built crossword screen. I built this project with my team as part of Fullstack Academy's senior phase. My contributions to this project include the architecture of back-end schemas for the crossword JSON repository, navigation inside the mobile application, conditional rendering of screens fetching data from the database, and construction of the crossword game board.
                </p>
              </div>
              <div className='technologies-header-and-content'>
                <div className='technologies-header'>
                  Technologies Used:
                </div>
                <p className='technologies-content'>
                  React-Native, React-Redux, Sequelize, Expo CLI, Socket.IO, PostgreSQL, Node.js
                </p>
              </div>
            </div>

            {/* ********* CAROUSEL ********* */}
            <div className='carousel-div'>
              <Carousel className='carousel-container' {...getConfigurableProps()}>
                <div>
                  <img src={CrossSnap1} alt='' />
                </div>
                <div>
                  <img src={CrossSnap2} alt='' />
                </div>
                <div>
                  <img src={CrossSnap3} alt='' />
                </div>
                <div>
                  <img src={CrossSnap4} alt='' />
                </div>
              </Carousel>
            </div>

            {/* ********* LINKS ********* */}
            <div className='links-div'>
              <div className='github-link-div'>
                <a href="https://github.com/CrossCollab/CrossSnap" rel="noopener noreferrer" target="_blank">
                  <img src={GitHubLogo} alt='' className='link-icon' /> GitHub
                </a>
              </div>
            </div>

          </div>










          {/* ********* DOUGLAS FIR APOTHECARY ********* */}
          <div className='single-project-container'>

            <div className='project-title-container'>
              <div className='project-title'>
                Douglas Fir Apothecary
              </div>
            </div>

            {/* ********* CONTENT ********* */}
            <div className='description-technologies-container'>
              <div className='description-header-and-content'>
                <div className='description-header'>
                  Description:
                </div>
                <p className='description-content'>
                  Douglas Fir Apothecary is an e-commerce web application that welcomes users to browse and shop for a variety of apothecary products featuring Stripe integrated checkout, persistent guest/authenticated user experiences, and Google open authorization. I developed this project with my team as part of Fullstack's senior phase. My contributions include the creation of the conditional view of all products on the homepage, protection of the back-end routes that allow users to commit their selected items and quantities to the database, and the incorporation of Google OAuth for a persistent and seamless login experience.
                </p>
              </div>
              <div className='technologies-header-and-content'>
                <div className='technologies-header'>
                  Technologies Used:
                </div>
                <p className='technologies-content'>
                  React, Redux, Express, Node, CSS, Heroku, Google OAuth, Sequelize, PostgreSQL
                </p>
              </div>
            </div>

            {/* ********* CAROUSEL ********* */}
            <div className='carousel-div'>
              <Carousel className='carousel-container' {...getConfigurableProps()}>
                <div>
                  <img src={DouglasFir1} alt='' />
                </div>
                <div>
                  <img src={DouglasFir2} alt='' />
                </div>
                <div>
                  <img src={DouglasFir3} alt='' />
                </div>
              </Carousel>
            </div>

            {/* ********* LINKS ********* */}
            <div className='links-div'>
              <div className='github-link-div'>
                <a href="https://github.com/1911-Grace-Shopper-Team-Douglas-Fir/GraceShopper" rel="noopener noreferrer" target="_blank">
                  <img src={GitHubLogo} alt='' className='link-icon' /> GitHub
                </a>
              </div>

              <div className='deployed-link-div'>
                <a href="https://douglasfirapothecary.herokuapp.com/" rel="noopener noreferrer" target="_blank">
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
