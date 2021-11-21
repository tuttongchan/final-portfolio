import React from 'react';
import './projects.css';
import Project1 from '../../images/project-1.png';
import Project2 from '../../images/project-2.png';
import Project4 from '../../images/project-4.png';
import Moogle from '../../images/moogle.png';
import BugBud from '../../images/bugbud.png';
import Nature from '../../images/nature.png';
import Gym from '../../images/gym.png';

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-heading-container">
        <h4 className="projects-heading">
          <span>02.</span> Some Projects I've Built
        </h4>
        <div className="line"></div>
      </div>

      <div className="projects-grid-1">
        <div className="projects-picture-1">
          <img src={BugBud} alt="Project 1" />
        </div>
        <div className="projects-desc">
          <h6 className="project-title-1">Featured Project</h6>
          <h2 className="project-title-2">BugBud</h2>
          <p className="project-paragraph-1">
            BugBud is a Full-Stack application I created to document all my
            errors & inspiration when it comes to coding. Firebase was used to
            store images. Use the Guest Sign-In for ease!
          </p>
          <div className="projects-list-1">
            <ul>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Redux</li>
              <li>JWT</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="project-icons-container">
            <a
              href="https://github.com/tuttongchan/BugBud"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://tutbugbud.herokuapp.com/login"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-desktop ml-1"></i>
            </a>
          </div>
        </div>
        <div className="projects-picture-query">
          <img src={BugBud} alt="Project 1" />
        </div>
      </div>

      <div className="projects-grid-2">
        <div className="projects-desc">
          <h6 className="project-title-3">Featured Project</h6>
          <h2 className="project-title-4">MYGARAGE</h2>
          <p className="project-paragraph-2">
            MyGarage is a Full-Stack MERN eCommerce application with PayPal
            integration. Lately I've been into a series called Trash Talk where
            they flip Garage Sale items for profit. I decided to make platform
            specifically for garage items. Use the Guest Sign-In for ease!
          </p>
          <div className="projects-list-2">
            <ul>
              <li>React</li>
              <li>Node</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Redux</li>
              <li>JWT</li>
              <li>PayPal API</li>
            </ul>
          </div>
          <div>
            <a
              href="https://github.com/tuttongchan/myShop"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github mr-1"></i>
            </a>
            <a
              href="https://my-top-shop.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-desktop"></i>
            </a>
          </div>
        </div>
        <div className="projects-picture-2">
          <img src={Project1} alt="Project 2" />
        </div>
      </div>

      <div className="projects-grid-1">
        <div className="projects-picture-1">
          <img src={Gym} alt="Project 1" />
        </div>
        <div className="projects-desc">
          <h6 className="project-title-1">Featured Project</h6>
          <h2 className="project-title-2">Don Fitness</h2>
          <p className="project-paragraph-1">
            Don Fitness is my attempt of a Gym landing page. The animations were
            created from GSAP.
          </p>
          <div className="projects-list-1">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>GSAP</li>
            </ul>
          </div>
          <div className="project-icons-container">
            <a
              href="https://github.com/tuttongchan/don-fitness"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://donfitness.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-desktop ml-1"></i>
            </a>
          </div>
        </div>
        <div className="projects-picture-query">
          <img src={Gym} alt="Project 1" />
        </div>
      </div>

      <div className="projects-grid-2">
        <div className="projects-desc">
          <h6 className="project-title-3">Featured Project</h6>
          <h2 className="project-title-4">Outdoors</h2>
          <p className="project-paragraph-2">
            Outdoors is an informative landing page for Nature tours. The
            animations were created purely from CSS and SASS.
          </p>
          <div className="projects-list-2">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
            </ul>
          </div>
          <div>
            <a
              href="https://github.com/tuttongchan/nature-landing"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github mr-1"></i>
            </a>
            <a
              href="https://outdoorslanding.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-desktop"></i>
            </a>
          </div>
        </div>
        <div className="projects-picture-2">
          <img src={Nature} alt="Project 2" />
        </div>
      </div>

      {/* <div className="projects-grid-1">
        <div className="projects-picture-1">
          <img src={Project4} alt="Project 1" />
        </div>
        <div className="projects-desc">
          <h6 className="project-title-1">Featured Project</h6>
          <h2 className="project-title-2">Bath Bombs</h2>
          <p className="project-paragraph-1">
            Bath Bombs is a custom Shopify Store connected to the Shopify API
            using Context API. The items were imported through CSV file using a
            Shopify Partners account. The styling was created from Chakra UI.
          </p>
          <div className="projects-list-1">
            <ul>
              <li>React</li>
              <li>Context API</li>
              <li>Chakra UI</li>
              <li>Shopify API</li>
            </ul>
          </div>
          <div className="project-icons-container">
            <a
              href="https://github.com/tuttongchan/shopify-bathbombs/tree/master/src"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://shopify-headless.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-desktop ml-1"></i>
            </a>
          </div>
        </div>
        <div className="projects-picture-query">
          <img src={Project4} alt="Project 1" />
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
