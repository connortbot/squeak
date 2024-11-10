import './App.css';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ArticleShowcase from './components/ArticleShowcase';
import LiveTranslate from './components/LiveTranslate';

function App() {
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

export default App;
