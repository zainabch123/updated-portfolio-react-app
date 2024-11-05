import { useRef } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import MyProjects from "./Projects/MyProjects";
import Skills from "./Skills/Skills";
import NavBar from "./Nav-Bar/NavBar";



function App() {
  const scrollableRef = useRef(null);

  return (
    <div className="container">
      <NavBar scrollableRef={scrollableRef} />
      <main>
        <div className="overflow-container" ref={scrollableRef}>
          <section className="title-section">
            <div className="title">
              <h1 className="first-line">Welcome to my Portfolio.</h1>
              <p>Explore my latest projects and learn more about me.</p>
              <a href="#about-section">
                <button>Learn More</button>
              </a>
            </div>
          </section>
          <AboutMe />
          <MyProjects />
          <Skills />
          <Contact />
          <footer className="footer-section">
            <p>&copy; Zainab Choudhry 2024. </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
