import React from 'react'
import HeaderSecondary from '../components/HeaderSecondary'
import HeaderTertiary from '../components/HeaderTertiary'
import Description from '../components/Description'
import ChooseCards from './ChooseCards'
import icon_1 from '../SVG/choose_icon_1.svg'
import icon_2 from '../SVG/choose_icon_2.svg'
import icon_3 from '../SVG/choose_icon_3.svg'
import icon_4 from '../SVG/choose_icon_4.svg'

function ChooseMain() {

    
   const choose_info = [{
    id:'01',
    title:'Accessibility',
    description:'Our innovative projects drive technology forward and inspire a creative work environment',
    icon: icon_1
   },
   {
    id:'02',
    title:'Professional Growth',
    description:'Expect continuous professional growth with diverse opportunities and a supportive learning environment.',
    icon: icon_2
   },
   {
    id:'03',
    title:'Expert Engineers',
    description:'Highly proficient engineers demonstrating expertise and excellence in their respective domains.',
    icon: icon_3
   },
   {
    id:'04',
    title:'Award Winning',
    description:'Recognized for excellence, our award-winning team showcases our unwavering commitment to quality and innovation.',
    icon: icon_4
   },];
  return (
    <div style={{
        color:'var(--color-white-dark-1)',
        // border:'1px solid var(--color-white-dark-1)',
        // padding:'1rem 2rem'
    }}>
        <HeaderSecondary heading='why choose us'></HeaderSecondary>
        <HeaderTertiary heading='Reasons To Choose Asah Maker Space'></HeaderTertiary>
        <Description description='We offer a dynamic environment where your ideas can transform to make positive impact on society.'></Description>
        <div style={{
            display:'grid',
            gridTemplateRows:'repeat(2, min-content)',
            gridTemplateColumns:'repeat(2, min-content)',
            gridGap:'1rem',
        }}>
            {
                choose_info.map((value, index) => {
                  return  <ChooseCards key={index} info={value}></ChooseCards>
                })
            }
        </div>
    </div>
  )
}

export default ChooseMain