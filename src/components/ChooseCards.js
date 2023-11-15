import React , { useState} from 'react'
import chooseIcon from '../SVG/choose_icon_1.svg'

function ChooseCards(props) {
    const {info} = props
    // console.log(info)

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () =>{
        setHover(true)
    }

    const handleMouseLeave = () =>{
        setHover(false)
    }
    const cardStyles = {
        width: '17.4375rem',
        height: '10rem',
        border:'1px solid var(--color-white-dark)',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'.5rem 0rem',
        // backgroundColor:'transparent'
    }
    const textStyles = {
        fontSize:'1.6rem',
        padding:'.6rem'
        }
  return (
    <div style={ hover ? {...cardStyles, backgroundColor:'var(--color-main)'} : cardStyles}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
            <img src={info.icon} style={{
            width:'3.5rem',
            height:'3.5rem',
            paddingBottom:'.9rem'
            }}></img>
            <span style={hover ? {...textStyles, fontSize:'0.9rem', padding:'0rem',textAlign:'center'}: textStyles}>
                {hover ? info.description : info.title}
            </span>
    </div>
  )
}

export default ChooseCards