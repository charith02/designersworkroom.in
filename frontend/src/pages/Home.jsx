import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
const Home = () => {
  return (
    <div>
      <header className="slideshow-container">
        <div className="logo-container">
          <img src="/src/assets/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="slides">
          <img src="/src/assets/slide1.jpg" alt="Slide 1" />
          <img src="/src/assets/slide2.jpg" alt="Slide 2" />
          <img src="/src/assets/slide3.jpg" alt="Slide 3" />
        </div>
      </header>
      <Navbar />
      <AnimatedSection />
      <Footer />
    </div>
  );
};

export default Home;
