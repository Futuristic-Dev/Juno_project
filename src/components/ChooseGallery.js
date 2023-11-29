import React from 'react'
import wave_1 from '../SVG/wave(1).svg'
import pic_1 from '../Asah_Images/pic_1.jpeg'
import pic_2 from '../Asah_Images/pic_2.jpeg'
import pic_3 from '../Asah_Images/pic_3.png'

function ChooseGallery() {
  return (
    <div className='choose-gallery'>
    <div className='choose-gallery__container' style={{
      top:'30%',
      left:'5%'
    }} >
    <img className='choose-gallery__images' src={pic_1}></img>
    </div>
    <div className='choose-gallery__container' 
    style={{
      top: '25.5%',
      left: '61.8%'
    }}
    >
    <img className='choose-gallery__images pic_2' src={pic_2}></img>
    </div>
    <div className='choose-gallery__container'
    style={{
      top:'53%',
      left:'36%'
    }}
    >
    <img className='choose-gallery__images pic_3' src={pic_3}></img>
    </div>
    </div>
  )
}

export default ChooseGallery