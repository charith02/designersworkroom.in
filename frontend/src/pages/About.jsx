// src/components/About.jsx
import React from 'react';
import projects from '../data/project';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page">
            {/* Section 1 */}
            <div className="about-section">
                <div className="about-image">
                    <img 
                        src="/assets/about.webp" 
                        alt="Designers Workroom Example" 
                    />
                </div>
                <div className="about-text">
                    <p>
                        Designers Workroom is a Delhi-based design and research studio experimenting with spaces, materials, objects, and installations.<br /><br />
                        The team members combine diverse backgrounds of experience in Luxury Residential, Commercial, and Efficient Industrial designs. Gathering diverse experiences from all around the nation, the studio is passionate about design and solving problems in and around spaces.<br /><br />
                        The studio prides itself on a thorough understanding of both the smallest details and the greater spatial experience, striving to create refined, timeless spaces and objects with an understated worldly eclecticism. The studio has a contemporary yet nostalgic approach and focuses on layered detailing and careful curation.
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="centered-section">
                <div className="centered-logo">
                    <img 
                        src="/assets/about-logo.jpg" 
                        alt="Studio Logo Example" 
                    />
                </div>
                <p className="centered-text">
                    As a passionate architect and interior designer with nearly a decade of experience, I have had the privilege of contributing to a variety of large-scale projects, including collaborations with esteemed firms such as Yashoda Group, Shantanu Nikhil, and Jubilant Foods. These foundational experiences honed my skills and ignited my entrepreneurial spirit, leading me to establish my own design studio.<br /><br />
                    In my studio, I lead a talented team that excels in both residential and commercial projects of varying scales. Our approach seamlessly blends contemporary and classical design, ensuring each project is tailored to our client's unique visions. We pride ourselves on our expertise in construction management and quality supervision, leveraging the latest technologies to enhance the efficiency and effectiveness of building planning and execution.
                </p>
            </div>

            {/* Section 3 */}
            <div className="projects-section">
                <h2>Ongoing Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-tile">
                            {project}
                        </div>
                    ))}
                </div>
            </div>
            {/* Home Button */}
            <Link to="/" className="btn-left">
                <span className="symbols">←</span> Home
            </Link>
        </div>
    );
};

export default About;
