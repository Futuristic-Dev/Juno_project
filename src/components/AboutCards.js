import React from "react";
import { ReactComponent as Engineering } from "../SVG/engineering.svg";

function AboutCards() {
  return (
    <div className="about-cards">
      <div className="about-cards__holder">
        <div className="about-cards__holder--icon">
        <Engineering className="about-cards__icon"></Engineering>
        </div>
        <span className="about-cards__holder--number">01</span>
      </div>
      <h4 className="about-cards__heading">emergency services</h4>
      <p className="about-cards__paragraph">
        This is simply dummy text of the printing typesetting industry has been
        industry's standard dummy text ever since when an unknown printer took a
        galley.
      </p>
    </div>
  );
}

export default AboutCards;
