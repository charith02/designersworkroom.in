import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
    return (
        <div>
            <header className="slideshow-container">
                {/* Centered logo */}
                <div className="logo-container">
                    <Link to="/"><img src="/assets/logo.png" alt="Logo" className='logo' /></Link>
                </div>

                {/* Slideshow images */}
                <div className="slides">
                    <img src="/assets/main.webp" alt="Slide 1" />
                </div>

                {/* Quadrant 3: Social Media Icons */}
                <div className="social-media">
                    <div className="icon-with-text">
                        <a href="mailto:hello@designersworkroom.in"><FontAwesomeIcon icon={faEnvelope} className="social-icon" /></a>
                    </div>
                    <div className="icon-with-text">
                        
                        <a href="https://wa.me/+919718858337" target="_blank" rel="noopener noreferrer" className="icon-text"><FontAwesomeIcon icon={faWhatsapp} className="social-icon" /></a>
                    </div>
                    <div className="icon-with-text">
                        
                        <a href="https://www.facebook.com/designersworkroompvtltd/" target="_blank" rel="noopener noreferrer" className="icon-text"><FontAwesomeIcon icon={faFacebookF} className="social-icon" /></a>
                    </div>
                    <div className="icon-with-text">
                        
                        <a href="https://www.instagram.com/designers_workroom/" target="_blank" rel="noopener noreferrer" className="icon-text"><FontAwesomeIcon icon={faInstagram} className="social-icon" /></a>
                    </div>
                </div>

                {/* Quadrant 1: Navigation Links */}
                <div className="nav-links">
                    <ul>
                        <li><Link to="/office">Office</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>
            </header>

            <AnimatedSection />
        </div>
    );
};

export default Home;
