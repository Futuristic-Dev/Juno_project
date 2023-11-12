import React from 'react'
import HeaderSecondary from '../components/HeaderSecondary'
import HeaderTertiary from '../components/HeaderTertiary'
import ExpertsCards from '../components/ExpertsCards'
function Experts() {
  return (
    <div className='experts'
      style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}>
        <HeaderSecondary heading='Our Experts'></HeaderSecondary>
        <HeaderTertiary heading='Meet Our Experienced Team'></HeaderTertiary>
      </div>
      <div>
        <ExpertsCards></ExpertsCards>
      </div>
    </div>
  )
}

export default Experts