import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const headerHeight = document.querySelector('.slideshow-container').offsetHeight;
        if (window.scrollY >= headerHeight) {
          setIsNavFixed(true);
        } else {
          setIsNavFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className={`navbar ${isNavFixed ? 'fixed' : 'relative'}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-link">
          <img src="/src/assets/logo2.png" alt="Company Logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/office">Office</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
