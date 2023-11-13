import React from 'react'
import HeaderSecondary from '../components/HeaderSecondary'
import HeaderTertiary from '../components/HeaderTertiary'
import ExpertsCards from '../components/ExpertsCards';
import expert_img_3 from '../Asah_Images/expert_1.png'
import expert_img_2 from '../Asah_Images/expert_2.png'
import expert_img_1 from '../Asah_Images/expert_3.png'

const expert_info = [{
  id:'01',
  img:expert_img_1,
  name:'Asiedu Emmanuel',
  position:'Manger',
},
{
  id:'02',
  img:expert_img_2,
  name:'Kissiwaa Psalmet',
  position:'Director',
},
{
  id:'03',
  img:expert_img_3,
  name:'Maanu Emmanualla',
  position:'Secretary',
}]

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
      <div style={{
        display:'grid',
        gridTemplateColumns: 'repeat(3, 22rem)',
        gridGap:'1.5rem',
        // justifyContent:'space-around'
      }}>
        {
          expert_info.map((val, ind) =>{
            return <ExpertsCards key={ind} list={val}/>
          })
        }
      </div>
    </div>
  )
}

export default Experts