import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Questionnaire.css';

const questions = [
  {
    question: "What feature would make a creative services platform most appealing to you?",
    options: [
      { text: "Access to a diverse range of  projects and clients", icon: "🧑‍🎨" },
      { text: "Tools for managing projects and ensuring timely payments", icon: "📅" },
      { text: "Opportunities for networking and professional growth", icon: "💰" }
    ]
  },
  // ... rest of questions unchanged
];

const Qn3 = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        if (!selectedOption) return;

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption('');
        } else {
            navigate('/qn4');
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } else {
            navigate('/qn2');
        }
    };

    return (
        <div className="questionnaire-container">
            <h1>3/6</h1>

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

export default Qn3;
