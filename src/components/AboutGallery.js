import React from "react";
import RigImage from "../styles/layout/rig-image.jpeg";
import EngImage from "../Asah_Images/lady_and_robot-arm.png";
function AboutGallery() {
  const imageStyle ={
    width:'100%',
    height:'100%',
    borderRadius:'.9rem'
  }
  return (
    <div className="about-gallery"
    style={{
      display:"grid",
      gridTemplateRows:'repeat(15,1fr)',
      gridTemplateColumns:'repeat(13,1fr)'
    }}>
     <div style={{
      gridRow:'2 / 11',
      gridColumn: '3 / 12'
     }}>
       <img className="about-gallery__img-1" alt="aboutimage" src={RigImage} style={{...imageStyle, height:'95%'}} />
     </div>
      
      <div style={{
        gridColumn:'2 / 8',
        gridRow:'6 / 12'
      }}>
      <img
        className="about-gallery__img-2"
        alt="aboutimage"
        src={EngImage}
        style={{...imageStyle, marginTop:'1.5rem'}}
      ></img>
      </div>
      {/* <img className="about-gallery__img-3" alt="aboutimage"></img>
      <div className="about-gallery__banner">
        <span className="about-gallery__banner-rtt-number">30</span>
        <span className="about-gallery__banner--text">years of experience</span>
      </div> */}
    </div>
  );
}

export default AboutGallery;
