import { useRef, useState } from "react";
import TravelPlannerImg from "../assets/TravelPlannerImg.jpeg";
import CohortDashboardImg from "../assets/CohortDashboardImg.jpeg";
import SpotifyDashboardImg from "../assets/SpotifyDashboardImg.jpeg";
import CinemaBookingImg from "../assets/CinemaBookingImg.jpeg";
import GreengrocersImg from "../assets/GreengrocersImg.jpeg";
import BreweryToursImg from "../assets/BreweryToursImg.jpeg";

import "./projects.css";

export default function MyProjects() {
  const navRef = useRef();
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Travel Planner App",
      briefDescr:
        "A full-stack app, built in 3 weeks, which allows users to search hotels, activities, and attractions and and plan itineraries for upcoming trips.",
      detailedDesc: (
        <>
          <p>
            Inspired by my own travel planning experiences, this app is designed
            to streamline and digitize the travel planning process. Part of main
            functionailty of the app includes:
            <li>Users can log in through a secure authentication process.</li>
            <li>Users can add upcoming trips to their dashboard.</li>
            <li>
              Each trip links to a detailed itinerary page, navigable via React
              Router.
            </li>
            <li>
              Users can search for hotels, activities, and attractions using the
              TripAdvisor API.
            </li>
            <li>These search results can be added to any trip itinerary.</li>
            <li>
              A sidebar provides a concise overview of the items in each trip.
            </li>
          </p>
          <br />
          <p>
            The frontend is built with React and CSS providing an intuitive,
            responsive, and user-friendly interface. A key focus of the frontend
            is ensuring components update seamlessly when new data is entered.
            This is achieved through the efficient use of React hooks, primarily
            useEffect for managing side effects and useContext for state
            management and sharing data across components.
          </p>
          <br />
          <p>
            The backend is powered by Node.js and Express.js, seamlessly
            connecting the frontend to a PostgreSQL database. Both the backend
            and frontend feature robust error handling to ensure a smooth user
            experience. Future updates will introduce functionality for users to
            delete and edit trips directly from the dashboard, as well as access
            and manage profile settings.
          </p>
        </>
      ),
      image: TravelPlannerImg,
      techStack: [
        "React",
        "HTML",
        "CSS",
        "NodeJS",
        "Express",
        "PostgreSQL",
        "Bcrypt",
        "JWT",
      ],
      liveLink: "https://my-travel-planner-app.vercel.app/",
      gitLink: "https://github.com/zainabch123/travel-planner-app",
    },
    {
      id: 2,
      name: "Cohort Manager App",
      briefDescr:
        "A social media app built as part of a 2-week team development simulation. I worked on both the frontend and backend for this project.",
      detailedDesc:
        "Built as part of 2-week team-development simulation which utilized Agile methodologies, this app allows users to make posts and interact with other teachers and students in their cohort. I played a key part in implementing the main functionailty of this app including, enabling the register new user function. Another aspect I developed was the user profile page, which they can access from the dashboard. Users can edit and save their profile. Once saved, the profile page automatically displays the new profile. The backend is powered by Node.js and Express, and it connects the front-end to a PostgreSQL database. Other key features of the backend is the use of classes to define key functions and variables. The frontend is  built with React providing a clean and user-friendly interface. ",
      image: CohortDashboardImg,
      techStack: [
        "React",
        "HTML",
        "CSS",
        "NodeJS",
        "Express",
        "PostgreSQL",
        "Bcrypt",
        "JWT",
        "Agile",
      ],
      liveLink: "https://main.d2q5tbadmopx4b.amplifyapp.com/login",
      gitLink: "https://github.com/boolean-uk/team-dev-client-c13",
    },
    {
      id: 3,
      name: "Spotify Dashboard Clone",
      briefDescr:
        "An earlier 3-day project utilizing advanced HTML and CSS to re-create the Spotify Dashboard Page whilst maintaining the web-pages responsivness.",
      detailedDesc:
        "A HTML and CSS-based front-end project, aiming to mirror Spotify's intuitive interface and responsivness. The project showcases a fully responsive design, allowing seamless user experiences across multiple devices and screen sizes. ",
      image: SpotifyDashboardImg,
      techStack: ["HTML", "CSS"],
      liveLink: "",
      gitLink: "https://github.com/zainabch123/html-spotify-challenge",
    },
    {
      id: 4,
      name: "Cinema Booking API",
      briefDescr:
        "A 4-day project which involved building an API from scratch, utilizing CRUD operations. Also implemented own test suites.",
      detailedDesc: "This is the detailed description.",
      image: CinemaBookingImg,
      techStack: [
        "Express",
        "NodeJS",
        "PostgreSQL",
        "TDD",
        "Prisma ORM",
        "Bcrypt",
        "JWT",
      ],
      liveLink: "",
      gitLink:
        "https://github.com/zainabch123/database-cinema-booking-api?tab=readme-ov-file",
    },
    {
      id: 5,
      name: "Greengrocers Exercise",
      briefDescr:
        "A shopping-cart exericise built in 1-day which allows users to add items to cart and filter and sort items. Built entirely in React.",
      detailedDesc:
        "A frotend app which allows users to add and delete items from a shopping cart. Item quantities automatically update, as well as the carts total price. Built entirely in React for a user-friendly interface.",
      image: GreengrocersImg,
      techStack: ["React", "HTML", "CSS"],
      liveLink: "",
      gitLink: "https://github.com/zainabch123/react-greengrocers",
    },
    {
      id: 6,
      name: "Brewery Tours Website",
      briefDescr:
        "A 4-day JS-DOM project built with advanced search and filter functionality to enable users to interact with brewery data obtained from a REST API.",
      detailedDesc: "This is the detailed description.",
      image: BreweryToursImg,
      techStack: ["JS DOM", "HTML", "CSS"],
      liveLink: "",
      gitLink:
        "https://github.com/zainabch123/js-dom-brewery-tours-challenge?tab=readme-ov-file",
    },
  ]);

  const openOverlay = (project) => {
    setSelectedProject(project);
  };

  const closeOverlay = () => {
    setSelectedProject(null);
  };

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
      <p className="projects-tag-line">
        Check out some of the projects I'm working on.
      </p>
      <ul className="project-links" ref={navRef}>
        {projects.map((project, index) => {
          return (
            <li
              key={index}
              className="project-container"
              onClick={() => openOverlay(project)}
            >
              <div className="project-image">
                <img src={project.image} alt="Project Image" />
              </div>
              <div className="project-text">
                <h3>{project.name}</h3>
                <p>{project.briefDescr}</p>
                <p>
                  <span>{project.techStack.join(" | ")}</span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      {selectedProject && (
        <div className="overlay">
          <div className="overlay-card">
            <div className="overlay-image">
              <img src={selectedProject.image} alt={selectedProject.name} />
            </div>
            <div className="overlay-text">
              <p>
                <span className="selected-project-tech-stack">
                  {selectedProject.techStack.join(" | ")}
                </span>
              </p>
              <h2 className="selected-project-name">{selectedProject.name}</h2>
              <p className="selected-project-descr">
                {selectedProject.detailedDesc}
              </p>
            </div>
            <div className="overlay-links">
              View Project:
              {selectedProject.liveLink && (
                <a href={selectedProject.liveLink}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                  >
                    <path d="M240-120v-80l40-40H160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H680l40 40v80H240Zm-80-200h640v-440H160v440Zm0 0v-440 440Z" />
                  </svg>
                </a>
              )}

              {selectedProject.gitLink && (
                <a href={selectedProject.gitLink}>
                  <svg
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="40px"
                    width="40px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
          <button className="close-modal" onClick={closeOverlay}>
            X
          </button>
        </div>
      )}
    </section>
  );
}
