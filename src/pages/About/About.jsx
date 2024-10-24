import React from 'react';
import "./About.css";

const About = () => {
  const teamMembers = [
      { name: 'Alice Johnson', role: 'CEO', img: 'https://via.placeholder.com/100' },
      { name: 'Bob Smith', role: 'CTO', img: 'https://via.placeholder.com/100' },
      { name: 'Charlie Brown', role: 'Designer', img: 'https://via.placeholder.com/100' },
  ];
  return (
    <div className="about">
        <h1>About Us</h1>
        <p>
            Welcome to our company! We are dedicated to providing the best services 
            to our customers. Our team is made up of passionate professionals 
            committed to excellence.
        </p>
        <h2>Our Team</h2>
        <div className="team-container">
            {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                    <img src={member.img} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    </div>
);
};

export default About
