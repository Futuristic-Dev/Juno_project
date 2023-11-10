import { hover } from "@testing-library/user-event/dist/hover";
import React , {useState} from "react";
import wave from "../Asah_Images/wave_3.avif";


function SchemeCards(props) {
   const {list} = props;
//    const hoverClass = document.getElementsByClassName('scheme-card');
//    console.log(hoverClass);
//    console.log(list.img);

const [hovered, setHover] = useState(false);
const hoverStyle = {
    // backgroundColor:"var(--color-black)",
    color:'var(--color-white)',
    boxShadow:'1px 1px 10px 1px rgba(255, 255, 255, .1)',
    backgroundImage:`linear-gradient(rgba(0, 0, 0, .95), rgba(0,0,0,.9)),url(${wave})`,
}

const schemeCard = {
        display: "flex",
        flexDirection:'column',
        gridTemplateRows: "repeat(3,1fr)",
        width: "17rem",
        height: "22rem",
        backgroundColor: "var(--color-white)",
        color: "var(--color-black)",
        boxShadow: "1px 1px 10px 1px rgba(0,0,0,.1)",
        justifyContent: "space-evenly",
        justifyItems:'center',
        alignItems: "center",
        borderRadius: ".6rem",
        padding:'1rem 0rem',
        zIndex:'100',
        transition:'all .5s ease-out'
}

const handleMouseEnter = () =>{
    setHover(true);
}

const handleMouseLeave = () =>{
    setHover(false)
}

const mainStyle = hovered ? { ...schemeCard , ...hoverStyle} : schemeCard;

  return (
    <div>
      <div
        className='scheme-card'
        style={mainStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          style={{
            gridColumn:'1 / 2',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems:'center',
              justifyContent:'center',
              height: "6rem",
              width: "6rem",
              backgroundColor: "var(--color-main)",
              borderRadius: "100%",
            }}
          >
            <img src={list.img}></img>
          </div>
          <span
          className="scheme-card__number"
            style={{
              fontSize: "1.6rem",
              display:'block',
              backgroundColor:'var(--color-main-dark)',
              height:'3rem',
              width:'3rem',
              borderRadius:'100%',
              textAlign:'center',
              paddingTop:'.4rem',
              margin:'-3rem 0rem 0rem -1.5rem',
              border:'solid .2rem var(--color-white)',
              color:'var(--color-white)',
              transition:'all .2s ease-out'
            }}
          >
            {list.id}
          </span>
        </div>
        <h4
          style={{
            fontSize: "1.4rem",
            textTransform: "capitalize",
          }}
        >
          {list.title}
        </h4>
        <p
          style={{
            fontSize: ".9rem",
            fontWeight:'400',
            textAlign: "center",
            padding:' 0rem .8rem',
            // textJustify:'center',
            lineHeight:'1.65',
            textWrap:'wrap'
          }}
        >
          {list.text}
        </p>
      </div>
    </div>
  );
}

export default SchemeCards;
