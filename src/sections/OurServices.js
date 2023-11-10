import React from "react";
import HeaderSecondary from "../components/HeaderSecondary";
import HeaderTertiary from "../components/HeaderTertiary";
import Description from "../components/Description";
import SeriviceCards from "../components/SeriviceCards";
import ServiceImg_1 from "../Asah_Images/service_img_1.png";
import ServiceImg_2 from "../Asah_Images/service_img_2.png";
import ServiceImg_3 from "../Asah_Images/service_img_3.png";
import ServiceImg_4 from "../Asah_Images/service_img_4.png";
import ServiceImg_5 from "../Asah_Images/service_img_5.png";
import ServiceImg_6 from "../Asah_Images/service_img_6.png";
import ServiceImg_7 from "../Asah_Images/service_img_7.png";
import ServiceImg_8 from "../Asah_Images/service_img_8.png";

import ServiceIcons_1 from "../SVG/serv_icon_1.svg";
import ServiceIcons_2 from "../SVG/serv_icon_2.svg";
import ServiceIcons_3 from "../SVG/serv_icon_3.svg";
import ServiceIcons_4 from "../SVG/serv_icon_4.svg";
import ServiceIcons_5 from "../SVG/serv_icon_5.svg";
import ServiceIcons_6 from "../SVG/serv_icon_6.svg";
import ServiceIcons_7 from "../SVG/serv_icon_7.svg";
import ServiceIcons_8 from "../SVG/serv_icon_8.svg";

const serv_info = [
  {
    id: "0",
    img: ServiceImg_1,
    icon: ServiceIcons_1,
    title: "Mechatronics  Solutions",
    text: "Integration of mechanical, electronic,software engineering for mechatronic system development",
  },
  {
    id: "1",
    img: ServiceImg_2,
    icon: ServiceIcons_2,
    title: "Robotics Advancement",
    text: "Creating cutting-edge robots for automation, manufacturing, and specialized applications.",
  },
  {
    id: "2",
    img: ServiceImg_3,
    icon: ServiceIcons_3,
    title: "Bespoke Programming",
    text: "Customized software for mechatronics, robotics: control algorithms, UI development.",
  },
  {
    id: "3",
    img: ServiceImg_4,
    icon: ServiceIcons_4,
    title: "IoT  Integration",
    text: "IoT solutions for device connection, daata-driven decisions, and process automation",
  },
  {
    id: "4",
    img: ServiceImg_5,
    icon: ServiceIcons_5,
    title: "Process Optimization",
    text: "Consulting for efficient production using advanced tech and automation solutions.",
  },
  {
    id: "5",
    img: ServiceImg_6,
    icon: ServiceIcons_6,
    title: "Product Prototyping",
    text: "Swiftly turning ideas into reality through rapid prototyping and development.",
  },
  {
    id: "6",
    img: ServiceImg_7,
    icon: ServiceIcons_7,
    title: "Research  ",
    text: "To majorly understand problems and solve them well, we serve quality research for that.",
  },
  {
    id: "7",
    img: ServiceImg_8,
    icon: ServiceIcons_8,
    title: "Training and Transfer",
    text: "Knowledge sharing and training programs to equip teams with the skills needed for projects.",
  },
];

function OurServices() {
  return (
    <div
      className="services"
      style={{
        backgroundColor: "var(--color-white-light-2)",
        height: "100%",
        padding: "0rem 2rem 0rem 5rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          height: "12.75rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            gridColumn: "1 / 2",
          }}
        >
          <HeaderSecondary heading="Our Services" />
          <HeaderTertiary heading="Fueling Creativity and Innovation" />
        </div>
        <div
          style={{
            paddingLeft: "3rem",
            gridColumn: "2 / -1",
          }}
        >
          <Description description="Empowering maker of all levels with cutting-edge tools, collaboration and custom fabrication services. Join our community now!"></Description>
        </div>
      </div>

      <div
        style={{
          paddingTop: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows:'repeat(2, 1fr)',
          gridGap: "1rem",
        }}
      >
        {serv_info.map((val, index) => {
          return <SeriviceCards key={index} list={val}></SeriviceCards>;
        })}
      </div>
    </div>
  );
}

export default OurServices;
