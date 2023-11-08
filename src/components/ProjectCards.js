import React from 'react'

function ProjectCards({img}) {

    console.log(img);
  return (
    <div style={{
        width:'24.584rem',
        height:'18.48563rem',
        borderRadius:'.6rem',
    }}>
        <img src={img} style={{
            width:'100%',
            height:'100%'
        }}></img>
    </div>
  )
}

export default ProjectCards