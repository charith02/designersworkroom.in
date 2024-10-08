import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Office.css'; // Assuming you have a separate CSS file for styling
import ReCAPTCHA from "react-google-recaptcha"; // Add a ReCAPTCHA library

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
  const [showDialog, setShowDialog] = useState(false); // State for dialog box visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    }
  };

  const handleDialogOpen = () => {
    setShowDialog(true);
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  const onCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <div className="office-page">
      <Navbar />

      {/* First Section - Form and Image */}
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
            <div className="line"></div>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <div className="line"></div>

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
            />
            <div className="line"></div>

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
            />
            <div className="line"></div>

            <ReCAPTCHA
              sitekey="your-site-key" // replace with your actual ReCAPTCHA site key
              onChange={onCaptchaChange}
            />

            <button type="submit" className="submit-btn" disabled={loading}>SUBMIT</button>
          </form>
        </div>

        <div className="image-container">
          <img src="/assets/image1.jpg" alt="Office" />
        </div>
      </div>

      {/* Third Section - Location with Google Maps */}
      <div className="section-map">
        <h2>Our Location</h2>
        <iframe
          title="Google Map"
          src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=28.543544638324946,77.25018130001388`}
          allowFullScreen
        ></iframe>
      </div>

      {/* Fourth Section - Work with Us */}
      <div className="section-work">
        <button className="work-btn" onClick={handleDialogOpen}>WORK WITH US</button>
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

      <Footer />
    </div>
  );
};

export default Office;
