import React, { useState } from 'react';
import img1 from '../assets/img/img1.jpg'; 
import img2 from '../assets/img/img2.jpg'; 
import img3 from '../assets/img/img3.jpg'; 
import img4 from '../assets/img/img4.jpg'; 
import img5 from '../assets/img/img5.jpg'; 
import img6 from '../assets/img/img6.jpg'; 
import img7 from '../assets/img/img7.jpg'; 
import img8 from '../assets/img/img8.jpg'; 
import img9 from '../assets/img/img9.jpg'; 
import img10 from '../assets/img/img10.jpg'; 
import img11 from '../assets/img/img11.jpg'; 
import img12 from '../assets/img/img12.jpg'; 
import img13 from '../assets/img/img13.jpg'; 
import img14 from '../assets/img/img14.jpg'; 
import img15 from '../assets/img/img15.jpg'; 

import '../Styles/Photos.css'
const Photos = () => {
  const photosData = [
  
    { id: 11, src: img11, fullSize: img11 },
    { id: 12, src: img12, fullSize: img12 },
    { id: 13, src: img13, fullSize: img13 },
    { id: 14, src: img14, fullSize: img14 },
    { id: 15, src: img15, fullSize: img15 },
    { id: 1, src: img1, fullSize: img1 },
    { id: 2, src: img2, fullSize: img2 },
    { id: 3, src: img3, fullSize: img3 },
    { id: 4, src: img4, fullSize: img4 },
    { id: 5, src: img5, fullSize: img5 },
    { id: 6, src: img6, fullSize: img6 },
    { id: 7, src: img7, fullSize: img7 },
    { id: 8, src: img8, fullSize: img8 },
    { id: 9, src: img9, fullSize: img9 },
    { id: 10, src: img10, fullSize: img10 },
    
    // Add more photos as needed
  ];
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    // Set the selected photo when clicked
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    // Close the modal by resetting selectedPhoto
    setSelectedPhoto(null);
  };

  const handleOverlayClick = (e) => {
    // Close the modal if the overlay (background) is clicked
    if (e.target.className === 'modal-overlay') {
      handleCloseModal();
    }
  };

  

  return (
    <div>
      
      <div className="photo-grid">
            {photosData.map((photo) => (
              <div key={photo.id} className="photo" onClick={() => handlePhotoClick(photo)}>
                <img loading='lazy' className='photo-item' src={photo.src} alt={`Photo ${photo.id}`} />
              </div>
            ))}
      </div>

      {selectedPhoto && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal">
            <img src={selectedPhoto.fullSize} alt={`Full-size Photo ${selectedPhoto.id}`} />
          </div>
        </div>
      )}
    </div>
    
        
        
  );
}


export default Photos;
