import React ,{useState}from "react";
// import { ReactComponent as Engineering } from "../SVG/engineering.svg";

function AboutCards(props) {
  const {info} = props;

  // console.log(info)
  const [hover, setHover] = useState(false);

    const handleMouseEnter = () =>{
        setHover(true)
    }

    const handleMouseLeave = () =>{
        setHover(false)
    }
  return (
    <div className="about-cards" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="about-cards__holder">
        <div className="about-cards__holder--icon">
          {/* <Engineering className="about-cards__icon"></Engineering> */}
          <img src={info.icon} className="about-cards__icon"></img>
        </div>
        <span className="about-cards__holder--number">{info.id}</span>
      </div>
      <h4 className="about-cards__heading">{info.title}</h4>
      <p className="about-cards__paragraph">
        {info.description}
      </p>
    </div>
  );
}

export default AboutCards;
