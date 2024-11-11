import React from 'react';
import Navbar from '../../components/NavBar';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import ArticleShowcase from '../../components/ArticleShowcase';
import LiveTranslate from '../../components/LiveTranslate';
import './Home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LiveTranslate />
      <ArticleShowcase />
      <Footer />
    </div>
  );
}

export default Home;