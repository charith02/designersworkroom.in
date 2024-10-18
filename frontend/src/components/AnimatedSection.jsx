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

  // Define an array of objects where each item has the image number and format
  const images = [
    { id: 1, format: 'jpg' },
    { id: 2, format: 'jpg' },
    { id: 3, format: 'jpg' },
    { id: 4, format: 'webp' },
    { id: 5, format: 'webp' },
    { id: 6, format: 'jpg' },
    { id: 7, format: 'webp' },
    { id: 8, format: 'webp' },
    { id: 9, format: 'webp' },
  ];

  return (
    <section id="section" className={`animated-section ${animate ? 'visible' : ''}`}>
      <div id="intro">
        <p>
          Designers Workroom represents a budding ambitious studio specializing in Design & Research. As a team of
          designers & artisans, our backgrounds command a diverse experience in Commercial, Industrial, and Luxury
          Residential Projects. Post a rigorous indulgence of learning & practising previously with several distinguished
          & reputable design studios, we have conceived Designers Workroom to contribute more meaning to the upcoming
          civilisation of design.
        </p>
        <p>
          As a studio, we pride ourselves on channelling equally meticulous attention to the smallest detail as much as
          to the whole spatial experience. We strive to create refined, timeless spaces and objects, with an understated
          worldly eclecticism. With a contemporary yet nostalgic approach, we aim to focus on layered detailing & careful
          curation of everything that defines design.
        </p>
      </div>

      <div className="grid">
        {images.map((image) => (
          <div key={image.id} className="grid-item">
            <img
              src={`/assets/image${image.id}.${image.format}`} // Dynamically select the format
              alt={`Grid item ${image.id}`}
              loading="lazy" // This enables lazy loading for each image
              className="grid-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedSection;
