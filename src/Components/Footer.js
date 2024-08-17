import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <>
    <div className="container04">
      <div>
        <div className="list">
          <h1 className='nav-link1' style={{fontSize:'1.5rem'}}><u>Quick Links</u></h1>
          <a href="#" className='nav-link1'>Home</a>
          <a href="#" className='nav-link1'>Skills</a>
          <a href="#" className='nav-link1'>Education</a>
          <a href="#" className='nav-link1'>Projects</a>
          <a href="#" className='nav-link1'>Recommendations</a>
        </div>
      </div>
      <div>
        <ul className="list" >
          <h1 className='nav-link1'style={{fontSize:'1.5rem'}}><u>Core Subjects</u></h1>
          <p className='nav-link1'>DSA</p>
          <p className='nav-link1'>Computer Networks</p>
          <p className='nav-link1'>Object Oriented Programming</p>
          <p className='nav-link1'>DBMS</p>
          <p className='nav-link1'>Operating System</p>
        </ul>
      </div>
      <div className="social-icons">
      <h1 className='nav-link1' style={{fontSize:'1.5rem'}}><u>Profiles</u></h1>

        <a href="www.linkedin.com/in/abhinav-tilwar-763232206" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faLinkedin} size="2x" /> LinkedIn
        </a>
        <a href="https://www.instagram.com/abhinav_tilwar/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faInstagram} size="2x" /> Instagram
        </a>
        <a href="https://x.com/tilwar_abh56048?mx=2" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faTwitter} size="2x" /> Twitter
        </a>
      </div>
    </div>
    <div style={{padding:"2rem",fontSize:"1.2rem"}}>
      All right are reserved.
    </div>
    </>
  );
};

export default Footer;
