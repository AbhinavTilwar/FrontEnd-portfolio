import React, { useEffect, useState } from 'react';
import './Projects.css';
const Project = ({img,title,desc,skills,link}) => {
  const [imageUrl, setImageUrl] = useState('');
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch(`http://fastly.picsum.photos/id/1022/335/150.jpg?hmac=xhTq-8JdW3kcDQGpS3fZJ0Vu-Y43GnNzObalLNohysA`)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.urls.regular);
      })
      .catch((error) => console.error('Error fetching the image:', error));
  }, []);
//   const getRandomColor = () => {
//     const red = Math.floor(Math.random() * 56) + 200; // Red component between 200 and 255
//     const green = Math.floor(Math.random() * 56);     // Green component between 0 and 55
//     const blue = Math.floor(Math.random() * 56) + 100; // Blue component between 100 and 155
//     return `rgb(${red}, ${green}, ${blue})`;
// };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newColors = skills.map(() => getRandomColor());
  //     setColors(newColors);
  //   }, 4000);

  //   return () => clearInterval(interval); 
  // }, [skills]);

  return (
    <div className="project-card" >
      <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={img} className="card-img-top" style={{height:'14rem'}}alt="..No"/>
      </a>
      <div className="card-body ">
        <h5 className="card-title" style={{textAlign:"left",color:"white",fontSize:"1.5rem"}}>{title}</h5>
        <p className="card-text" style={{textAlign:"left",color:"aliceblue"}}>{desc}</p>
        <div style={{textAlign:"left",paddingTop:"1rem"}}>
        {skills && skills.map((skill, index) => (
          <span key={index} className="badge rounded-pill me-2 mb-2" style={{color:"aliceblue",padding:'0.5rem',border:"2px solid aliceblue",boxShadow:"1px 6px 15px rgba(75, 126, 255, 0.9)"}}>
            {skill}
          </span>
        ))}
      </div>
      </div>
      
    </div>
      </div>
  );
};

export default Project;
