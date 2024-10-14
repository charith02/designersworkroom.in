import React from 'react';
import { Phone, Facebook, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Icons Section */}
        <div className="footer-icons">
          <a href="https://www.facebook.com/designersworkroompvtltd/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <Facebook className="icon" />
          </a>
          <a href="https://wa.me/+919718858337" target="_blank" rel="noopener noreferrer" className="icon-link">
            <Phone className="icon" />
          </a>
          <a href="https://www.instagram.com/designers_workroom/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <Instagram className="icon" />
          </a>
        </div>

        {/* Copyright Section */}
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Designers Workroom Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
