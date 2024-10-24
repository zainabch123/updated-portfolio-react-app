import { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Header from "./Header";
import MyProjects from "./MyProjects";
import Skills from "./Skills";
import NavBar from "./NavBar";

function App() {
    const [headerText, setHeaderText] = useState("Hey, I'm Zainab. I'm a Software Developer");
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const typingInterval = setInterval(() => {
        if (index < headerText.length) {
          setDisplayedText(
            (currentText) => currentText + headerText.charAt(index)
          );
          setIndex(index + 1);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }, [index]); 

  return (
    <div className="container">
      <NavBar />
      <main>
        <div className="overflow-container">
          <section className="title-section">
            <div className="title">
              {/* <h1>
                <span id="typed-text">{displayedText}</span>
                <span className="cursor">|</span>
              </h1> */}
              <h1 className="first-line">Welcome to my Portfolio.</h1>
              {/* <h1 className="second-line">
                I'm a <span>Full Stack</span> Developer
                <div className="text-underline"></div>
              </h1> */}
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
