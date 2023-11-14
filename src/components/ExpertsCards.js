import React from 'react'
import pic from '../Asah_Images/expert_3.png'
import icon from '../SVG/share.svg'
function ExpertsCards(props) {

  const {list} = props;
  // console.log(list);
  return (
    <div className='experts-card' style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'5rem',

    }}>
        <img src={list.img} style={{
            width:'100%',
            height:'100%',
            padding:'1rem',
            marginTop:'-2rem',
            paddingBottom:'2rem'
        }}></img>
        <div style={{
          display:'flex',
          width:'4rem',
          height:'4rem',
          position:'absolute',
          top:'73%',
          margin:'1rem 0rem -1rem 11rem',
        }}>
          <img src={icon}
            style={{
              height:'100%',
              width:'100%',
              padding:'.5rem',
              // marginTop:'-5rem',
              position:'absolute',

            }}
          ></img>
        </div>
          <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'start',
            marginLeft:'-7rem'
          }}>
          <span style={{
            fontSize:'1.2rem',
            fontWeight:'400',
            color:'var(--color-main)',
            paddingBottom:'.5rem'
          }}>
             {list.position}
          </span>
          <span style={{
            fontSize:'1.4rem',
            fontWeight:'800',
          }}>
              {list.name}
          </span>
          </div>
    </div>
  )
}

export default ExpertsCards