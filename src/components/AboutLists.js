import React from 'react'
import {ReactComponent as Correct} from "../SVG/correct.svg";

const AboutLists = (props) => {
    const {text} = props;
    // console.log(text);
  return (

    <div style={{
      display:'flex',
      justifyContent:'start',
      alignItems:'center',
      paddingBottom:'1rem'
    }} className='about--list'>
        <Correct></Correct>
        <span style={{
          fontSize:'1.4rem',
          paddingLeft:'1rem',
        }}>
            {text}
        </span>
    </div>
  )
}

export default AboutLists