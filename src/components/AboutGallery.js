import React from "react";
import RigImage from "../styles/layout/rig-image.jpeg";
import EngImage from "../Asah_Images/Rectangle 10.png";
function AboutGallery() {
  return (
    <div className="about-gallery">
      <img className="about-gallery__img-1" alt="aboutimage" src={RigImage} />
      <img
        className="about-gallery__img-2"
        alt="aboutimage"
        src={EngImage}
      ></img>
      <img className="about-gallery__img-3" alt="aboutimage"></img>
      <div className="about-gallery__banner">
        <span className="about-gallery__banner-rtt-number">30</span>
        <span className="about-gallery__banner--text">years of experience</span>
      </div>
    </div>
  );
}

export default AboutGallery;
