import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as PhoneInTalk } from "../SVG/call.svg";

function NavBar() {
  const [intersectingState, setIntersection] = useState(false);
  
// const elementRef = useRef(document.querySelector('.nav'))
useEffect(()=>{
  document.querySelector('.nav').addEventListener('click', handleClick)
  let observer = new IntersectionObserver(observerCallback,options)
  
  observer.observe(document.querySelector('.banner'))

  return () =>{
    document.getElementById('nav').removeEventListener('click',handleClick)
    observer.unobserve(document.querySelector('.banner'))
  }
},[])

  const options = {
    root:document.querySelector('.banner'),
    rootMargin:'0px',
    threshold:0.70
  }

  const observerCallback = (entries) =>{
    entries.forEach(element => {
      
        // document.querySelector('.nav').classList.add('sticky')
      if (!element.isIntersecting && element.intersectionRect.top <= 0){
        document.getElementById('nav').classList.replace('nav','sticky')
        }
      if (!element.isIntersecting && element.intersectionRect.top > 0){
        document.getElementById('nav').classList.replace('sticky', 'nav')
      }
      // console.log(element.isIntersecting,element.intersectionRect.top)
      setIntersection(element.isIntersecting)
      // console.log(element.isIntersecting)
    });
  }
  const handleClick = (e) => {
    e.preventDefault();
    const elementClass = e.target.parentNode.classList;
    console.log(e.target.classList == 'nav-bar--lists__item')
    if (elementClass == "nav-bar--lists__item") {
      const parentElementId = e.target.parentNode.id;
      const targetElementText = parentElementId.replace("link", "section");
      const targetElement = document.getElementById(targetElementText);
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  // onClick={handleClick}
  return (
    <div className="nav" id="nav">
      <div className="nav-bar">
        <img src="./logo.png" className="nav-bar--logo"></img>
        <ul className="nav-bar--lists">
          <li className="nav-bar--lists__item" id="#home_link">
            <a href="#home_section" className="nav-bar--link">
              Home
            </a>
          </li>
          <li className="nav-bar--lists__item" id="#about_link">
            <a href="#about_section" className="nav-bar--link">
              Abouts
            </a>
          </li>
          <li className="nav-bar--lists__item" id="#service_link">
            <a href="#service_section" className="nav-bar--link">
              Services
            </a>
          </li>
          <li className="nav-bar--lists__item" id="#project_link">
            <a href="#project_section" className="nav-bar--link">
              Projects
            </a>
          </li>
          <li className="nav-bar--lists__item" id="#scheme_link">
            <a href="#scheme_section" className="nav-bar--link">
              Scheme
            </a>
          </li>
        </ul>
        <a className="nav-bar--contact" href="#">
          <PhoneInTalk className="nav-bar--contact__icon"></PhoneInTalk>
          <span className="nav-bar--contact__text">contact Us</span>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
