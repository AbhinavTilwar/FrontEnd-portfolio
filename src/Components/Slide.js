import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react';
import html from '../Images/html.png';
import css from '../Images/css.png';
import js from '../Images/js.png';
import sql from '../Images/sql.png'
import java from '../Images/java.png';
import react from '../Images/react.png'
import c from '../Images/c.webp';
import vs from '../Images/vs.jpg';
import ij from '../Images/ij.jpg';
import gh from '../Images/gh.jpg';
import boot from '../Images/bootstrap.jpg';
import leetcode from '../Images/leetcode.png';
import gfg from '../Images/gfg.png';
import hacker from '../Images/hacker.png';
import Items from "./Items";

const data1 = [
  {
    image:html, 
    name:'HTML',
    type:'languages'
  },
  {
    image:css, 
    name:'CSS',
    type:'languages'

  },
  {
    image:js, 
    name:'JS',
    type:'languages'

  },
  {
    image:sql, 
    name:'MySQL',
    type:'languages'

  },
  {
    image:java, 
    name:'JAVA',
    type:'languages'

  },
  {
    image:react, 
    name:'react',
    type:'languages'

  },
  {
    image:boot, 
    name:'bootstrap',
    type:'languages'

  },
  {
    image:c, 
    name:'c',
    type:'languages'

  },
  

];
const data2=[
  {
    image:vs, 
    name:'vs studio',
    type:'tools'
  },
  {
    image:ij, 
    name:'intellij',
    type:'tools'
  },
  {
    image:gh, 
    name:'github',
    type:'tools'
  },
  {
    image:leetcode, 
    name:'leetcode',
    type:'tools'
  },
  {
    image:gfg, 
    name:'gfg',
    type:'tools'
  }
  ,
  {
    image:hacker, 
    name:'hackerrank',
    type:'tools'
  }
]

 const Slide = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed:1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: true,
    autoplay: true,    
    autoplaySpeed: 3000,   
    pauseOnHover: true  
  };  

  return (
    <div className='h-screen' style={{paddingTop:"7rem"}}>
              {/* <div style={{fontSize:"2rem",color:'aliceblue',paddingTop:"2rem"}}>Languages & Frameworks</div> */}

      <div className='sliding' style={{paddingLeft:"2rem",paddingRight:"2rem"}}>
        <Slider {...settings} >
          {
            data1.map((item, index) => (
              <div key={index}>
                <div>
              {<Items image={item.image} name={item.name}/>}
            </div>
              </div>
            ))
          }
        </Slider>
      </div>
      {/* <div style={{fontSize:"2rem",paddingTop:"2rem",color:'aliceblue'}}>Tools & coding profiles</div> */}

      <div className='' style={{paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"6rem"}}>
        <Slider {...settings} style={{}}>
          {
            data2.map((item, index) => (
              <div key={index}>
                <div>
              {<Items image={item.image} name={item.name}/>}
            </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
