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
          } else {
            element.target.classList.remove("in-view");
          }
        });
      },
      {
        root: document.querySelector(".overflow-container"),
        threshold: 0.1,
      }
    );

    animatedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


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
