import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './css/GreetingSection.css'; // Ensure this path is correct
import thumbsUpImage from '../assets/Group 1.png'; // Ensure you have an appropriate image

const GreetingSection = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { fullName } = location.state || { fullName: 'Guest' }; // Default to 'Guest' if not provided

  const handleGetStarted = () => {
    navigate('/mediaq'); // Navigate to the questionnaire
  };

  return (
    <div className="greeting-container">
      <div className="greeting-content">
        <div className="text-section">
          <h1>Hey {fullName},</h1>
          <p>Reach more clients,manage projects efficiently,<br/>and grow our creative business.</p>
          
          <div className="questions">
            <p>Answer a few questions to help with your guest:</p>
            <hr className="divider" />
            <p>It will only take a few minutes</p>
            <hr className="divider" />
            <p>Help us help you</p>
            <hr className="divider" />
          </div>
          
          <button className="get-started-button" onClick={handleGetStarted}>Get Started!</button>
        </div>
        <div className="emoji-container">
          <img src={thumbsUpImage} alt="Thumbs Up" className="thumbs-up-image" />
        </div>
      </div>
      <footer>
        <p>Copyright 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default GreetingSection;