import React from 'react'
import Slide from './Slide'
import leetcode from '../Images/leetcode.png';
import gfg from '../Images/gfg.png';
import hacker from '../Images/hacker.png';
import gh from '../Images/gh.jpg';

import './Carousel.css'
const Carousel = () => {
  return (
       <div className="fluid-container">
         <div className='container4'>
       <div className="slider1">
       <h1  style={{color:'white',fontSize:'4rem',paddingTop:"5rem"}}>Skills</h1>
       </div>
      <div className="slider2">
        <div style={{paddingLeft:"1rem",paddingTop:"4rem"}}>
          <Slide/>
        </div>
      </div>
      <h1 className='profile' style={{color:'aliceblue'}}> Coding Profiles</h1>
      <div className="profiles">
        <a href="https://leetcode.com/u/abhinavtilwar1501/" target="_blank" rel="noopener noreferrer">
          <img src={leetcode} alt="leetcode logo" className="logo1" />
        </a>       
        <a href="https://www.geeksforgeeks.org/user/abhinavtilwar03/" target="_blank" rel="noopener noreferrer">
          <img src={gfg} alt="leetcode logo" className="logo1" />
        </a> 
        <a href="https://www.hackerrank.com/profile/abhinavtilwar03" target="_blank" rel="noopener noreferrer">
          <img src={hacker} alt="leetcode logo" className="logo1" />
        </a> 
        <a href="https://github.com/AbhinavTilwar" target="_blank" rel="noopener noreferrer">
          <img src={gh} alt="leetcode logo" className="logo1" />
        </a> 
      </div>
    </div>
       </div>
  )
}

export default Carousel
