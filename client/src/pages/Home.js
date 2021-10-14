import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <div>
      <Header />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
