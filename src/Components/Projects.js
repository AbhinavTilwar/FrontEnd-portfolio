import React, { useEffect, useState } from 'react';
import Project from './Project';
import img1 from '../Images/2303.w015.n003.1211B.p15.1211.jpg';
import img2 from '../Images/4217346.jpg';
import img3 from '../Images/59227.jpg';
import img4 from '../Images/123Z_2012.w026.n002.39B.p1.39.jpg';
import img5 from '../Images/1478.jpg';
import img6 from '../Images/castle1.jpg';
import './Projects.css'
const Projects = () => {
  const [projects, setProjects] = useState([]);

    const predefinedProjects = [
    { id: 5, image:img5, title: 'Publication data management', desc: 'manages publications data of the college',skills:['Typescript','NextJs','CSS','HTML','MongoDB'],link:"https://publication-management.vercel.app/"},
    { id: 1, image:img1, title: 'Text Converter', desc: 'allows various operation on the provided text',skills:['ReactJs','CSS','HTML','Js'],link:'https://abhinavtilwar.github.io/text-converter/' },
    { id: 2, image:img2, title: 'News App', desc: 'provides latest news on different topics',skills:['ReactJs','CSS','HTML','Javascript'],link:'https://github.com/AbhinavTilwar/newsapp/tree/gh-pages'  },
    { id: 3, image:img3, title: 'Expiry Checker', desc: 'keeps track on expiry dates of various items',skills:['RactJs','CSS','HTML','JS'],link:'https://abhinavtilwar.github.io/expiry_checker/' },
    { id: 4, image:img4, title: 'Website performance analyser', desc: 'Provided comparative analysis on loading speed of various websites ' ,skills:['Python','Networks'],link:'https://github.com/AbhinavTilwar/Website-performance-Analyser' },
    { id: 6, image:img6, title: 'How To Make Flyer Design', desc: 'Lorem ipsum dolor sit amet, consec adipiscing elit ' ,skills:['Typescript','ReactJs','NextJs','CSS','HTML','MongoDB'],link:'' }
  ];

  useEffect(() => {
    // Commented out the fetch logic
    // fetch('http://localhost:3031/posts')
    //   .then(res => {
    //     if (!res.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return res.json();
    //   })
    //   .then(data => setProjects(data))
    //   .catch(err => console.error('Fetch error:', err));
    
    // *******Used the predefined list of projects
    // You can use the api by removing line 30 
    setProjects(predefinedProjects);
  }, []);

  return (
        <div className="container-project">
        <div className="row1">
          <div className="">
            <div className='py-5'>
              <h1 style={{color:'white',fontSize:'4rem'}}>Projects</h1>
              </div>
          </div>
        </div>
        <div className="row2">
          {projects && projects.map((project, index) => (
            <div key={index}>
              <Project img={project.image} title={project.title} desc={project.desc} skills={project.skills} link={project.link} />
            </div>
          ))}
        </div>
      </div>
  );
};

export default Projects;
