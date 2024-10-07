import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Work.css';

const Work = () => {
  const photos = [
    { id: 1, src: '/assets/image1.jpg', title: 'Photo Title 1'},
    { id: 2, src: '/assets/image2.jpg', title: 'Photo Title 2'},
    { id: 3, src: '/assets/image3.jpg', title: 'Photo Title 3' },
    { id: 4, src: '/assets/image4.jpg', title: 'Photo Title 4'},
    { id: 5, src: '/assets/image5.jpg', title: 'Photo Title 5'},
    { id: 6, src: '/assets/image6.jpg', title: 'Photo Title 6'},
  ];

  return (
    <div className="work-page">
      <Navbar />
      <div className="work-container">
        <div className="grid">
          {photos.map((photo) => (
            <div key={photo.id} className="grid-item">
              <img src={photo.src} alt={photo.title} className="photo" />
              <div className="photo-info">
                <h4>{photo.title}</h4>
                <p>{photo.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;