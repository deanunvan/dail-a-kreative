import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import pic1 from '../assets/pic2.png';
import './css/Hero.css';
import { Link } from 'react-router-dom';

const SignUpSection = () => {
  const [fullName, setFullName] = useState(''); // State to store the full name
  const [email, setEmail] = useState(''); // State to store the email
  const [phone, setPhone] = useState(''); // State to store the phone number
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    console.log("scrollToHero called");

    if (heroSection) {
      console.log("Hero section found:", heroSection);
      heroSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("Hero section not found");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Navigate to the GreetingSection and pass the full name
    navigate('/greeting', { state: { fullName } });
  };

  return (
    <div>
      <div className="sign-up-container">
        <div className="image-container">
          <img src={pic1} alt="Background" className="background-image" />
          <div className="text-overlay">
            <h2>Sign Up Now! <br /> Get Early Access</h2>
            <p>Find a Media Creative!</p>
          </div>
        </div>
        <div className="form-container">
          <p>...fill out the form below!</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name :</label>
              <input
                type="text"
                placeholder="Enter..."
                required
                className="input-field"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email :</label>
              <input
                type="email"
                placeholder="Enter..."
                required
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone Number :</label>
              <PhoneInput
                country={'zw'}
                placeholder="Enter..."
                disableCountryCode={true}  // Hides the dial code from the input field
                dropdownStyle={{ backgroundColor: 'white', color: 'black' }}  // Styles dropdown with white background and black text
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputStyle={{
                  width: '96%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: 'none',
                  marginBottom: '10px',
                  marginLeft: '40px',
                }}
                buttonStyle={{
                  borderRadius: '5px',
                }}
              />
            </div>
            <button
              type="submit"
              className="submit-button"
            >
              JOIN
            </button>
          </form>
        </div>
      </div>
      <footer className="copyright-footerr">
        <p>Copyright 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default SignUpSection;
