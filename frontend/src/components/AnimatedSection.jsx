import React from 'react';
import './AS.css';
import dataLow from '../data/dataLow';
import { Link } from 'react-router-dom';

const AnimatedSection = () => {
  return (
    <section className="animated-section">
      <div className="introsection">
        <div className="intro">
        <p>
          Designers Workroom represents a budding ambitious studio specializing in Design & Research. As a team of designers & artisans, our backgrounds command a diverse experience in Commercial, Industrial, and Luxury Residential Projects.
        </p>
        <p>
          As a studio, we pride ourselves on channelling equally meticulous attention to the smallest detail as much as to the whole spatial experience. We strive to create refined, timeless spaces and objects, with an understated worldly eclecticism.
        </p>
        </div>
      </div>

      <div className="project">
        <h1>Projects</h1>
      </div>

      {dataLow.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <div className={`card card${project.id}`}>
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description1}</p>
              <p>{project.description2}</p>
              <span className="see-full-project">View Full Project ↗</span>
            </div>

            <div className="gallery">
              {project.photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Project ${project.id} - Image ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default AnimatedSection;
