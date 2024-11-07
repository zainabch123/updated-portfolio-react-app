import { useRef, useEffect } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import MyProjects from "./Projects/MyProjects";
import Skills from "./Skills/Skills";
import NavBar from "./Nav-Bar/NavBar";



function App() {
  const scrollableRef = useRef(null);

  useEffect(() => {
    const animatedSections = document.querySelectorAll(".animated-section");

    const observer = new IntersectionObserver(
      (elements) => {
        elements.forEach((element) => {
          if (element.isIntersecting) {
            element.target.classList.add("in-view");
          }
        });
      },
      {
        root: document.querySelector(".overflow-container"),
        threshold: 0.3,
      }
    );

    animatedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="container">
      <main ref={scrollableRef}>
        <NavBar scrollableRef={scrollableRef} />
        <section className="title-section">
          <div className="title">
            <h1 className="first-line">Hi! I'm Zainab.</h1>
            <h1 className="second-line">
              I'm a <span>Full Stack Developer.</span>
            </h1>
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
          <div className="footer-text">
          <p>&copy; Zainab Choudhry 2024. </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
