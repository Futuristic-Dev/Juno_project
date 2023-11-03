import React from "react";

function AboutGallery() {
  return (
    <div className="about-gallery">
      <img className="about-gallery__img-1" alt="aboutimage"></img>
      <img className="about-gallery__img-2" alt="aboutimage"></img>
      <img className="about-gallery__img-3" alt="aboutimage"></img>
      <div className="about-gallery__banner">
        <span className="about-gallery__banner--number">30</span>
        <span className="about-gallery__banner--text">years of experience</span>
      </div>
    </div>
  );
}

export default AboutGallery;
