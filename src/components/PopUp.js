import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function PopUp() {
  const [tap, setTap] = useState(false);
  const popContainer = useRef(null);

  useEffect(() => {
    popContainer.current.addEventListener("click", (e) => {
      
        popContainer.current.classList.remove('pop-display')
        popContainer.current.classList.add('pop-hidden')
      //   console.log(target.closest('pop-up').classList);
    });
  }, []);
  // console.log(popContainer.current);
  const tapStyle = {
    display: "none",
    width: "0",
    visibility: "hidden",
  };
  return ReactDOM.createPortal(
    <div>
      <div
        className="pop pop-hidden"
        ref={popContainer}
        //    style={tap ? {...tapStyle} : {}}
      >
        <ul className="pop-up">
          <li className="pop-up__item" id="#home_link">
            <a href="#home_section" className="pop-up__item--link">
              Home
            </a>
          </li>
          <li className="pop-up__item" id="#about_link">
            <a href="#about_section" className="pop-up__item--link">
              Abouts
            </a>
          </li>
          <li className="pop-up__item" id="#service_link">
            <a href="#service_section" className="pop-up__item--link">
              Services
            </a>
          </li>
          <li className="pop-up__item" id="#project_link">
            <a href="#project_section" className="pop-up__item--link">
              Projects
            </a>
          </li>
          <li className="pop-up__item" id="#scheme_link">
            <a href="#scheme_section" className="pop-up__item--link">
              Scheme
            </a>
          </li>
        </ul>
      </div>
    </div>,
    document.getElementById("portal-container")
  );
}

export default PopUp;
