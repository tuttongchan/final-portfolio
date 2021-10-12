import React from 'react';
import './projects.css';
import Project1 from '../../images/project-1.png';
import Project2 from '../../images/project-2.png';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-heading-container">
        <h4 className="projects-heading">03. Some Things I've Built</h4>
        <div className="line"></div>
      </div>
      <div className="projects-content-container">
        <div className="projects-picture">
          <img src={Project1} alt="Project 1" />
        </div>
        <div className="projects-desc">
          <h6 className="project-title-1">Featured Project</h6>
          <h2 className="project-title-2">Travel Map</h2>
          <p className="project-paragraph-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            voluptatem quae sit ut aperiam. Officiis vel error officia culpa
            tenetur et minima deleniti minus sapiente, esse placeat sequi saepe
            excepturi.
          </p>
          <div className="projects-list-1">
            <ul>
              <li>React.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Redux</li>
              <li>PayPal API</li>
            </ul>
          </div>
          <div className="project-icons-container">
            <i className="fab fa-github"></i>
            <i className="fas fa-desktop ml-1"></i>
          </div>
        </div>
      </div>
      <div className="projects-content-container">
        <div className="projects-desc">
          <h6 className="project-title-3">Featured Project</h6>
          <h2 className="project-title-4">Travel Map</h2>
          <p className="project-paragraph-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            voluptatem quae sit ut aperiam. Officiis vel error officia culpa
            tenetur et minima deleniti minus sapiente, esse placeat sequi saepe
            excepturi.
          </p>
          <div className="projects-list-2">
            <ul>
              <li>React.js</li>
              <li>Python</li>
            </ul>
          </div>
          <div>
            <i className="fab fa-github mr-1"></i>
            <i className="fas fa-desktop"></i>
          </div>
        </div>
        <div className="projects-picture">
          <img src={Project2} alt="Project 2" />
        </div>
      </div>
      {/* <div className="projects-content-container">
        <div className="projects-picture"></div>
        <div className="projects-desc">
          <h6>Featured Project</h6>
          <h2>Travel Map</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            voluptatem quae sit ut aperiam. Officiis vel error officia culpa
            tenetur et minima deleniti minus sapiente, esse placeat sequi saepe
            excepturi.
          </p>
          <ul>
            <li>React.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Redux</li>
            <li>Socket.io</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
