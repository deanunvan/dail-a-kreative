import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './css/GreetingSection.css'; // Ensure this path is correct
import thumbsUpImage from '../assets/Group 1.png'; // Ensure you have an appropriate image

const GreetingSection2 = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { fullName } = location.state || { fullName: 'Guest' }; // Default to 'Guest' if not provided

  const handleGetStarted = () => {
    navigate('/qn'); // Navigate to the questionnaire
  };

  return (
    <div>
          <div className="greeting-container">
      <div className="greeting-content">
        <div className="text-section">
          <h2>Hey <br /> {fullName},</h2>
          <p>
            Reach more clients, manage projects efficiently, 
            and grow your creative business.
        </p>
          
          <div className="questions">
            <p>Answer a few questions to help with your guest:</p>
            <hr className="dividerr" />
            <p>It will only take a few minutes</p>
            <hr className="dividerr" />
            <p>Help us help you</p>
            <hr className="dividerr" />
          </div>
          
          <button className="get-started-button" onClick={handleGetStarted}>Get Started!</button>
        </div>
        <div className="emoji-container">
          <img src={thumbsUpImage} alt="Thumbs Up" className="thumbs-up-image" />
        </div>
      </div>
    </div>
    <footer>
        <p>Copyright 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default GreetingSection2;