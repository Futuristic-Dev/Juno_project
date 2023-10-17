import React, { Component } from 'react'
import TopLink from "./sections/TopLinks"
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
        <TopLink>Top Link</TopLink>
        <AboutCards></AboutCards>
        <Banner></Banner>
        <AboutSection></AboutSection>
        <ChooseUs></ChooseUs>
        <Experts></Experts>
        <NavBar></NavBar>
        <OurServices></OurServices>
        <Projects></Projects>
        <Recommendation></Recommendation>
        <Scheme></Scheme>
        <Footer></Footer>
      </div>
    )
  }
}

export default App