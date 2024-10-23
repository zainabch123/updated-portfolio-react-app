import { useState } from 'react'
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Header from "./Header";
import MyProjects from "./MyProjects";
import Skills from "./Skills";

function App() {
  return (
    <div className="container">
      <nav className="navigation-bar">
        <div className="nav-buttons">
            <a href="#header" id="nav-name">
              Zainab Choudhry
            </a>
            <a href="#header" id="nav-initials">
              ZC
            </a>
          <a className="nav-links" href="#about-section">
            About
          </a>
          <a className="nav-links" href="#projects-section">
            Projects
          </a>
          <a className="nav-links" href="#skills-section">
            Skills
          </a>
          <a className="nav-links" href="#contact-section">
            Contact
          </a>
        </div>
      </nav>
      <main>
        <div className="overflow-container">
          <section className="title-section">
            <div className="title">
              <h1>Welcome to my Portfolio</h1>
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

export default App
