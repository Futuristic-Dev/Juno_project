import React from 'react'
import ChooseMain from '../components/ChooseMain'
import ChooseGallery from '../components/ChooseGallery'

function ChooseUs() {
  return (
    <div className='choose' style={{
      display:'grid',
      gridTemplateColumns:'repeat(2, 1fr)',
      padding:'4rem'

    }}>
      <ChooseMain></ChooseMain>
      <ChooseGallery></ChooseGallery>
    </div>
  )
}

export default ChooseUs