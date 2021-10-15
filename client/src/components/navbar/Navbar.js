import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Resume from '../../resources/TutsOfficialResume.pdf';
import Hamburger from '../hamburger/Hamburger';

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="nav-items-container">
        <ul>
          <li>
            <Link to="/">
              <span>01.</span>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <span>02.</span>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span>03.</span>
              <a href="#contact">Contact</a>
            </Link>
          </li>
          <li>
            <a
              style={{ marginLeft: '0', color: 'rgb(93, 231, 180)' }}
              target="_blank"
              rel="noreferrer"
              href={Resume}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* --- Hamburger Menu --- */}
      <div className="hamburger-container">
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
