import React from 'react';
import './Hero.css';
import './Navbar.css';
import PopupImage from './PopupImage'; // Import the popup component

const Hero = () => {
  return (
    <div className="container02" style={{ backgroundColor: "#ffffff" }}>
      <nav className="navbar">
        <a href="/" className="nav-link">Home</a>
        <a href="/" className="nav-link">Education</a>
        <a href="/" className="nav-link">Projects</a>
        <a href="/" className="nav-link">Recommendations</a>
        <a href="/" className="nav-link">Contact</a>
        <a href="/" className="nav-link">Skills</a>
      </nav>
      <PopupImage /> {/* Add the PopupImage component */}

      <div className="intro">
        <div style={{ fontSize: '7rem', color: "aliceblue" }}>Hi!</div>
        <div className="title" style={{ fontSize: '6rem', color: "aliceblue" }}>I'm Abhinav Tilwar</div>
        <h1 style={{ fontSize: '3rem', color: "#a2d2ff" }}>Final year engineering student</h1>
        <div className="intro-text mt-4" style={{ fontSize: '2rem', padding: "3rem", color: "aliceblue" }}>
          I'm a passionate student with a keen interest in the field of technology, web development, and android development with a good coding profile.
        </div>
      </div>
    </div>
  );
};

export default Hero;
