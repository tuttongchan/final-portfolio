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
          <h2 className="project-title-2">MYGARGAGE</h2>
          <p className="project-paragraph-1">
            MyGarage is a fully functional eCommerce application with PayPal
            integration. Lately I've been into a series called Trash Talk where
            they flip Garage Sale items for profit. I decided to make platform
            specifically for garage items!
          </p>
          <div className="projects-list-1">
            <ul>
              <li>React.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Redux</li>
              <li>JWT</li>
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
          <h2 className="project-title-4">FlyGuys</h2>
          <p className="project-paragraph-2">
            Lately I've been involved in the NFT space so I decided to make
            something that reflected that. FlyGuys my attempt of an NFT promo
            website. The Birds NFTs where generated from a Python Script and the
            site was built with React.
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            voluptatem quae sit ut aperiam. Officiis vel error officia culpa
            tenetur et minima deleniti minus sapiente, esse placeat sequi saepe
            excepturi. */}
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
