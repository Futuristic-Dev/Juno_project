import React from "react";
import HeaderSecondary from "../components/HeaderSecondary";
import HeaderTertiary from "../components/HeaderTertiary";
import SchemeCards from "../components/SchemeCards";
import bank from '../SVG/bank.svg'
import document from '../SVG/document.svg'
import house from '../SVG/house.svg'
import together from '../SVG/together.svg'

const info_arr = [
  {
    id: "01",
    title: "Preparation",
    text: "We plan and define the objectives and scope and also create a detailed plan to allocate resources, also we conduct a literature review to identify gaps",
    img: bank,
  },
  {
    id: '02',
    title: "Execution",
    text: "With the knowledge and insights gained from our research, we transform it into tangible innovations, products and technologies",
    img: document,
  },
  {
    id:'03',
    title: "Quality Assurance",
    text: "We test to ensure innovations meet standards and practical integration into real-world applications while following regulations",
    img: house,
  },
  {
    id: '04',
    title: "Monitor and Vision",
    text: "We then document on the project and share findings while planning for future research directions to sustain and expand the project success.",
    img:together,
  },
];

function Scheme() {
  return (
    <div
      className="scheme"
      style={{
        color: "var(--color-white)",
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingTop:'3rem',
        // clipPath:'100% 0% , 100% 100%, 0% 100%, 50% 50% '
        // backgroundClip:'polygon( 100% 100%, 0% 100% , 80% 100%, 100% 80%)'
        // marginBottom:'11rem'

      }}
    >
      <div style={{
        display:'flex',
        flexDirection:"column",
        alignItems:"center",

      }}>
      <HeaderSecondary heading="Scheme of Operation"></HeaderSecondary>
      <HeaderTertiary heading="Our Standard Process of Working"></HeaderTertiary>
      </div>
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(4, 18rem)',
        gridGap:'.5rem',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:'2rem',
        marginBottom:'7rem'
      }}>
        {info_arr.map((list, key) => {
           return <SchemeCards key={key} list={list}></SchemeCards>
        })}
      </div>
      
      {/* <SchemeCards list={{...info_arr[1]}}></SchemeCards> */}
    </div>
  );
}

export default Scheme;
