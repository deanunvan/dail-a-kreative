import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Questionnaire.css';

const questions = [
    {
        question: "How do you currently find creative professionals for your projects?",
        options: [
          { text: "Online platforms and marketplaces.", icon: "🌐" },
          { text: "Word of mouth and personal referrals.", icon: "🗣️" },
          { text: "Social media and local listings.", icon: "📱" }
        ]
    },
  // ... rest of questions unchanged
];

const Questionnaire2 = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        if (!selectedOption) return; // Prevent proceeding if no selection

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(''); // Reset selection for next question
        } else {
            navigate('/questionnaire3');
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } else {
            navigate('/questionnaire');
        }
    };

    return (
        <div className="questionnaire-container">
            <h1>2/5</h1>

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

            <footer>
                <p>Copyright 2025 All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default Questionnaire2;
