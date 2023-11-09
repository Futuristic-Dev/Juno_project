import React from 'react'

function ProjectCards({img}) {

    // console.log(img);
  return (
    <div  className='image--container' style={{
        width:'22.584rem',
        height:'17.48563rem',
        borderRadius:'.6rem',
        position:'relative'
    }}>
        <img className='project--cards__image' src={img} style={{
            width:'100%',
            height:'100%'
        }}>
          
        </img>
    </div>
  )
}

export default ProjectCards