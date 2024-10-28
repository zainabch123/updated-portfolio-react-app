import { useRef } from "react";
import "./projects.css";

export default function MyProjects() {
  const navRef = useRef();

  const handleNav = (direction) => {
      if (direction === "left") {
        navRef.current.scrollLeft -= 400;
      } else {
        navRef.current.scrollLeft += 400;
      }
  };
  return (
    <section className="projects-section" id="projects-section">
      <h2>My Projects</h2>
      <p>Check out some of the projects I'm working on.</p>
      <section className="project-links" ref={navRef}>
        <button
          className="scroll-button"
          id="left-button"
          onClick={() => handleNav("left")}
        >
          Left
        </button>
        <div className="project-container">
          <div className="project-image">Image</div>
          <div className="project-text">
            <h3>Project Name</h3>
            <p>Project description</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">Image</div>
          <div className="project-text">
            <h3>Project Name</h3>
            <p>Project description</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">Image</div>
          <div className="project-text">
            <h3>Project Name</h3>
            <p>Project description</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">Image</div>
          <div className="project-text">
            <h3>Project Name</h3>
            <p>Project description</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">Image</div>
          <div className="project-text">
            <h3>Project Name</h3>
            <p>Project description</p>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image">Image</div>
          <div className="project-text">
            <h3>Project Name</h3>
            <p>Project description</p>
          </div>
        </div>

        <button
          className="scroll-button"
          id="right-button"
          onClick={() => handleNav("right")}
        >
          Right
        </button>
      </section>
    </section>
  );
}
