import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Questionnaire.css';

const questions = [
  {
    question: "How do you currently find new projects or clients?",
    options: [
      { text: "Online platforms and marketplaces", icon: "🧑‍🎨" },
      { text: "Personal network and referrals", icon: "📅" },
      { text: "Social media and local listings", icon: "💰" }
    ]
  },
  // ... rest of questions unchanged
];

const Qn2 = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        if (!selectedOption) return;

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption('');
        } else {
            navigate('/qn3');
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } else {
            navigate('/qn');
        }
    };

    return (
        <div className="questionnaire-container">
            <h1>2/6</h1>

            <p className="question-text">{questions[currentQuestionIndex].question}</p>

            <div className="options">
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <label key={index} className="option">
                        <input
                            type="radio"
                            name="option"
                            value={option.text}
                            checked={selectedOption === option.text}
                            onChange={() => setSelectedOption(option.text)}
                        />
                        <span className="option-icon">{option.icon}</span>
                        <span className="option-text">{option.text}</span>
                    </label>
                ))}
            </div>

            <div className="navigation-buttons">
                <button onClick={handleBack} className="back-button">Back</button>
                <button
                    onClick={handleNext}
                    className={`next-button ${!selectedOption ? 'disabled' : ''}`}
                    disabled={!selectedOption}
                >
                    {currentQuestionIndex === questions.length - 1 ? 'Next' : 'Next'}
                </button>
            </div>

            <footer className="copyright-footerr">
        <p>Copyright 2025 All Rights Reserved</p>
      </footer> 
        </div>
    );
};

export default Qn2;
