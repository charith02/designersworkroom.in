import React, { useEffect, useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
    const [logoClass, setLogoClass] = useState('');

    useEffect(() => {
        // Start the fade-in effect after the initial load
        const timer = setTimeout(() => {
            setLogoClass('fade-in');
        }, 1000); // Delay to simulate fade-in after a short pause
        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    return (
        <div>
            <header className="slideshow-container">
                <div className="logo-container">
                    {/* Apply the logoClass for the fade-in effect */}
                    <img src="/assets/logo.png" alt="Logo" className={`logo ${logoClass}`} />
                </div>
                <div className="slides">
                    <img src="/assets/slide1.jpg" alt="Slide 1" />
                    <img src="/assets/slide2.jpg" alt="Slide 2" />
                    <img src="/assets/slide3.jpg" alt="Slide 3" />
                    <img src="/assets/slide4.jpg" alt="Slide 3" />
                    <img src="/assets/slide5.jpg" alt="Slide 3" />
                </div>
            </header>
            <Navbar />
            <AnimatedSection />
            <Footer />
        </div>
    );
};

export default Home;