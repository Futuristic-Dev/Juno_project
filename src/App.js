import './App.css';
import './styles/main.scss'
import { ReactComponent as Envelope } from './SVG/email.svg';
import { ReactComponent as Location } from './SVG/location-pin.svg';
import { ReactComponent as Search } from './SVG/magnifying-glass.svg';
import { ReactComponent as FaceBook } from './SVG/facebook.svg';
import { ReactComponent as X } from './SVG/x.svg';
import { ReactComponent as Instagram } from './SVG/instagram.svg';
// import Banner from './sections/Banner'
// import Experts from './sections/Experts'
// import Choose from './sections/ChooseUs'
// import Projects from './sections/Projects'
// import AboutCard from './sections/AboutCards'
// import About from './sections/AboutSection'
// import NavBar from './sections/NavBar'
// import Services from './sections/OurServices'
// import Scheme from './sections/Scheme'
// import TopLink from './sections/TopLinks'
// import Recommend from './sections/Recommendation'
// import Footer from './sections/Footer'

function App() {
  return (
    <div className="container">
      
    <header className='header'>
      <nav className='navigation'>
        <div className='navigation-top'>
          <ul className='navigation-top--contacts'>
            <li className='navigation-top--contacts__item'>
              <a href='#'>
                <Location className='navigation-icon'></Location>
                <span>
                 Mayfare, Sunyani
               </span>
              </a>
            </li>
            <li className='navigation-top--contacts__item'>
              <a href='#'>
                <Envelope className='navigation-icon'></Envelope> 
              </a>
              <span>
              solomon@gmail.com
              </span>
            </li>
            <li className='navigation-top--contacts__item'>
              <a href='#'>
                <Search className='navigation-icon'></Search>
              </a>
            </li>
          </ul>
          <ul className='navigation-top--socials'>
            <li className='navigatoin-top--socials__item'>
              <a href='#'>
                <FaceBook className='navigation-icon'></FaceBook>
              </a>
            </li>
            <li className='navigatoin-top--socials__item'>
              <a href='#'>
                <X className='navigation-icon'></X>
              </a>
            </li>
            <li className='navigatoin-top--socials__item'>
              <a href='#'>
                <Instagram className='navigation-icon'></Instagram>
              </a>
            </li>
          </ul>
        </div>
        <div className='nav-bar'>
          <a className='nav-bar--logo'>
            <img src='./logo.png'></img>
          </a>
          <ul className='nav-bar--lists'>
            <li className='nav-bar--lists__item'><a href='#'>Home</a></li>
            <li className='nav-bar--lists__item'><a href='#'>Abouts</a></li>
            <li className='nav-bar--lists__item'><a href='#'>Services</a></li>
            <li className='nav-bar--lists__item'><a href='#'>Projects</a></li>
            <li className='nav-bar--lists__item'><a href='#'>Partners</a></li>
          </ul>
          <a className='nav-bar--contact' href='#'>
            contact Us
          </a>
        </div>
      </nav>
    </header>
    <main className='main'>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    <section></section>
    </main>
    <footer className='footer'> </footer>
    </div>
  );
}

export default App;
