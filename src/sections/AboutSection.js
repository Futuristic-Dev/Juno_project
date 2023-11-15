import React from 'react';
import AboutCards from '../components/AboutCards';
import AboutGallery from '../components/AboutGallery';
import AboutMain from '../components/AboutMain';
import about_1 from '../SVG/about_1.svg'
import about_2 from '../SVG/about_2.svg'
import about_3 from '../SVG/about_3.svg'


function AboutSection() {

  const about_card_data = [{
    id: '01',
    title: 'Timely Delivery',
    icon:about_1,
    description:'Proudly delivering timely, reliable, and excellent services. Our efficient team consistently exceeds client expectations with high-quality solutions.'
  },
  {
    id: '02',
    title: 'Collaboration',
    icon:about_2,
    description:'Prioritizing collaborative partnerships with open communication, our commitment to working closely fosters lasting relationships and exceptional results.'
  },
  {
    id: '03',
    title: 'Quality Assurance',
    icon:about_3,
    description:'Committed to excellence, we ensure rigorous quality and prioritize continuous improvement for client satisfaction and trust in every interaction.'
  }]
  return (
    <div className='about'>
      <div className='about-top'>
       {
        about_card_data.map((value, index) =>{
        return <AboutCards key={index} info={value}></AboutCards>
        })
       }
      </div>
      <div className='about-section'>
        <AboutGallery></AboutGallery>
        <AboutMain></AboutMain>
      </div>
    </div>
  )
}

export default AboutSection