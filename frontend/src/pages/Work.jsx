// src/pages/Work.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../data/projectData';
import './Work.css';

const Work = () => {
  return (
    <div className="work-page">
      <div className="work-container">
        <div className="grid_">
          {projectData.map((project) => (
            <div key={project.id} className="grid-item">
              <div className="image-container">
                <img src={project.photos[0]} alt={project.title} className="photo" />
                <div className="photo-info">
                  <h4>{project.title}</h4>
                  <p>{project.description1}</p>
                  <p>{project.description2}</p>
                  
                  {/* Link to the specific project details page */}
                  <Link to={`/project/${project.id}`} className="project-link">View Project</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p>jnkjn</p>
    </div>
  );
};

export default Work;
