import React, { useState, useContext } from 'react';
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
import img16 from '../assets/img/img16.jpg'; 
import img17 from '../assets/img/img17.jpg'; 
import img18 from '../assets/img/img18.jpg'; 

import img1small from '../assets/img-small/img1-small.jpg'
import img2small from '../assets/img-small/img2-small.jpg'
import img3small from '../assets/img-small/img3-small.jpg'
import img4small from '../assets/img-small/img4-small.jpg'
import img5small from '../assets/img-small/img5-small.jpg'
import img6small from '../assets/img-small/img6-small.jpg'
import img7small from '../assets/img-small/img7-small.jpg'
import img8small from '../assets/img-small/img8-small.jpg'
import img9small from '../assets/img-small/img9-small.jpg'
import img10small from '../assets/img-small/img10-small.jpg'
import img11small from '../assets/img-small/img11-small.jpg'
import img12small from '../assets/img-small/img12-small.jpg'
import img13small from '../assets/img-small/img13-small.jpg'
import img14small from '../assets/img-small/img14-small.jpg'
import img15small from '../assets/img-small/img15-small.jpg'
import img16small from '../assets/img-small/img16-small.jpg'
import img17small from '../assets/img-small/img17-small.jpg'
import img18small from '../assets/img-small/img18-small.jpg'

import '../Styles/Photos.css'
import { motion } from "framer-motion"

//import { CursorContext } from '../context/CursorContext';
const Photos = () => {
  //const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);

  const photosData = [
  
    { id: 11, src: img11small, fullSize: img11 },
    { id: 12, src: img12small, fullSize: img12 },
    { id: 13, src: img13small, fullSize: img13 },
    { id: 14, src: img14small, fullSize: img14 },
    { id: 15, src: img15small, fullSize: img15 },
    { id: 16, src: img16small, fullSize: img16 },
    { id: 2, src: img2small, fullSize: img2 },
    { id: 3, src: img3small, fullSize: img3 },
    { id: 4, src: img4small, fullSize: img4 },
    { id: 5, src: img5small, fullSize: img5 },
    { id: 6, src: img6small, fullSize: img6 },
    { id: 7, src: img7small, fullSize: img7 },
    { id: 8, src: img8small, fullSize: img8 },
    { id: 9, src: img9small, fullSize: img9 },
    { id: 10, src: img10small, fullSize: img10 },
    { id: 17, src: img17small, fullSize: img17 },
    { id: 18, src: img18small, fullSize: img18 },
    { id: 1, src: img1small, fullSize: img1 },
    
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
    <div className='gallery-container'>
      <div className='album-titles'>
        <p className='title-album'>All</p>
        <p className='title-album'>Vietnam</p>
      </div>

      
    <div className='photo-grid-container'>
      
      <div className="photo-grid">
            {photosData.map((photo) => (
              <div key={photo.id} className="photo" onClick={() => handlePhotoClick(photo)}>
                <motion.img 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity:0}}
                transition={{ duration: 1 }}
                loading='lazy' className='photo-item' src={photo.src} alt={`Photo ${photo.id}`} 
                //onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
                />
              </div>
            ))}
      </div>

        {selectedPhoto && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal">
            <motion.img 
            //onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity:0}}
                  transition={{ duration: 1 }} src={selectedPhoto.fullSize} alt={`Full-size Photo ${selectedPhoto.id}`} />
            </div>
          </div>
        )}
      </div>
    </div>
    
    
        
        
  );
}


export default Photos;
