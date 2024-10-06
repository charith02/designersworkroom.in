import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-white py-8 border-t">
      <div className="max-w-7xl mx-auto px-4">
        <div className="footer-icons">
          <a href="https://maps.app.goo.gl/VnXpXd6JohTEQ68j6" target="_blank" rel="noopener noreferrer" className="icon-link">
            <MapPin className="icon" />
            <span>Location</span>
          </a>
          <a href="tel:+919718858337" className="icon-link">
            <Phone className="icon" />
            <span>Call Us</span>
          </a>
          <a href="mailto:hello@designersworkroom.in" className="icon-link">
            <Mail className="icon" />
            <span>Email</span>
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Designers Workroom Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
