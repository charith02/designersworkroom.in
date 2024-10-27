import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Office.css';
import ReCAPTCHA from "react-google-recaptcha";

const Office = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false); // New state for CAPTCHA verification
  const [showDialog, setShowDialog] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert('Please complete the CAPTCHA');
      return;
    }

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://designersworkroom-in.onrender.com/api/queries/submit-query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Failed to send message.');
      }
    } catch (error) {
      setErrorMessage('Error submitting the form.');
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
      setCaptchaVerified(false); // Reset CAPTCHA state after submission
    }
  };

  const handleDialogOpen = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const onCaptchaChange = (value) => {
    setCaptchaVerified(!!value); // Set captchaVerified to true if value exists
  };

  return (
    <div className="office-page">
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
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
            <a href="https://wa.me/+919718858337" target="_blank" rel="noopener noreferrer" className="icon-text">+91 9718858337</a>
          </div>
          <div className="icon-with-text">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            <a href="https://www.facebook.com/designersworkroompvtltd/" target="_blank" rel="noopener noreferrer" className="icon-text">designersworkroompvtltd</a>
          </div>
          <div className="icon-with-text">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <a href="https://www.instagram.com/designers_workroom/" target="_blank" rel="noopener noreferrer" className="icon-text">designers_workroom</a>
          </div>
        </div>

        {/* Quadrant 1: Navigation Links */}
        <div className="nav-links">
          <ul>
            <li><Link to="/office">Office</Link></li>
            {/* <li><Link to="/aboutUs">About</Link></li> */}
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>
      </header>

      {/* First Section - Centered Form */}
      <div className="office-details">
        <div className="section-one">
          <div className="form-container">
            <h1>SAY HELLO!</h1>

            {loading && <p>Sending message...</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />

              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
              />

              <ReCAPTCHA
                sitekey="6LcxpVsqAAAAANl-rxfNyg7d2hqNNcYWA04kIyHq"
                onChange={onCaptchaChange}
              />

              <button type="submit" className="submit-btn" disabled={loading}>SUBMIT</button>
            </form>
          </div>
        </div>

        {/* Third Section - Location with Google Maps */}
        <div className="section-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14019.59883146922!2d77.2501813!3d28.5427341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb25a047b2c3%3A0x3fd7fe8e81ff5e4!2sDesigners%20Workroom%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1729944017033!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* Fourth Section - Work with Us */}
        <div className="section-work">
          <button className="work-btn" onClick={handleDialogOpen}>Work with Us</button>
        </div>

        {showDialog && (
          <div className="dialog-box">
            <div className="dialog-content">
            <span className="close-btn" onClick={handleDialogClose}>&times;</span>
            <h1>WORK WITH US</h1>
            <p>We are always looking for talented Designers, Media Executives and Supervisors to join our team. We do not accept Interns for semesters less than 4 months and Fresh Graduates for less than 1 year.
            </p>
            <br></br>
            <p>All applicants must have a good level of spoken and written English and be proficient in the required software. Applications including a portfolio and a resume in PDF format (no larger than 8 Mb) can be submitted to: hello@designersworkroom.in with the subject line Job.</p>
            <br></br>
            <p>
            Please note that we are currently receiving a large number of applications and therefore cannot guarantee an answer to each applicant. We review all applications and store relevant application for a maximum period of 6 months after which they are deleted. We do not review material submitted via Issuu, Behance, Google Drive or in any packaged file format - only application in .pdf format will be processed.</p>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Office;
