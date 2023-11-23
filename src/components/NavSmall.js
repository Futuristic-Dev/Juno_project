import React, {useEffect, useRef} from 'react'
import ReactDOM  from 'react-dom'
import logo from '../logo_1.png'

function NavSmall() {
  const menuRef = useRef(null);
  useEffect(()=>{
  const popUp = document.querySelector('.pop');
  const menu = document.querySelector('.menu-bar')
  // console.log(popUp);
  menuRef.current.addEventListener('click', (e)=>{
    popUp.classList.remove('pop-hidden');
    popUp.classList.add('pop-display')
    // menu.style.zIndex = '0';
    // console.log(popUp.classList)
  })
  },[])
  return(
  <div className='menu-bar'>
    <img alt='logo' src={logo} style={{
        width:'3rem',
        marginLeft:'2rem'
    }}></img>
    <div ref={menuRef} className='menu-bar--icon menu-rotate'>

    </div>

  </div>
  )}
export default NavSmall