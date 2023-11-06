import React from "react";
import RigImage from "../styles/layout/rig-image.jpeg";
import EngImage from "../Asah_Images/Rectangle 10.png";
function AboutGallery() {
  return (
    <div
      className="about-gallery"
      style={{
        display: "grid",
        gridTemplateRows: "repeat(12, 0.5fr)",
        gridTemplateColumns: "repeat(20, 0.5fr)",
        height:'100%'
      }}
    >
      <img
        className="about-gallery__img-1"
        alt="aboutimage"
        src={RigImage}
        >
      <img className="about-gallery__img-2" alt="aboutimage"
      style={{
        gridRow: "7 / -1",
          gridColumn: "2 / 12",
          width: "100%",
          height: "86%",
          borderRadius:'.9rem'
      }}
      src={EngImage}
      ></img>
      <img className="about-gallery__img-3" alt="aboutimage"></img>
      <div className="about-gallery__banner">
        <span className="about-gallery__banner-rtt-number"
        style={{
          display: "grid",
          border: "10px dashed #89A0cCD",
          gridColumn: "4 / 9",
          gridRow: "11 / 13",
        }}
        >30</span>
        <span className="about-gallery__banner--text">years of experience</span>
      </div>
    </div>
  );
}

export default AboutGallery;
