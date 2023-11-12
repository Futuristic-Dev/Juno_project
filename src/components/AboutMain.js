import React from "react";
import HeaderSecondary from "./HeaderSecondary";
import HeaderTertiary from "./HeaderTertiary";
import ButtonMain from "./ButtonMain";
import AboutLists from "./AboutLists";

function AboutMain() {
  const textList = [
    { item: "1", text: "With focus on precision, we deliver" },
    { item: "2", text: "Encouraging creativity through  training" },
    { item: "3", text: "Solve complex challenges to enhance quality of life" },
  ];



  return (
    <div className="about-main" style={{
      // padding: '4rem 0rem',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '4.8rem',
      justifyContent:'start',
      alignItems:'start',
    }}>
      <HeaderSecondary heading="about us"></HeaderSecondary>
      <div style={
        {
          paddingRight:'8rem'
        }
      }>
      <HeaderTertiary className="tertiary" heading="Leading force in advanced technology"></HeaderTertiary>
      </div>
      <p
        className="about-main--paragraph"
        style={{
          fontSize: "1.5rem",
          fontWeight: "400",
          padding: "0rem 2rem 0rem 0rem",
          margin: "1rem 1rem 1.5rem 0rem",
          lineHeight: "2.1rem",
        }}
      >
        We are the forefront of mechatronics research, where the realms of
        mechanical, electronics and software engineering intersects to create
        revolutionary solutions
        
      </p>
      <div style={{
        marginBottom:'1.6rem'
      }}>
      {
        textList.map((list, index) =>
        <AboutLists key={index} text={list.text}/>
       )
      }
      </div>
      <ButtonMain></ButtonMain>
    </div>
  );
}

export default AboutMain;
