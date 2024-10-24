import './navBar.css';

const NavBar = () => {
    return (
        <nav className="navigation-bar">
        <div className="nav-buttons">
          <a href="#header" id="nav-name">
            Zainab Choudhry
          </a>
          <a href="#navigation-bar" id="nav-initials">
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
    )
};

export default NavBar;