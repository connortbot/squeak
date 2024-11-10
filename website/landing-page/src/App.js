import './App.css';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ArticleShowcase from './components/ArticleShowcase';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ArticleShowcase />
      <Footer />
    </div>
  );
}

export default App;
