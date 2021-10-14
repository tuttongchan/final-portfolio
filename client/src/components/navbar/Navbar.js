import React from 'react';
import './navbar.css';
import Hamburger from '../hamburger/Hamburger';

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">fffff</div>
      <div className="nav-items-container">
        <ul>
          <li>
            <span>01.</span>
            <a>About</a>
          </li>
          <li>
            <span>02.</span>
            <a>Experience</a>
          </li>
          <li>
            <span>03.</span>
            <a>Contact</a>
          </li>
          <li>
            <a style={{ marginLeft: '0', color: 'rgb(93, 231, 180)' }}>
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* --- Hamburger Menu --- */}
      {/* <div className="hamburger-container"> */}
      <Hamburger />
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
