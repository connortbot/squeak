import React from 'react';
import './ArticleShowcase.css';
import newsImage from '../assets/NewsDemo.png';

const ArticleShowcase = () => {
  return (
    <section className="article-showcase">
      <div className="article-image-container">
        <img src={newsImage} alt="News Article Demo" className="article-image" />
      </div>
      <div className="article-text">
        <p className="article-tagline">📚 Discover Relevant Content</p>
        <h2 className="article-title">Get Text Tailored to Your Reading Level</h2>
        <p className="article-description">
          Squeak provides you with stories and articles at your reading level, to help you learn languages through meaningful and relevant content.
        </p>
      </div>
    </section>
  );
};

export default ArticleShowcase;
