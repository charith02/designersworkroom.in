import React, { useState } from 'react';
import './AnimatedSection.css';
import dataLow from '../data/dataLow';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const faqData = [
  {
    question: "Role of An Architect and a Contractor",
    answer: "In a construction project, architects and contractors play complementary roles.<br /><br />Architects focus on design, planning, and ensuring the project aligns with the client’s vision. They create drawings, oversee documentation, coordinate with consultants, and conduct site visits to maintain design integrity.<br /><br />Contractors handle the practical aspects, managing the construction process, including scheduling, labor, materials, and costs. They ensure quality control, adherence to safety standards, and communicate with the architect to address any on-site issues.<br /><br />Together, architects provide the design vision, while contractors bring that vision to life through execution and management."
  },
  {
    question: "Is Green building a better future",
    answer: "Green buildings offer a sustainable future by minimizing environmental impact through energy and water conservation, improved indoor air quality, and waste reduction. They utilize efficient systems and renewable resources to lower energy use and greenhouse gas emissions. Additionally, green buildings often incorporate non-toxic materials and better ventilation, promoting health and productivity. Although the initial costs can be higher, long-term savings from reduced energy and water bills make them cost-effective over time. By enhancing both the environment and quality of life, green buildings are essential to creating a sustainable, resilient future."
  },
  {
    question: "Importance of Tradition and Culture in Architecture",
    answer: "Tradition and culture are vital in architecture as they connect buildings to their historical and social context, creating a sense of identity and belonging. Architecture that draws from local traditions and cultural practices reflects the values, climate, and resources of a region, making spaces feel authentic and rooted. Traditional designs and materials often promote sustainable practices, as they are adapted to local conditions and needs. Incorporating cultural elements also fosters continuity, preserving heritage while adapting to modern needs. Ultimately, culturally-informed architecture enriches communities, offering spaces that honor the past while inspiring future generations."
  },
  {
    question: "How can hiring an Architect help you save money",
    answer: "Hiring an architect can save you money through efficient design that maximizes space and minimizes waste, leading to lower material costs. Their expertise helps identify cost-effective solutions and sustainable practices, which reduce long-term expenses. Architects oversee project management, coordinating contractors to prevent costly delays and mistakes. Their knowledge of local building codes ensures compliance, avoiding fines and rework. By preventing design errors and facilitating realistic budgeting, architects help keep projects on track financially. Ultimately, a well-designed building often appreciates more in value, providing better returns on investment over time."
  },
  {
    question: "What all is provided by an Architect in a project",
    answer: "An architect provides a range of essential services throughout a project, including:<br /><br />1. Conceptual Design: Developing initial design ideas based on client needs.<br />2. Site Analysis: Assessing site conditions and zoning requirements.<br />3. Schematic and Design Development: Creating detailed drawings and specifications.<br />4. Construction Documents: Producing comprehensive documents for builders.<br />5. Project Management: Overseeing the project to ensure it stays on schedule and within budget.<br />6. Permitting and Approvals: Assisting with necessary regulatory approvals.<br />7. Construction Administration: Conducting site visits to ensure compliance with designs.<br /><br />These services ensure a project is functional, sustainable, and successfully executed."
  }
];



const AnimatedSection = () => {
  const [openFaq, setOpenFaq] = useState(Array(faqData.length).fill(false));
  const currentYear = new Date().getFullYear();

  const toggleFaq = (index) => {
    const updatedFaq = [...openFaq];
    updatedFaq[index] = !updatedFaq[index];
    setOpenFaq(updatedFaq);
  };

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

      <div className="faq-section">
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{item.question}</span>
                <button className="faq-toggle-button">{openFaq[index] ? '-' : '+'}</button>
              </div>
              {openFaq[index] && (
                <div
                  className="faq-answer"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
          <div className="footer-left">
            <a href="mailto:hello@designersworkroom.in">
              <FontAwesomeIcon icon={faEnvelope} className='icon'/>
            </a>
            <a href="https://wa.me/+919718858337" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} className='icon'/>
            </a>
            <a href="https://www.instagram.com/designers_workroom" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='icon'/>
            </a>
          </div>
          <div className="footer-right">
            <p>
              Copyright © {currentYear} | All rights reserved | All images and text are copyrighted unless otherwise specified.
            </p>
          </div>
        </div>

    </section>
  );
};

export default AnimatedSection;
