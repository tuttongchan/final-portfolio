import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-content-container">
        <h6 className="header-heading-1">Hi, my name is</h6>
        <h2 className="header-heading-2">Tut Tongchantra</h2>
        <h2 className="header-heading-3">I build things for the web.</h2>
        <h6 className="header-heading-4">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible human-centered products at <span>Onntek.</span>
        </h6>
        <Link to="contact">
          <button className="header-contact-button">Get in Touch 👋</button>
        </Link>
      </div>
      <div className="socials-container">
        <ul>
          <li>
            <a
              href="https://github.com/tuttongchan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tut-tongchantra-36b50a1b6/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
        <div className="vertical-line"></div>
      </div>

      <div className="email-fixed">
        <span>tuttenkamen@gmail.com</span>
        <div className="vertical-line"></div>
      </div>

      {/* <div className="scroll-down-container bounce">
        <a href="#about">
          <i className="fa fa-arrow-down fa-2x"></i>
          <span>Scroll</span>
        </a>
      </div> */}
    </header>
  );
};

export default Header;
