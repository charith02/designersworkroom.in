import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import AnimatedSection from '../components/AnimatedSection';
// import GTM from "../components/GTM";
// import Analytics from '../components/Analytics';

const Home = () => {
    return (
        <div>
            {/* Page-Specific SEO Meta Tags */}
            <Helmet>
                <title>Luxury Interior Design & Bespoke Decor | Designers Workroom</title>
                <meta name="description" content="Explore luxury home and office design solutions at Designers Workroom. A hub for interior designers, architects, and furniture artisans." />
                <meta name="keywords" content="luxury interior design, bespoke decor, modern home design, architecture studio, interior designers in Delhi" />
                <meta property="og:title" content="Luxury Interior Design & Bespoke Decor" />
                <meta property="og:description" content="Join a creative hub for designers and architects. Discover innovative home and office decor solutions, handcrafted furniture, and modern interior trends." />
                <meta property="og:image" content="/assets/home.webp" />
                <meta property="og:url" content="https://designersworkroom.in" />
            </Helmet>

            {/* Optimized H1 Tag for SEO */}
            <h1>Luxury Interior Design & Innovative Architecture Solutions</h1>

            {/* Introduction Section */}
            <p>Welcome to Designers Workroom – a premium space where creativity meets innovation. Discover our range of modern home decor, office designs, and architectural solutions.</p>

            <header className="header-container">
                <div className="logo-container">
                    <Link to="/"><img src="/assets/logo.png" alt="Designers Workroom Logo" className='logo' /></Link>
                </div>

                <div className="slides">
                    <img src="/assets/home.webp" alt="Luxury Home Interior Design" />
                </div>

                <div className="social-media">
                    <div className="icon-with-text">
                        <a href="mailto:hello@designersworkroom.in"><FontAwesomeIcon icon={faEnvelope} className="social-icon" /></a>
                    </div>
                    <div className="icon-with-text">
                        <a href="https://wa.me/+919718858337" target="_blank" rel="noopener noreferrer" className="icon-text"><FontAwesomeIcon icon={faWhatsapp} className="social-icon" /></a>
                    </div>
                    <div className="icon-with-text">
                        <a href="https://www.instagram.com/designers_workroom/" target="_blank" rel="noopener noreferrer" className="icon-text"><FontAwesomeIcon icon={faInstagram} className="social-icon" /></a>
                    </div>
                </div>

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
