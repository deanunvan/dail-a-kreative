import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Questionnaire.css';

const questions = [
  {
    question: "How important is it for you to have access to a platform that connects you with local clients for in-person projects?",options: [
      { text: "Very important – I prefer in-person work", icon: "🧑‍🎨" },
      { text: "Somewhat important – it depends on the project", icon: "📅" },
      { text: "Not very important – I prefer remote work", icon: "💰" }
    ]
  },
  // ... rest of questions unchanged
];

const Qn4 = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        if (!selectedOption) return;

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption('');
        } else {
            navigate('/qn5');
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } else {
            navigate('/qn3');
        }
    };

    return (
        <div className="questionnaire-container">
            <h1>4/6</h1>

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

export default Qn4;
