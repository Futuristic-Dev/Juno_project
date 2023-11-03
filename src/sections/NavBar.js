import React from 'react'
import {ReactComponent as PhoneInTalk} from '../SVG/call.svg'
function NavBar() {
  return (
    <div className='nav'>
      <div className='nav-bar'>
            <img src='./logo.png' className='nav-bar--logo'></img>
          <ul className='nav-bar--lists'>
            <li className='nav-bar--lists__item'><a href='#'>Home</a></li>
            <li className='nav-bar--lists__item'><a href='#'>Abouts</a></li>
            <li className='nav-bar--lists__item'><a href='#'>Services</a></li>
            <li className='nav-bar--lists__item'><a href='#'>Projects</a></li>
            <li className='nav-bar--lists__item'><a href='#'>Partners</a></li>
          </ul>
          <a className='nav-bar--contact' href='#'>
            <PhoneInTalk className='nav-bar--contact__icon'></PhoneInTalk>
            <span className='nav-bar--contact__text'>
            contact Us
            </span>
          </a>
        </div>
    </div>
  )
}

export default NavBar