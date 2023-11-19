import React from "react";
import logo from "../logo.png";
import FooterHeaders from "../components/FooterHeaders";
import {ReactComponent as Linkedin} from "../SVG/linkedin.svg";
import {ReactComponent as X} from "../SVG/x.svg";
import {ReactComponent as Facebook} from "../SVG/facebook.svg";
import {ReactComponent as Instagram} from "../SVG/instagram.svg";
import {ReactComponent as Envelope} from "../SVG/envelope.svg";
import {ReactComponent as Location} from "../SVG/location.svg";

function Footer() {
  const yearCreated = new Date().getFullYear();
  const footerText = {
    fontSize:'1.1rem',
    paddingLeft:'.5rem'
  }
  const footerIcon ={
    fill:'var(--color-dark-ash-1)'
   }
  // console.log(yearCreated);
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--color-black-light)",
        color: "var(--color-white)",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        className="footer-display"
        style={{
          display: "grid",
          gridGap: "1rem",
          gridTemplateColumns: "repeat(3,1fr)",
          justifyContent: "center",
          // alignItems: "center",
          borderBottom: "2px solid var(--color-white)",
          width: "85%",
        }}
      >
        <div className="footer-display__description"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginRight: "2rem",
          }}
        >
          <img
            src={logo}
            style={{
              width: "13rem",
              height: "13rem",
            }}
          ></img>
          <p
            style={{
              fontSize: "1rem",
              paddingBottom: "1.7rem",
            }}
          >
            Our registered company, Asah maker-space is a leading provider of
            automation, robotics, 3D printing, 3D animation, 3D designing,
            coding, training school, and construction services.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "start",
          }}

          className="footer-display__get-in"
        >
          <div>
            <FooterHeaders heading="Get in Touch"></FooterHeaders>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:"start",
                flexDirection:"column",
              }}>
              <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:"center",
                padding:'.5rem 0rem 1rem 0rem'
              }}>
                <Envelope style={{
                  fill:'var(--color-main)'
                }}></Envelope>
                <span style={footerText}>asahmakerspace@gmail.com</span>
              </div>
              <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:"center"
              }}>
                <Location></Location>
                <span style={footerText}>MayfareStreet-Sunyani</span>
              </div>
            </div>
          </div>
          <div>
            <FooterHeaders heading="Open Hours"></FooterHeaders>
            <span style={{
              fontSize:'1.1rem'
            }}
            
            >Mon - Sat: 8:00am to 5:00pm. <br></br>Sunday: Closed.</span>
          </div>
        </div>
        {/* <div></div> */}
        <div style={{
          display:'flex',
          flexDirection:'column',
          paddingTop:'1.5rem',
          alignItems:'start'
        }}
        className="footer-display__icons"
        >
          <FooterHeaders heading="Follow Us"></FooterHeaders>
          <div style={{
            display:'flex',
            justifyContent:'space-around',
            width:"60%",
            paddingTop:'1rem'

          }}>
         <Instagram style={footerIcon}></Instagram>
         <Facebook style={footerIcon}></Facebook>
         <X style={footerIcon}></X>
         <Linkedin style={footerIcon}></Linkedin>
         
          </div>
        </div>
      </div>
      <div
        className="copyright"
        style={{
          fontSize: "1.2rem",
          padding: "1.2rem 0rem 0rem 0rem",
        }}
      >
        Copyright &copy; Asah Maker Space {yearCreated}, All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
