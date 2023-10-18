import React, { Component } from 'react'
import TopLinks from "./sections/TopLinks"
import Banner from "./sections/Banner"
import AboutCards from "./sections/AboutCards"
import AboutSection from "./sections/AboutSection"
import ChooseUs from "./sections/ChooseUs"
import Experts from "./sections/Experts"
import Footer from "./sections/Footer"
import NavBar from "./sections/NavBar"
import OurServices from "./sections/OurServices"
import Projects from "./sections/Projects"
import Recommendation from "./sections/Recommendation"
import Scheme from "./sections/Scheme"
class App extends Component {
  render() {
    return (
      <div className='container'>
        <TopLinks></TopLinks>
        <NavBar></NavBar>
        <Banner></Banner>
        <AboutCards></AboutCards>
        <AboutSection></AboutSection>
        <OurServices></OurServices>
        <ChooseUs></ChooseUs>
        <Projects></Projects>
        <Scheme></Scheme>
        <Experts></Experts>
        <Recommendation></Recommendation>
        <Footer></Footer>
      </div>
    )
  }
}

export default App