import "./App.css";
import "./styles/main.scss";
import Banner from "./sections/Banner";
import Experts from "./sections/Experts";
import Choose from "./sections/ChooseUs";
import Projects from "./sections/Projects";
// import AboutCard from './sections/AboutCards'
// import TopLink from './sections/TopLinks'
import NavBar from "./sections/NavBar";
import About from "./sections/AboutSection";
import Services from "./sections/OurServices";
import Scheme from "./sections/Scheme";
import Recommend from "./sections/Recommendation";
import Footer from "./sections/Footer";
import NaviagationTop from "./components/NaviagationTop";

function App() {
  return (
    <div className="container">
      <header className="header">
        <nav className="navigation">
          <NaviagationTop></NaviagationTop>
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="main">
        <section id="#home_section">
          <Banner></Banner>
        </section>
        <section id="#about_section">
          <About></About>
        </section>
        <section id="#service_section">
          <Services></Services>
        </section>
        <section id="#choose_section">
          <Choose></Choose>
        </section>
        <section id="#project_section">
          <Projects></Projects>
        </section>
        <section id="#scheme_section">
          <Scheme></Scheme>
        </section>
        <section
          style={{
            marginTop: "11rem",
          }}
          id="#expert_section"
        >
          <Experts></Experts>
        </section>
        {/* <section >
          <Recommend></Recommend>
        </section> */}
      </main>
      <footer className="footer"
      style={{
        marginTop:'14rem',
      }}
      >
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
