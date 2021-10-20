import React from 'react';
import './projects.css';
import Project1 from '../../images/project-1.png';
import Project2 from '../../images/project-2.png';
import Project3 from '../../images/project-3.png';
import Project4 from '../../images/project-4.png';

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
            <a
              href="https://github.com/tuttongchan/myShop"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://my-top-shop.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-desktop ml-1"></i>
            </a>
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
            <a
              href="https://github.com/tuttongchan/flyGuys"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github mr-1"></i>
            </a>
            <a
              href="https://flyguys.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-desktop"></i>
            </a>
          </div>
        </div>
        <div className="projects-picture-2">
          <img src={Project2} alt="Project 2" />
        </div>
      </div>

      <div className="projects-grid-1">
        <div className="projects-picture-1">
          <img src={Project4} alt="Project 1" />
        </div>
        <div className="projects-desc">
          <h6 className="project-title-1">Featured Project</h6>
          <h2 className="project-title-2">Bath Bombs</h2>
          <p className="project-paragraph-1">
            Bath Bombs is a custom Shopify Store connected to the Shopify API
            using Context API. The items were imported through CSV file using a Shopify Partners account. The styling was created from Chakra UI.
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
      </div>
    </div>
  );
};

export default Projects;
