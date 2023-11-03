import React from "react";
import { ReactComponent as Mail } from "../SVG/mail.svg";
import { ReactComponent as Location } from "../SVG/location.svg";
import { ReactComponent as Search } from "../SVG/search.svg";
import { ReactComponent as FaceBook } from "../SVG/facebook.svg";
import { ReactComponent as X } from "../SVG/x.svg";
import { ReactComponent as Instagram } from "../SVG/instagram.svg";

function NaviagationTop() {
  return (
    <>
      <div className="navigation-top">
        <ul className="navigation-top--contacts">
          <li className="navigation-top--contacts__item">
            <a href="#" className="item">
              <Location className="navigation-icon"></Location>
              <span>Mayfarestreets,Sunyani-Ghana</span>
            </a>
          </li>
          <li className="navigation-top--contacts__item">
            <a href="#" className="item">
              <Mail className="navigation-icon"></Mail>
              <span>asahmakerspace@gmail.com</span>
            </a>
          </li>
          <li className="navigation-top--contacts__item">
            <a href="#" className="item">
              <Search className="navigation-icon"></Search>
            </a>
          </li>
        </ul>
        <ul className="navigation-top--socials">
          <li className="navigatoin-top--socials__item">
            <a href="#">
              <FaceBook className="navigation-icon social-icon"></FaceBook>
            </a>
          </li>
          <li className="navigatoin-top--socials__item social-icon">
            <a href="#">
              <X className="navigation-icon"></X>
            </a>
          </li>
          <li className="navigatoin-top--socials__item social-icon">
            <a href="#">
              <Instagram className="navigation-icon"></Instagram>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NaviagationTop;
