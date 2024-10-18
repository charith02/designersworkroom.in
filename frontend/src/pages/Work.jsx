import React from 'react'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Work.css';

const Work = () => {
  const photos = [
    { id: 1, src: '/assets/image1.jpg', title: 'Apartment 2602', description1: 'Completed in 2022', description2:'Cleo County, Noida' },
    { id: 2, src: '/assets/image2.jpg', title: 'Sigma Chambers', description1: 'Completed in 2022', description2:'Jangpura Extn., New Delhi' },
    { id: 3, src: '/assets/image3.jpg', title: 'Cleo XXV', description1: 'Completed in 2022', description2:'Cleo County, Noida' },
    { id: 4, src: '/assets/image4.webp', title: 'Ivory 31', description1: 'Completed in 2023', description2:'Rohtak Haryana' },
    { id: 5, src: '/assets/image5.webp', title: 'Residence 1069', description1: 'Completed in 2024', description2:'Rohtak Haryana' },
    { id: 6, src: '/assets/image6.jpg', title: 'House of Red & Blues', description1: 'Completed in 2022', description2:'Vasundhra Enclave' },
  ];

  return (
    <div className="work-page">
      <Navbar />
      <div className="work-container">
        <div className="grid_">
          {photos.map((photo) => (
            <div key={photo.id} className="grid-item">
              <div className="image-container">
                <img src={photo.src} alt={photo.title} className="photo" />
                <div className="photo-info">
                  <h4>{photo.title}</h4>
                  <p>{photo.description1}</p>
                  <p>{photo.description2}</p>
                </div>
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