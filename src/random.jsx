* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  scroll-behavior: smooth;
  font-family: "Geist";
}

.container {
  max-width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.navigation-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgb(251, 235, 246);
  padding: 10px 0;
  flex-shrink: 1;
}

.nav-buttons {
  height: 45px;
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 30px;
  padding: 20px;
}

#nav-name {
  display: flex;
  color: black;
  flex-grow: 0.9;
  padding: 10px;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.2rem;
  flex-shrink: 0;
}

#nav-initials {
  display: none;
}

.nav-links {
  display: flex;
  padding: 10px;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  transition: padding-top 0.2s;
  color: black;
  flex-shrink: 0;
}
.nav-links:hover {
  text-decoration: underline;
  padding-top: 0px;
}

@media (max-width: 580px) {
  #nav-name {
    display: none;
  }

  #nav-initials {
    display: flex;
    flex-grow: 1;
    color: black;
    padding: 10px;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.2rem;
    flex-shrink: 1;
  }
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

.overflow-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.title-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
  background-color: rgb(251, 235, 246);

}

.title {
 text-align: center;
 /* max-width: 1030px; */
}

.title-section h1 {
  font-size: 6rem;
  font-weight: 800;
  padding: 10px;
  padding-left: 0px;
}

.title-section p,
.projects-section p,
.skills-section p,
.contact-section p {
  font-size: 1.2rem;
  padding-bottom: 10px;
}
.title-section button {
  margin-top: 20px;
  padding: 7px;
  border-radius: 15px;
  border: 1px solid black;
}

.title-section button:hover {
  background-color: black;
  color: white;
}

.cursor {
  display: inline-block;
  animation: blink 1s step-end infinite; /* Blinking effect */
}

@keyframes blink {
  50% {
    opacity: 0; /* Hide cursor halfway */
  }
}

.first-line, .second-line, .title p, .title button {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out forwards;
}

.first-line {
  animation-delay: 0.5s;
}

.second-line {
  animation-delay: 1.2s;
  position: relative;
}

.title p {
  animation-delay: 1.9s;
}

.title button {
  animation-delay: 2.5s;
}

.text-underline {
  position: absolute;
  height: 10px;
  width: 450px;
  background-color: black;
  left: 240px;
  bottom: 10px;
  opacity: 0;
  transform: translateX(20px);
  animation: fadeInRight 1s ease-out forwards;
  animation-delay: 2.5s;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
   0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}


.about-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  padding: 60px 0px 60px 0px;
}

.about-elements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
  justify-content: center;
  justify-items: center;
}

.about-me-text {
  padding: 40px;
  display: flex;
  flex-direction: column;
}
.about-me-text h2,
.projects-section h2,
.skills-section h2,
.contact-section h2 {
  font-size: 2.5rem;
  font-weight: 800;
}

.about-me-text p {
  font-size: 1.2rem;
  padding-top: 20px;
}

.about-me-image {
  height: 350px;
  width: 350px;
  border: 2px solid black;
  border-radius: 40px;
  align-content: center;
  text-align: center;
}

.projects-section {
  text-align: center;
  padding: 60px 0px 60px 0px;
}

.projects-section p,
.skills-section p,
.contact-section p {
  padding-top: 10px;
}

.project-links {
  display: flex; /* Change to flexbox */
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  gap: 60px; /* Space between items */
  justify-content: center; /* Centers items horizontally */
  padding: 20px; /* Optional: adds some padding around the items */
  max-width: 1700px;
  justify-items: center;
  margin: 0 auto;
}

.project-container {
  height: 350px;
  width: 350px;
  border: 2px solid black;
  margin-top: 40px;
  display: grid;
  grid-template-rows: 2fr 1fr;
  padding: 15px;
  border-radius: 40px;
  transition: margin-top 0.5s;
  flex: 0 1 350px; /* Allows items to be the width of 350px and wrap properly */
}

.project-container:hover {
  margin-top: 20px;
  cursor: pointer;
}

.project-image {
  height: 100%;
  width: 100%;
  border: 2px solid lightgray;
  border-radius: 30px;
}

.project-text {
  padding: 20px;
  text-align: start;
}

.project-text p,
.skill-card p {
  font-size: 1rem;
  color: gray;
}

.skills-section {
  text-align: center;
  padding: 60px 0px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  gap: 20px;
  margin-top: 40px;
}

.skill-card {
  height: auto;
  width: 300px;
  border-radius: 30px;
  flex: 0 1 300px; /* Allows items to be the width of 350px and wrap properly */
  display: grid;
  grid-template-rows: auto 1fr;
}

.skill-card svg {
  width: 60%;
}

.contact-section {
  text-align: center;
  padding: 60px 0px 60px 0px;
  background-color: rgb(245, 244, 244);
  justify-items: center;
}

.contact-section form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  padding: 0px 10px 0px 10px;
  gap: 15px;
  margin-top: 30px;
  justify-items: center;
}

.contact-section input,
.contact-section textarea {
  height: 40px;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid grey;
}

#message-area {
  height: 140px;
}

.footer-section {
  padding: 20px;
  background-color: rgb(245, 244, 244);
  text-align: start;
  color: rgb(110, 108, 108);
}

@font-face {
  font-family: "Geist";
  src: local("GeistRegular"),
    url("./fonts/Geist/Geist-Regular.ttf") format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: "Geist";
  src: local("GeistSemiBold"),
    url("./fonts/Geist/Geist-SemiBold.ttf") format("truetype");
  font-weight: 800;
}

@font-face {
  font-family: "Geist";
  src: local("GeistMedium"),
    url("./fonts/Geist/Geist-Medium.ttf") format("truetype");
  font-weight: 600;
}

@font-face {
  font-family: "Poppins";
  src: local("GeistRegular"),
    url("./fonts/Poppins/Poppins-Regular.ttf") format("truetype");
  font-weight: 400;
}

/* .title-section, .about-section, .projects-section, .skills-section, .contact-section {
  width: 100%;
  padding: 60px 0;
} */


