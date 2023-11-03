import './App.css';
import './styles/main.scss'
import Banner from './sections/Banner'
import Experts from './sections/Experts'
import Choose from './sections/ChooseUs'
import Projects from './sections/Projects'
// import AboutCard from './sections/AboutCards'
// import TopLink from './sections/TopLinks'
import NavBar from './sections/NavBar'
import About from './sections/AboutSection'
import Services from './sections/OurServices'
import Scheme from './sections/Scheme'
import Recommend from './sections/Recommendation'
import Footer from './sections/Footer'
import NaviagationTop from './components/NaviagationTop';


function App() {
  return (
    <div className="container">
      
    <header className='header'>
      <nav className='navigation'>
        <NaviagationTop></NaviagationTop>
        <NavBar></NavBar>
      </nav>
    </header>
    <main className='main'>
    <section>
      <Banner></Banner>
    </section>
    <section>
      <About></About>
    </section>
    <section>
      <Services></Services>
    </section>
    <section>
      <Choose></Choose>
    </section>
    <section>
      <Projects></Projects>
    </section>
    <section>
      <Scheme></Scheme>
    </section>
    <section>
      <Experts></Experts>
    </section>
    <section>
      <Recommend></Recommend>
    </section>
    </main>
    <footer className='footer'>
      <Footer></Footer>
    </footer>
    </div>
  );

}

export default App;
