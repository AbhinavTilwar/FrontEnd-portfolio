import React from 'react'
import './items.css';
const Items = ({feedback,desc,image,name,desgn}) => {
  console.log("Image Path:", image);
  return (
    <div className="card2" style={{borderRadius:"9px",width:"14rem",height:"14rem",backgroundColor:"transparent",display:'flex',justifyContent:"center",alignItems:"center"}}>
    <div className="">
      <img src={image} alt="xxx" className='skills' style={{borderRadius:"6px",height:"10rem",width:"10rem"}} /> 
      <div className='name01' style={{color:'aliceblue',fontSize:'1.1rem',padding:"1.2rem"}}>
        {name}
      </div>
  </div>
  
</div>
  )
}

export default Items
