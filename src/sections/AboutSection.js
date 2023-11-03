import React from 'react';
import AboutCards from '../components/AboutCards';
import AboutGallery from '../components/AboutGallery';
import AboutMain from '../components/AboutMain';


function AboutSection() {
  return (
    <div className='about'>
      <div className='about-top'>
        <AboutCards></AboutCards>
        <AboutCards></AboutCards>
        <AboutCards></AboutCards>
      </div>
      <div className='about-section'>
        <AboutGallery></AboutGallery>
        <AboutMain></AboutMain>
      </div>
    </div>
  )
}

export default AboutSection