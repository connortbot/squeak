import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="platform-text">Language Learning Reinvented</p>
        <h1 className="hero-title">Learn Languages Through Stories You Love</h1>
        <p className="hero-subtitle">
        Immerse yourself in your target language with tailored stories and current news articles that grow with your skills. Squeak makes language learning natural, enjoyable, and effective.
        </p>

        {/* Waitlist Signup Section */}
        <div className="waitlist-signup">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="signup-button">Join the Waitlist </button>
        </div>
      </div>

      {/* Background Glow */}
      <div className="background-glow"></div>
    </section>
  );
};

export default HeroSection;
