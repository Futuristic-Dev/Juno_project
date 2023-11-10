import React from "react";

function SeriviceCards(props) {
  const {list} = props;
  console.log(list);
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
        // justifyContent:'center',
        // alignItems:'center'
        // flexDirection: "column",
      }}
    >
      <img alt="pictures" src={list.img}></img>
      <div style={{
        display:"block",
        width:'4rem',
        height:'4rem',
        borderRadius:'100%',
        backgroundColor:'var(--color-main)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // margin: "-4rem 14rem",
        position:'absolute',
        transform: 'translate(333%, 247%)',
      }}>
        <img style={{
          width:'3rem',
          height:'3rem'
        }}
        src={list.icon}></img>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
        // margin: "0rem -14rem",

        }}
      >
        <h4
          style={{
            fontSize: "1.4rem",
            textAlign: "start",
            marginLeft:'-1.2rem',
            // justifySelf:'start',
            padding:'0rem'

            // paddingLeft: "1.5rem",
            // display: "block",
            // margin: "-1rem 0rem -2.7rem 0rem",
          }}
        >
          {list.title}
        </h4>
        <span style={{
          fontSize:'1rem',
          padding:'0.9rem 1rem .5rem 1rem',
          textAlign:'start',
          // marginRight:'13rem'
        }}>
          {list.text}
        </span>
      </div>
    </div>
  );
}

export default SeriviceCards;
