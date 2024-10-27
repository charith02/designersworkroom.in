// src/pages/ProjectDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import projectData from '../data/projectData';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData.find(p => p.id === parseInt(projectId));
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const navigate = useNavigate();

  if (!project) {
    return <div>Project not found!</div>;
  }

  const openGallery = (index) => {
    setGalleryIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextPhoto = () => {
    setGalleryIndex((prevIndex) => (prevIndex + 1) % project.photos.length);
  };

  const prevPhoto = () => {
    setGalleryIndex((prevIndex) => (prevIndex === 0 ? project.photos.length - 1 : prevIndex - 1));
  };

  const handleGalleryClick = (e) => {
    e.stopPropagation();
    const clickX = e.clientX;
    const imageWidth = e.target.clientWidth;
    if (clickX < imageWidth / 2) {
      prevPhoto();
    } else {
      nextPhoto();
    }
  };

  const handleKeyDown = (e) => {
    if (isGalleryOpen) {
      if (e.key === 'ArrowRight') {
        nextPhoto();
      } else if (e.key === 'ArrowLeft') {
        prevPhoto();
      } else if (e.key === 'Escape') {
        closeGallery();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGalleryOpen]);

  return (
    <div className="project-details-page">
      <header className="slideshow-container">
        <div className="logo-container">
          <Link to="/"><img src="/assets/logo.png" alt="Logo" className="logo" /></Link>
        </div>

        <div className="slides">
          <img src={project.photos[0]} alt="Project Slide" />
        </div>

        <div className="social-media">
          <div className="icon-with-text">
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
            <a href="https://wa.me/+919718858337" target="_blank" rel="noopener noreferrer" className="icon-text">+919718858337</a>
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

        <div className="nav-links">
          <ul>
            <li><Link to="/office">Office</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>
      </header>

      <div className="project-section">
        <div className="project-container">
          <div className="project-name">
          <h2>{project.title}</h2>
          <p>{project.description1} - {project.description2}</p>
          </div>
          <div className="project-photos masonry-grid">
            {project.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                className="project-photo"
                onClick={() => openGallery(index)}
                loading="lazy"
              />
            ))}
          </div>
        </div>
        <div className="navigation-buttons">
        <Link to="/" className="btn-left">
          <span className="symbols">←</span> Home
        </Link>
        <button
          className="btn-right"
          onClick={() => navigate(`/projects/${(parseInt(projectId) % projectData.length) + 1}`)}
        >
          Next project <span className='symbols'>-</span> {projectData[(parseInt(projectId) % projectData.length)].title} <span className="symbols">→</span>
        </button>
      </div>
      </div>

      

      {isGalleryOpen && (
        <div className="gallery-modal" onClick={closeGallery}>
          <img
            src={project.photos[galleryIndex]}
            alt="Gallery"
            className="gallery-image"
            onClick={handleGalleryClick}
          />
          <span className="close-gallery" onClick={closeGallery}>&times;</span>
        </div>
      )}

    </div>
  );
};

export default ProjectDetails;