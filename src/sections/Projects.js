import React from "react";
import HeaderTertiary from "../components/HeaderTertiary";
import HeaderSecondary from "../components/HeaderSecondary";
import ProjectCards from "../components/ProjectCards";
import img_1 from "../Asha_images/kids at home.PNG";
import img_2 from "../Asah_Images/project_img_2.png";
import img_3 from "../Asah_Images/project_img_3.png";
import img_4 from "../Asah_Images/project_img_4.png";
import img_5 from "../Asha_images/Capture.JPG";
import img_6 from "../Asha_images/3.JPG";

function Projects() {
  const img_list = [img_1, img_2, img_3, img_4, img_5, img_6];
  return (
    <div
      className="project"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5rem",
        flexDirection: "column",
      }}
    >
      <div className="project--header"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          textAlign: "center",
          paddingBottom: '2rem'
        }}
      >
        <HeaderSecondary heading="Latest projects"></HeaderSecondary>
        <HeaderTertiary heading="Projects Recently Built By Us"></HeaderTertiary>
      </div>
      <div className="project--gallery__container">
      <div className="project--gallery"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(22rem, 1fr))",
          gridTemplateRows: "repeat(2, minmax(17rem, 1fr))",
          gridGap: "1.7rem",
        }}
      >

        {
        img_list.map((img_in, index) => (
          <ProjectCards key={index} img={img_in}></ProjectCards>
        ))
        }
      </div>
      </div>
    </div>
  );
}

export default Projects;
