import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from "../assets/hero1.png";
import pic2 from "../assets/hero2.png"; // Add your images
import pic3 from "../assets/hero3.png"; // Add your images
import pic4 from "../assets/hero4.png"; 
import pic5 from "../assets/hero 5.png"; 
import pic6 from "../assets/hero1.png"; 
import pic7 from "../assets/hero4.png"; 
import pic8 from "../assets/hero10.png"; 
import './css/Hero.css';
import logo from "../assets/dail_logo-removebg-preview 4.svg";

const ConnectSection = () => {
  const carouselSets = [
    [pic1, pic2, pic3, pic4],  // First carousel images
    [pic5, pic6, pic7, pic8],  // Second carousel images
    // [pic3, pic1, pic2]   // Third carousel images
  ];

  return (
    <div>
          <div className="container">
      <div className="hero-section">
        {/* Content Column */}
        <div className="content-column">
          <h1 className="hero-title">
            Connect with Creatives.<br />
            Connect with Ease.
          </h1>
          
          <p className="hero-description">
            Dial-a-Creative instantly connects you with top creatives for in-person or remote projects. 
            Get high-quality work, fast and hassle-free, with AI-powered project management.
          </p>

          <div className="divider" />

          <div className="cta-section">
            <p className="cta-text">Join Our Waiting List, fill out form below</p>
            <div className="button-group">
              <Link to="/sign-up" className="button primary">
                I'm Seeking A Creative
              </Link>
              <Link to="/media" className="button secondary">
                I'm A Media Creative
              </Link>
            </div>
          </div>
        </div>

        {/* Triple Carousel Column */}
        <div className="carousel-column">
          <div className="multi-carousel-container">
            {carouselSets.map((carousel, index) => (
              <div key={`carousel-${index}`} className="single-carousel">
                <div className="vertical-carousel">
                  {[...carousel, ...carousel].map((img, idx) => (
                    <div key={`${index}-${idx}`} className="carousel-item">
                      <img src={img} alt={`Carousel ${index + 1} item ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="copyright-footer">
        <p>Copyright 2025 All Rights Reserved</p>
      </footer>
    </div>
      {/* <footer className="copyright-footer">
        <p>Copyright 2025 All Rights Reserved</p>
      </footer> */}
    </div>
  );
};

export default ConnectSection;