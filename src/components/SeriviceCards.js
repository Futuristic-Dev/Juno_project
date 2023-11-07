import React from "react";
import Mechatronics from "../Asah_Images/mechatronics.png";
function SeriviceCards() {
  return (
    <div
      className="services-card"
      style={{
        width: "18.438rem",
        height: "24.625rem",
        borderRadius: ".9rem",
        backgroundColor: "var(--color-white)",
        boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.10)",
        display: "grid",
        // flexDirection: "column",
      }}
    >
      <img alt="pictures" src={Mechatronics}></img>
      <div
        style={{
          height: "100%",
          width: "100%",
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <h4
          style={{
            fontSize: "1.4rem",
            textAlign: "start",
            marginLeft:'-1.2rem',
            padding:'0rem'

            // paddingLeft: "1.5rem",
            // display: "block",
            // margin: "-1rem 0rem -2.7rem 0rem",
          }}
        >
          Mechatronic solutions
        </h4>
        <span style={{
          fontSize:'1rem',
          padding:'0.9rem 1rem .5rem 1rem',
          textAlign:'start'
        }}>
          Integration of mechanical, electronic,software engineering for
          mechatronic system development
        </span>
      </div>
    </div>
  );
}

export default SeriviceCards;
