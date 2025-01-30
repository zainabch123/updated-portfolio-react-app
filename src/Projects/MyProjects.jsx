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
      name: "Trip Planner App",
      briefDescr:
        "A full-stack app, built for my final 3-week projects, where users can search hotels, activities, and attractions and and plan itineraries for upcoming trips.",
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
            Developing this travel planner app, from conception to deployment,
            gave me valuable experience building a full-stack application. I
            deepened my knowledge of API integration, including working with the
            TripAdvisor API to fetch real-time data. On the backend, I
            strengthened my skills in Node.js, Express, and PostgreSQL,
            implementing secure authentication and efficient data handling. On
            the frontend, I expanded my understanding of React's state
            management to create a responsive and seamless user interface.
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
        "A social-media style app built as part of a 2-week team development simulation using an existing codebase. Used Agile methodologies.",
      detailedDesc: (
        <>
          <p>
            Developed as part of a team simulation, this social-media-style app
            enables users to interact with teachers and students within their
            cohort. Key areas I contributed to include:
          </p>
          <li>
            Updated the app's context to ensure essential user data is
            accessible throughout the UI, even after page refreshes.
          </li>
          <li>
            Implemented user registration, allowing new users to register and
            create their initial profiles.
          </li>
          <li>
            Developed functionality for users to view their own profiles and the
            profiles of others.
          </li>
          <li>
            Enabled students to edit their profiles, while teachers can edit any
            profile and manage user permissions using role-based access control.
          </li>
          <li>Updated the API using .yaml whenver changes were made.</li>
          <br />
          <p>
            An integral aspect of this team development simulation was the use
            of Agile methodologies. This included regular stand-ups,
            retrospectives, and reporting to a Scrum Master. The process
            involved breaking down client specifications from Figma into
            actionable tasks, which were organized into tickets for the team to
            prioritize and plan effectively. It was a highly valuable experience
            in collaboration and real-world coding practices.
          </p>
          <br />
          <p>
            <span>Login:</span> student@test.com OR teacher@test.com
          </p>
          <p>
            <span>Password:</span> Testpassword1!
          </p>
        </>
      ),
      image: CohortDashboardImg,
      techStack: [
        "React",
        "NodeJS",
        "Express",
        "PostgreSQL",
        "Bcrypt",
        "JWT",
        "Agile",
      ],
      designSpec:
        "https://www.figma.com/design/j9QIHvgM0wOVw3xDe9KdWB/My-Copy%3A-Cohort-Manager-app---Designs",
      liveLink: "https://main.d2q5tbadmopx4b.amplifyapp.com/login",
      gitLink: "https://github.com/zainabch123/team-dev-server-c13",
    },
    {
      id: 3,
      name: "Spotify Dashboard Clone",
      briefDescr:
        "An earlier 3-day project utilizing advanced HTML and CSS to re-create the Spotify Dashboard Page whilst maintaining the web-pages responsivness.",
      detailedDesc: (
        <>
          <p>
            This project is a front-end application built with HTML and CSS,
            designed to replicate Spotify's intuitive interface and
            responsiveness. The objective was to create a visually appealing,
            user-friendly design that adapts seamlessly to various devices and
            screen sizes. Key features include:
            <li>
              A responsive design ensuring the layout adjust fluidly upon the
              change of screen-size
            </li>
            <li>
              Custom styling which utilized advanced CSS techniques such as Grid
              and media queries to achieve a polished and adaptable layout.
            </li>
            <li>
              Ineractive Elements which includes hover effects, transitions, and
              other UI enhancements to mimic the interactive feel of a modern
              web application.
            </li>
          </p>
          <br />
          <p>
            This project provided me with valuable experience in applying
            responsive design principles and it also refined my attention to
            detail in order to accurately accurately recreate a popular, highly
            functional user interface.
          </p>
        </>
      ),
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
      detailedDesc: (
        <>
          <p>
            This project is primarily a backend application, focused on
            developing a cinema API that allows users to Create, Read, Update,
            and Delete (CRUD) movie entries. Key features includes:
            <li>
              Well-structured and efficient RESTful API, designed to follow best
              practices for resource management and scalability.
            </li>
            <li>
              Utilized Prisma Client for efficient interaction with a PostgreSQL
              database, ensuring smooth data retrieval, updates, and management.
            </li>
            <li>
              Comprehensive error handling, with robust mechanisms to capture,
              log, and respond to various types of errors while providing
              appropriate error messages to facilitate debugging.
            </li>
          </p>
          <br />
          <p>
            A key aspect of this project was implementing custom test suites to
            ensure the code functioned as expected. This process provided
            invaluable hands-on experience with industry-standard testing
            practices, helping to identify bugs, improve code quality, and
            enhance overall project reliability.
          </p>
          <br />
          <p>
            This project significantly strengthened my backend development
            skills, particularly in building and optimizing RESTful APIs. It
            provided hands-on experience in working with databases through
            Prisma Client and PostgreSQL, where I learned to manage data
            efficiently and implement complex CRUD operations. Additionally, I
            gained valuable insights into error handling and TDD.
          </p>
        </>
      ),
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
      detailedDesc: (
        <>
          <p>
            This project is a frontend application built with React, designed to
            replicate a shopping cart experience. Key features include:
            <li>
              User friendly interface where users can identify items with ease.
            </li>
            <li>
              Users can view, add, delete, items in a cart as well as update
              their quantities at any time.
            </li>
            <li>Cart's total price is updated instantly upon change.</li>
            <li>Users can sort and filter items by price or type.</li>
          </p>
          <br />
          <p>
            An integral aspect of this project was utilizing React State
            Management to handle interactions and update the UI with immediate
            effect. By utilizing React hooks, such as useState, I was able to
            manage the state of various elements, including cart items and
            quantities. This allowed for immediate UI updates whenever changes
            were made, such as adding or removing items, updating quantities, or
            recalculating the total price, allowing for a streamlined user
            experience.
          </p>
        </>
      ),
      image: GreengrocersImg,
      techStack: ["React", "HTML", "CSS"],
      liveLink: "",
      gitLink: "https://github.com/zainabch123/react-greengrocers",
    },
    {
      id: 6,
      name: "Brewery Tours Website",
      briefDescr:
        "A 4-day JavaScript DOM project that enables users to search and filter results from a Brewery REST API using advanced techniques.",
      detailedDesc: (
        <>
          <p>
            A frotend project built entirely using JSDOM and CSS, designed to
            allow users to search and filter a Brewery REST API. Key features
            include:
            <li>Users can easily search for breweries by name or location.</li>
            <li>
              Advanced filtering capabilities allow users to narrow down results
              based on specific criteria, such as type of brewery or city.
            </li>
            <li>
              Responsive design which adapts easily to changes in screen size.
            </li>
            <li>
              Results update instantly as users input search terms or apply
              filters.
            </li>
          </p>
          <br />
          <p>
            This project provided me with valuable insights into utilizing
            JavaScript DOM (JSDOM) for building interactive web applications. I
            learned how to implement effective search and filtering mechanisms
            that enhance user experience by enabling real-time data retrieval
            from the Brewery REST API. Through this project, I honed my skills
            in managing state and handling user inputs, ensuring that the
            application responds dynamically to user interactions.
          </p>
        </>
      ),
      image: BreweryToursImg,
      techStack: ["JS DOM", "HTML", "CSS"],
      liveLink: "",
      gitLink:
        "https://github.com/zainabch123/js-dom-brewery-tours-challenge?tab=readme-ov-file",
    },
  ]);

  const openOverlay = (project) => {
    setSelectedProject(project);
    document.body.classList.add("no-scroll");
  };

  const closeOverlay = () => {
    setSelectedProject(null);
    document.querySelector(".overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  return (
    <section className="projects-section" id="projects-section">
      <div className="project-title-section animated-section">
        <h2 className="title">My Projects</h2>
        <p className="projects-tag-line">
          Check out some of the projects I'm working on.
        </p>
      </div>
      <ul className="project-links" ref={navRef}>
        {projects.map((project, index) => {
          return (
            <li
              key={index}
              className={`project-container animated-section ${
                index % 2 !== 0 ? "even-project" : ""
              }`}
              onClick={() => openOverlay(project)}
            >
              <div className="image-container">
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
              <section className="selected-project-descr">
                {selectedProject.detailedDesc}
              </section>
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
              {selectedProject.designSpec && (
                <a href={selectedProject.designSpec}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40px"
                    height="40px"
                    viewBox="0 0 15 15"
                    fill="#b9b9c9"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.00005 2.04999H5.52505C4.71043 2.04999 4.05005 2.71037 4.05005 3.52499C4.05005 4.33961 4.71043 4.99999 5.52505 4.99999H7.00005V2.04999ZM7.00005 1.04999H8.00005H9.47505C10.842 1.04999 11.95 2.15808 11.95 3.52499C11.95 4.33163 11.5642 5.04815 10.9669 5.49999C11.5642 5.95184 11.95 6.66836 11.95 7.475C11.95 8.8419 10.842 9.95 9.47505 9.95C8.92236 9.95 8.41198 9.76884 8.00005 9.46266V9.95L8.00005 11.425C8.00005 12.7919 6.89195 13.9 5.52505 13.9C4.15814 13.9 3.05005 12.7919 3.05005 11.425C3.05005 10.6183 3.43593 9.90184 4.03317 9.44999C3.43593 8.99814 3.05005 8.28163 3.05005 7.475C3.05005 6.66836 3.43594 5.95184 4.03319 5.5C3.43594 5.04815 3.05005 4.33163 3.05005 3.52499C3.05005 2.15808 4.15814 1.04999 5.52505 1.04999H7.00005ZM8.00005 2.04999V4.99999H9.47505C10.2897 4.99999 10.95 4.33961 10.95 3.52499C10.95 2.71037 10.2897 2.04999 9.47505 2.04999H8.00005ZM5.52505 8.94998H7.00005L7.00005 7.4788L7.00005 7.475L7.00005 7.4712V6H5.52505C4.71043 6 4.05005 6.66038 4.05005 7.475C4.05005 8.28767 4.70727 8.94684 5.5192 8.94999L5.52505 8.94998ZM4.05005 11.425C4.05005 10.6123 4.70727 9.95315 5.5192 9.94999L5.52505 9.95H7.00005L7.00005 11.425C7.00005 12.2396 6.33967 12.9 5.52505 12.9C4.71043 12.9 4.05005 12.2396 4.05005 11.425ZM8.00005 7.47206C8.00164 6.65879 8.66141 6 9.47505 6C10.2897 6 10.95 6.66038 10.95 7.475C10.95 8.28962 10.2897 8.95 9.47505 8.95C8.66141 8.95 8.00164 8.29121 8.00005 7.47794V7.47206Z"
                      fill="#b9b9c9"
                    />
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
