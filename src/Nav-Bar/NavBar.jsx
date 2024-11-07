import "./navBar.css";

const NavBar = ({ scrollableRef }) => {
  const scrollToTop = () => {
    scrollableRef.current.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="navigation-bar">
      <div className="nav-buttons">
        <a href="#" id="nav-name" onClick={scrollToTop}>
          ZC
        </a>
        <div className="nav-links">
          <a className="about-link" href="#about-section">
            About
          </a>
          <a className="projects-link" href="#projects-section">
            Projects
          </a>
          <a className="skills-link" href="#skills-section">
            Skills
          </a>
          <a className="contact-link" href="#contact-section">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
