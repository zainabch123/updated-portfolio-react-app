import { useState, useEffect, useRef } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import MyProjects from "./Projects/MyProjects";
import Skills from "./Skills/Skills";
import NavBar from "./Nav-Bar/NavBar";
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

function App() {
  const [headerText, setHeaderText] = useState(
    "Hey, I'm Zainab. I'm a Software Developer"
  );
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  return (
    <div className="container">
      <NavBar />
      <main>
        <div className="overflow-container">
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
