import React, { useEffect, useState } from 'react';
import './AnimatedSection.css';

const AnimatedSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('section');
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="section" className={`animated-section ${animate ? 'visible' : ''}`}>
      <div id="intro">
        <p>Designers Workroom represents a budding ambitious studio specializing in Design & Research. As a team of designers & artisans, our backgrounds command a diverse experience in Commercial, Industrial, and Luxury Residential Projects. Post a rigorous indulgence of learning & practising previously with several distinguished & reputable design studios, we have conceived Designers Workroom to contribute more meaning to the upcoming civilisation of design.</p>
        <p>As a studio, we pride ourselves on channelling equally meticulous attention to the smallest detail as much as to the whole spatial experience. We strive to create refined, timeless spaces and objects, with an understated worldly eclecticism. With a contemporary yet nostalgic approach, we aim to focus on layered detailing & careful curation of everything that defines design.</p>
      </div>

      <div className="grid">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="grid-item">
            <img src={`/src/assets/image${index + 1}.jpg`} alt={`Grid item ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedSection;
