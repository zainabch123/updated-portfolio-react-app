import { useRef } from "react";
import { Link } from "react-router-dom";
import TravelPlannerImg from "../assets/TravelPlannerImg.jpeg";
import CohortDashboardImg from "../assets/CohortDashboardImg.jpeg";
import SpotifyDashboardImg from "../assets/SpotifyDashboardImg.jpeg";
import CinemaBookingImg from "../assets/CinemaBookingImg.jpeg";
import GreengrocersImg from "../assets/GreengrocersImg.jpeg";
import BreweryToursImg from "../assets/BreweryToursImg.jpeg"

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
      <p className="projects-tag-line">Check out some of the projects I'm working on.</p>
      <section className="project-links" ref={navRef}>
        {/* <button
          className="scroll-button"
          id="left-button"
          onClick={() => handleNav("left")}
        >
          Left
        </button> */}
        <a href="https://my-travel-planner-app.vercel.app/">
          <div className="project-container">
            <div className="project-image">
              <img src={TravelPlannerImg} alt="TravelPlannerImg" />
            </div>
            <div className="project-text">
              <h3>Travel Planner App</h3>
              <p>
                A full-stack app, built in 3 weeks, which allows users to search hotels, activities, and attractions and
                and plan itineraries for upcoming trips.
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/boolean-uk/team-dev-client-c13">
          <div className="project-container">
            <div className="project-image">
              <img src={CohortDashboardImg} alt="CohortDashboardImg" />
            </div>
            <div className="project-text">
              <h3>Cohort Manager App</h3>
              <p>
                A social media app built as part of a 2-week team development simulation which allows students and teachers to interact with their cohort.
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/zainabch123/html-spotify-challenge">
          <div className="project-container">
            <div className="project-image">
              <img src={SpotifyDashboardImg} alt="SpotifyDashboardImg" />
            </div>
            <div className="project-text">
              <h3>Spotify Dashboard Clone</h3>
              <p>
                An earlier 3-day project utilizing advanced HTML and CSS to
                re-create the Spotify Dashboard Page.
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/zainabch123/database-cinema-booking-api?tab=readme-ov-file">
          <div className="project-container">
            <div className="project-image">
              <img src={CinemaBookingImg} alt="CinemaBookingImg" />
            </div>
            <div className="project-text">
              <h3>Cinema Booking API</h3>
              <p>
                A 4-day project which involved building an API from scratch,
                utilizing CRUD operations. Also implemented own test suites.
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/zainabch123/react-greengrocers">
          <div className="project-container">
            <div className="project-image">
              <img src={GreengrocersImg} alt="GreengrocersImg" />
            </div>
            <div className="project-text">
              <h3>Greengrocers Exercise</h3>
              <p>
                A shopping-cart exericise built in 1-day which allows users to
                add items to cart and filter and sort items. Built entirely in
                React.
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/zainabch123/js-dom-brewery-tours-challenge?tab=readme-ov-file">
          <div className="project-container">
            <div className="project-image">
              <img src={BreweryToursImg} alt="BreweryToursImg" />
            </div>
            <div className="project-text">
              <h3>Brewery Tours Website</h3>
              <p>
                A 4-day project built with JS-DOM implementing advanced search
                and filter functionality to enable users to interact with
                brewery data obtained from a REST API with ease.{" "}
              </p>
            </div>
          </div>
        </a>

        {/* <button
          className="scroll-button"
          id="right-button"
          onClick={() => handleNav("right")}
        >
          Right
        </button> */}
      </section>
    </section>
  );
}
