// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import './Work.css';

// const Work = () => {
//   const photos = [
//     { id: 1,  title: 'Cup of glitchcake', author: 'Danny Walberg' },
//     { id: 2,  title: 'The music of the citycenter', author: 'James Brown' },
//     { id: 3,  title: 'Photo Title 3', author: 'Author 3' },
//     { id: 4, src: '/src/assets/image4.jpg', title: 'Photo Title 4', author: 'Author 4' },
//     { id: 5, src: '/src/assets/image5.jpg', title: 'Photo Title 5', author: 'Author 5' },
//     { id: 6, src: '/src/assets/image6.jpg', title: 'Photo Title 6', author: 'Author 6' },
//   ];

//   return (
//     <div className="work-container">
//       <Navbar />
//       <div className="container">
//         <div className="photo-gallery">
//           <div className="column">
//             <div className="photo">
//               <img src='/src/assets/image1.jpg' alt="" />
//             </div>
//             <div className="photo">
//               <img src='/src/assets/image2.jpg' alt="" />
//             </div>
//             <div className="photo">
//               <img src='/src/assets/image3.jpg' alt="" />
//             </div>
//           </div>
//           <div className="column">
//             <div className="photo">
//               <img src='/src/assets/image4.jpg' alt="" />
//             </div>
//             <div className="photo">
//               <img src='/src/assets/image5.jpg' alt="" />
//             </div>
//             <div className="photo">
//               <img src='/src/assets/image6.jpg' alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
    
//   );
// };

// export default Work;
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Work.css';

const Work = () => {
  const photos = [
    { id: 1, src: '/src/assets/image1.jpg', title: 'Photo Title 1'},
    { id: 2, src: '/src/assets/image2.jpg', title: 'Photo Title 2'},
    { id: 3, src: '/src/assets/image3.jpg', title: 'Photo Title 3' },
    { id: 4, src: '/src/assets/image4.jpg', title: 'Photo Title 4'},
    { id: 5, src: '/src/assets/image5.jpg', title: 'Photo Title 5'},
    { id: 6, src: '/src/assets/image6.jpg', title: 'Photo Title 6'},
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