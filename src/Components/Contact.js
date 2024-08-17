import React, { useState } from 'react';
import './Contact.css';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with the following data:', { name, email, subject, message });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    alert('message was sent')
  };

  return (
    <div className="cont05">
        <div className='container-contact'>
      <div className="form-outline">
        <h1 style={{ color: "white", fontSize: "4rem" }}>LEAVE ME INFO</h1>
        <form className="form-info" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">ENTER FULL NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ backgroundColor: "transparent", width: "22rem", height: "3rem", color: "white", fontSize: "1.7rem" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: "transparent", width: "22rem", height: "3rem", color: "white", fontSize: "1.7rem" }}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">SUBJECT</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{ backgroundColor: "transparent", width: "22rem", height: "3rem", color: "white", fontSize: "1.7rem" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">TYPE MESSAGE</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ backgroundColor: "transparent", width: "22rem", color: "white", fontSize: "1.7rem" }}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#ff594d", color: "white" }}
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
      <div className="co4">
        <h1 style={{ color: "white" }}>CONTACT DETAILS</h1>
        <div className="card1" style={{ borderRadius: "28px" }}>
          <p>COUNTRY: INDIA</p>
          <p>CITY: NAGPUR</p>
          <p>PHONE: 8261040149</p>
        </div>
        <div className="card1" style={{ borderRadius: "28px" }}>
          <p>EMAIL: abhinavtilwar03@gmail.com</p>
          <a href="www.linkedin.com/in/abhinav-tilwar-763232206" style={{textDecoration:"none",color:"white"}}>Profile: LINKEDIN</a>
          <a href="https://github.com/AbhinavTilwar" style={{textDecoration:"none",color:"white"}}>Profile: GITHUB</a>
        </div>
        
      </div>
    </div>
{/* <div style={{paddingTop:'2rem'}}>    <Footer/>
</div> */}
    </div>
  );
}

export default Contact;
