import React from "react";
import HeaderSecondary from "../components/HeaderSecondary";
import HeaderTertiary from "../components/HeaderTertiary";
import Description from "../components/Description";
import SeriviceCards from "../components/SeriviceCards";

function OurServices() {
  return (
    <div
      className="services"
      style={{
        backgroundColor: "var(--color-white-light-2)",
        height: "100%",
        padding:'0rem 2rem 0rem 5rem'
      }}
    >
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(2, 1fr)',
        height:'12.75rem',
        justifyContent:'center',
        alignItems:'center'

      }} >
        <div style={{
          height:'100%',
          gridColumn:'1 / 2',

        }}>
          <HeaderSecondary heading="Our Services" />
          <HeaderTertiary heading="Fueling Creativity and Innovation" />
        </div>
        <div style={{
          paddingLeft:'3rem',
          gridColumn:'2 / -1',
        }}>
          <Description description="Empowering maker of all levels with cutting-edge tools, collaboration and custom fabrication services. Join our community now!"></Description>
        </div>
      </div>

      <div style={{
        paddingTop:'2rem',
        display:'grid',
        gridTemplateColumns:'repeat(4, min-max(19rem, 1fr))',
        gridGap:'1rem',

      }}>
        <SeriviceCards></SeriviceCards>
      </div>
    </div>
  );
}

export default OurServices;
