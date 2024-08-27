export default function Header() {
  return (
    <header className="header" id="header">
      <nav className="navigation-bar">
        <div className="nav-buttons">
          <a href="#header" id="nav-name">
            Zainab Choudhry
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
      <section className="title-section">
        <div className="title">
          <h1>Welcome to my Portfolio</h1>
          <p>Explore my latest projects and learn more about me.</p>
          <a href="#about-section">
            <button>Learn More</button>
          </a>
        </div>
      </section>
    </header>
  );
}
