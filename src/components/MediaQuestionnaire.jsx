import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Questionnaire.css'; // Ensure this path is correct

// Updated questions array with icons
const questions = [
  {
    question: "What is your biggest challenge in finding consistent work opportunities?",
    options: [
      { text: "Finding reliable and high-quality talent.", icon: "🔍" }, // Replace with your icon
      { text: "Managing project timelines and communications.", icon: "🗓️" },
      { text: "Staying within budget.", icon: "💰" }
    ]
  },
  {
    question: "How do you currently find new projects or clients?",
    options: [
      { text: "Online platforms and marketplaces.", icon: "🌐" },
      { text: "Word of mouth and personal referrals.", icon: "🗣️" },
      { text: "Social media and local listings.", icon: "📱" }
    ]
  },
  {
    question: "What feature would make a creative services platform most appealing to you?",
    options: [
      { text: "Ability to find local creatives for in-person projects.", icon: "📍" },
      { text: "Access to a diverse range of creative services.", icon: "🎨" },
      { text: "AI-driven quality control and project management.", icon: "🤖" }
    ]
  },
  {
    question: "How important is it for you to have access to a platform that connects you with local clients for in-person projects?",
    options: [
      { text: "Very important - I prefer in-person work.", icon: "❤️" },
      { text: "Somewhat important - it depends on the project.", icon: "💼" },
      { text: "Not very important - I prefer remote work.", icon: "🏡" }
    ]
  },
  {
    question: "What is your primary concern when working with clients?",
    options: [
      { text: "Ensuring consistent quality of work.", icon: "⭐" },
      { text: "Somewhat important - it depends on the project.", icon: "🔄" },
      { text: "Not very important - I prefer remote work.", icon: "🚀" }
    ]
  },
  {
    question: "How much commission are you willing to pay to use a platform that guarantees consistent work opportunities?",
    options: [
      { text: "Up to 20% commission for guaranteed work.", icon: "💸" },
      { text: "Between 10% to 20% commission.", icon: "📊" },
      { text: "Less than 10% commission.", icon: "🔻" }
    ]
  }
];

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/thank-you'); // Navigate to a thank you page or summary
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigate('/mediag'); // Go back to greeting if on the first question
    }
  };

  return (
    <div className="questionnaire-container">
          

      <h1 className='numbers'>{` ${currentQuestionIndex + 1}/${questions.length}`}</h1>
      <p className="question-text">{questions[currentQuestionIndex].question}</p>
      <div className="options">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <label key={index} className="option">
            <input type="radio" name="option" value={option.text} />
            <span role="img" aria-label="icon">{option.icon}</span> {option.text}
          </label>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handleBack} className="back-button">Back</button>
        <button onClick={handleNext} className="next-button">Next</button>
      </div>
      <div className="question-number">
                {questions.map((_, index) => (
                    <div key={index} className={`question-bar ${index <= currentQuestionIndex ? 'active' : ''}`}></div>
                ))}
            </div>
      <footer>
        <p>Copyright 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Questionnaire;