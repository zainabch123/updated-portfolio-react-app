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
            an intensive 6-month Software Development Bootcamp. Formerly history
            teacher, my interest in technology began during COVID when I had to
            adapt to teaching online and was introduced to a range of new tools
            as a result. This experience sparked my curiosity about how these
            technologies functioned, leading me to take the plunge and enroll in
            a coding course.
          </p>
          <br />
          <p>
            Now a full-stack developer with over 900 hours of training in
            modern, industry-relevant tech, coupled with my developed
            interpersonal, critical thinking, and team building skills from my
            time in teaching, I am eager to kickstart a career in Software
            Development.
          </p>
        </div>
        <div className="about-me-image">
          <img src={ProfileImg} alt="ProfileImg" />
        </div>
      </div>
    </section>
  );
}
