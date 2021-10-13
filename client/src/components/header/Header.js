import React from 'react';
import './header.css';

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
          building accessible human-centered products at <span>Onntek</span>
        </h6>
      </div>
      <div className="socials-container">
        <ul>
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
          <li>
            <i className="fa-brands fa-linkedin-in"></i>
          </li>
        </ul>
        <div className="vertical-line"></div>
      </div>

      <div className="email-fixed">
        <span>tuttenkamen@gmail.com</span>
        <div className="vertical-line"></div>
      </div>

      <div className="scroll-down-container bounce">
        <a href="#about">
          <i className="fa fa-arrow-down fa-2x"></i>
          <span>Scroll</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
