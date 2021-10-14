import React from 'react';
import './projects.css';
import Project1 from '../../images/project-1.png';
import Project2 from '../../images/project-2.png';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-heading-container">
        <h4 className="projects-heading">
          <span>03.</span> Some Things I've Built
        </h4>
        <div className="line"></div>
      </div>
      <div className="projects-grid-1">
        <div className="projects-picture-1">
          <img src={Project1} alt="Project 1" />
        </div>
        <div className="projects-desc">
          <h6 className="project-title-1">Featured Project</h6>
          <h2 className="project-title-2">MYGARGAGE</h2>
          <p className="project-paragraph-1">
            MyGarage is a Full-Stack MERN eCommerce application with PayPal
            integration. Lately I've been into a series called Trash Talk where
            they flip Garage Sale items for profit. I decided to make platform
            specifically for garage items!
          </p>
          <div className="projects-list-1">
            <ul>
              <li>React</li>
              <li>Express</li>
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
        <div className="projects-picture-query">
          <img src={Project1} alt="Project 1" />
        </div>
      </div>
      <div className="projects-grid-2">
        <div className="projects-desc">
          <h6 className="project-title-3">Featured Project</h6>
          <h2 className="project-title-4">FlyGuys</h2>
          <p className="project-paragraph-2">
            Lately I've been involved in the NFT space so I decided to make
            something that reflected that. FlyGuys is my attempt of a NFT promo
            website. The Birds NFTs were generated from Python and the site was
            built with React.
          </p>
          <div className="projects-list-2">
            <ul>
              <li>React</li>
              <li>Python</li>
              <li>CSS</li>
            </ul>
          </div>
          <div>
            <i className="fab fa-github mr-1"></i>
            <i className="fas fa-desktop"></i>
          </div>
        </div>
        <div className="projects-picture-2">
          <img src={Project2} alt="Project 2" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
