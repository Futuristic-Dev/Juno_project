import React from 'react'
import HeaderSecondary from './HeaderSecondary'
import HeaderTertiary from './HeaderTertiary'
import ButtonMain from './ButtonMain'


function AboutMain() {
  return (
    <div className='about-main'>
        <HeaderSecondary></HeaderSecondary>
        <HeaderTertiary></HeaderTertiary>
        <p className='about-main--paragraph'>
        We are the forefront of mechatronics research, where the realms of mechanical, electronics and software engineering intersects to create revolutionary solutions
        </p>
        <ButtonMain></ButtonMain>
    </div>
  )
}

export default AboutMain