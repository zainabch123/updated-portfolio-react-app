import ProfileImg from "../assets/ProfileImg8.jpeg";

import "./aboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-section" id="about-section">
      <div className="about-elements">
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Zainab! I'm a full-stack developer and a recent graduate of
            an intensive 6-month Software Development Bootcamp. Formerly a
            history teacher, I developed a strong interest in technology during
            COVID when I had to adapt my teaching to an online format. This
            experience introduced me to how technology could optimize processes
            and solve real-world challenges, sparking my curiosity about how
            these tools worked. Motivated to learn more, I took the plunge and
            enrolled in a coding course, ultimately leading me to pursue a
            career in software development
          </p>
          <br />
          <p>
            Now a full-stack developer with over 900 hours of hands-on training
            in modern, industry-relevant technologies, I bring a passion for
            design, optimised code, and a commitment to making a meaningful impact
            on every project from start to finish. My background in teaching has also
            equipped me with strong interpersonal, critical thinking, and
            team-building skills, which I'm excited to apply to a career in
            software development.
          </p>
        </div>
        <div className="about-me-image">
          <img src={ProfileImg} alt="ProfileImg" />
        </div>
      </div>
    </section>
  );
}
