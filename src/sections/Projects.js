import React from "react";
import HeaderTertiary from "../components/HeaderTertiary";
import HeaderSecondary from "../components/HeaderSecondary";
import ProjectCards from "../components/ProjectCards";
import img_1 from '../Asah_Images/project_img_1.png'
import img_2 from '../Asah_Images/project_img_2.png'
import img_3 from '../Asah_Images/project_img_3.png'
import img_4 from '../Asah_Images/project_img_4.png'
import img_5 from '../Asah_Images/project_img_5.png'
import img_6 from '../Asah_Images/project_img_6.png'

function Projects() {

  const img_list = [img_1,img_2, img_3, img_4, img_5, img_6];
  return (
    <div
      className="projects"
      style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'5rem',
        flexDirection:'column'
      }}
    >
      <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        textAlign:'center'

      }}>
        <HeaderSecondary heading="Latest projects"></HeaderSecondary>
        <HeaderTertiary heading="Projects Built Recently Bulit By Us"></HeaderTertiary>
      </div>
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(3, minmax(25rem, 1fr))',
        gridTemplateRows:'repeat(2, minmax(20rem, 1fr))',
        gridGap:'1rem'
      }}>
      {
        img_list.map((img_in) =>
          <ProjectCards img={img_in}></ProjectCards>
        )
      }
      </div>
    </div>
  );
}

export default Projects;
