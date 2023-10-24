import React from 'react';
import AboutCards from '../components/AboutCards';


function AboutSection() {
  return (
    <div className='about'>
      <div className='about-top'>
        <AboutCards></AboutCards>
        <AboutCards></AboutCards>
        <AboutCards></AboutCards>
      </div>
    </div>
  )
}

export default AboutSection