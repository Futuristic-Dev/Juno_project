import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as PhoneInTalk } from "../SVG/call.svg";

function NavBar() {
  const [intersectingState, setIntersection] = useState(false);

  const aboutRef = useRef(null);
  const navRef = useRef(null);
    useEffect(() => {
      aboutRef.current = document.getElementById("about_section");


    const menuElement = document.querySelector(".about_section");
    aboutRef.current.addEventListener("click", handleClick);
    let observer = new IntersectionObserver(observerCallback, options);


    observer.observe(aboutRef.current);
    return () => {
      document.getElementById("nav").removeEventListener("click", handleClick);
      observer.unobserve(aboutRef.current)
    };
  }, []);

  const options = {
    // root: document.querySelector(".banner"),
    rootMargin: "0px",
    threshold: [0.15],
  };

  const observerCallback = (entries) => {
    entries.forEach((element) => {
      if(element.isIntersecting && element.intersectionRect.y > 0){
        navRef.current.classList.replace('nav','sticky')
        // console.log(navRef.current.classList)
        
      }
      if(element.isIntersecting && element.intersectionRect.y == 0 || (!element.isIntersecting && element.intersectionRect.y > 0)){
        navRef.current.classList.replace('sticky','nav')
      }
      // setIntersection(true);
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const elementClass = e.target.closest('.nav-bar--lists__item');
    // console.log(e.target.classList == "nav-bar--lists__item");
    // console.log(elementClass);
    if (elementClass) {
      const parentElementId = elementClass.id;
      const targetElementText = parentElementId.replace("link", "section");
      const targetElement = document.getElementById(targetElementText);
      console.log(targetElementText);
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  // onClick={handleClick}
  return (
    <div  ref={navRef} className="nav" id="nav">
      <div ref={aboutRef} className="nav-bar">
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
