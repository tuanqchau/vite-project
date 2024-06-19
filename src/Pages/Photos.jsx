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

import cr from "../assets/vn/cr.jpg";
import cr2 from "../assets/vn/cr \(2\).jpg";
import cr3 from "../assets/vn/cr \(3\).jpg";

import dn from "../assets/vn/dn.jpg"
import dn2 from "../assets/vn/dn \(2\).jpg"
import dn3 from "../assets/vn/dn \(3\).jpg"

import ha from "../assets/vn/ha.jpg";
import ha2 from "../assets/vn/ha \(2\).jpg";
import ha3 from "../assets/vn/ha \(3\).jpg";
import ha4 from "../assets/vn/ha \(4\).jpg";
import ha5 from "../assets/vn/ha \(5\).jpg";
import ha6 from "../assets/vn/ha \(6\).jpg";
import ha7 from "../assets/vn/ha \(7\).jpg";
import ha8 from "../assets/vn/ha \(8\).jpg";
import ha9 from "../assets/vn/ha \(9\).jpg";
import ha10 from "../assets/vn/ha \(10\).jpg";

import hg from "../assets/vn/hg.jpg";
import hg2 from "../assets/vn/hg \(2\).jpg";
import hg3 from "../assets/vn/hg \(3\).jpg";
import hg4 from "../assets/vn/hg \(4\).jpg";
import hg5 from "../assets/vn/hg \(5\).jpg";
import hg6 from "../assets/vn/hg \(6\).jpg";
import hg7 from "../assets/vn/hg \(7\).jpg";
import hg8 from "../assets/vn/hg \(8\).jpg";
import hg9 from "../assets/vn/hg \(9\).jpg";
import hg10 from "../assets/vn/hg \(10\).jpg";
import hg11 from "../assets/vn/hg \(11\).jpg";
import hg12 from "../assets/vn/hg \(12\).jpg";
import hg13 from "../assets/vn/hg \(13\).jpg";
import hg14 from "../assets/vn/hg \(14\).jpg";
import hg15 from "../assets/vn/hg \(15\).jpg";
import hg16 from "../assets/vn/hg \(16\).jpg";
import hg17 from "../assets/vn/hg \(17\).jpg";
import hg18 from "../assets/vn/hg \(18\).jpg";
import hg19 from "../assets/vn/hg \(19\).jpg";
import hg20 from "../assets/vn/hg \(20\).jpg";
import hg21 from "../assets/vn/hg \(21\).jpg";
import hg22 from "../assets/vn/hg \(22\).jpg";
import hg23 from "../assets/vn/hg \(23\).jpg";
import hg24 from "../assets/vn/hg \(24\).jpg";
import hg25 from "../assets/vn/hg \(25\).jpg";
import hg26 from "../assets/vn/hg \(26\).jpg";
import hg27 from "../assets/vn/hg \(27\).jpg";
import hg28 from "../assets/vn/hg \(28\).jpg";
import hg29 from "../assets/vn/hg \(29\).jpg";
import hg30 from "../assets/vn/hg \(30\).jpg";
import hg31 from "../assets/vn/hg \(31\).jpg";

import hl from "../assets/vn/hl.jpg";
import hl2 from "../assets/vn/hl \(2\).jpg";
import hl3 from "../assets/vn/hl \(3\).jpg";
import hl4 from "../assets/vn/hl \(4\).jpg";
import hl5 from "../assets/vn/hl \(5\).jpg";
import hl6 from "../assets/vn/hl \(6\).jpg";
import hl7 from "../assets/vn/hl \(7\).jpg";
import hl8 from "../assets/vn/hl \(8\).jpg";
import hl9 from "../assets/vn/hl \(9\).jpg";

import hn from "../assets/vn/hn.jpg";
import hn2 from "../assets/vn/hn \(2\).jpg";
import hn3 from "../assets/vn/hn \(3\).jpg";
import hn4 from "../assets/vn/hn \(4\).jpg";
import hn5 from "../assets/vn/hn \(5\).jpg";
import hn6 from "../assets/vn/hn \(6\).jpg";
import hn7 from "../assets/vn/hn \(7\).jpg";
import hn8 from "../assets/vn/hn \(8\).jpg";
import hn9 from "../assets/vn/hn \(9\).jpg";
import hn10 from "../assets/vn/hn \(10\).jpg";
import hn11 from "../assets/vn/hn \(11\).jpg";
import hn12 from "../assets/vn/hn \(12\).jpg";
import hn13 from "../assets/vn/hn \(13\).jpg";
import hn14 from "../assets/vn/hn \(14\).jpg";
import hn15 from "../assets/vn/hn \(15\).jpg";
import hn16 from "../assets/vn/hn \(16\).jpg";
import hn17 from "../assets/vn/hn \(17\).jpg";
import hn18 from "../assets/vn/hn \(18\).jpg";
import hn19 from "../assets/vn/hn \(19\).jpg";
import hn20 from "../assets/vn/hn \(20\).jpg";
import hn21 from "../assets/vn/hn \(21\).jpg";
import hn22 from "../assets/vn/hn \(22\).jpg";
import hn23 from "../assets/vn/hn \(23\).jpg";

import nb from "../assets/vn/nb.jpg";
import nb2 from "../assets/vn/nb \(2\).jpg";
import nb3 from "../assets/vn/nb \(3\).jpg";
import nb4 from "../assets/vn/nb \(4\).jpg";
import nb5 from "../assets/vn/nb \(5\).jpg";
import nb6 from "../assets/vn/nb \(6\).jpg";
import nb7 from "../assets/vn/nb \(7\).jpg";
import nb8 from "../assets/vn/nb \(8\).jpg";
  

import sg from "../assets/vn/sg.jpg";
import sg2 from "../assets/vn/sg \(2\).jpg";
import sg3 from "../assets/vn/sg \(3\).jpg";
import sg4 from "../assets/vn/sg \(4\).jpg";
import sg5 from "../assets/vn/sg \(5\).jpg";
import sg6 from "../assets/vn/sg \(6\).jpg";
import sg7 from "../assets/vn/sg \(7\).jpg";
import sg8 from "../assets/vn/sg \(8\).jpg";
import sg9 from "../assets/vn/sg \(9\).jpg";
import sg10 from "../assets/vn/sg \(10\).jpg";
import sg11 from "../assets/vn/sg \(11\).jpg";

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

  const vietnamPhotos = [
    { id: 1, src: sg4, fullSize: sg4 },
    { id: 2, src: sg7, fullSize: sg7 },
    { id: 3, src: sg9, fullSize: sg9 },
    { id: 4, src: sg10, fullSize: sg10 },
    { id: 5, src: sg8, fullSize: sg8 },
    { id: 6, src: sg11, fullSize: sg11 },
    // { id: 7, src: img7small, fullSize: img7 },
    // { id: 8, src: img8small, fullSize: img8 },
    // { id: 9, src: img9small, fullSize: img9 },
    // { id: 10, src: img10small, fullSize: img10 },
    // { id: 11, src: img11small, fullSize: img11 },
    // { id: 12, src: img12small, fullSize: img12 },
    // { id: 13, src: img13small, fullSize: img13 },
    // { id: 14, src: img14small, fullSize: img14 },
  ];
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [arrayOfPhotos, setSelectedArray] = useState(photosData);

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

  const handleAlbumSelected = (e) => {
    console.log(e.target.textContent)
    if (e.target.textContent === 'All') {
      setSelectedArray(photosData);
    } else if (e.target.textContent === 'Vietnam') {
      setSelectedArray(vietnamPhotos);
    }
  }

  return (
    <div className='gallery-container'>
      <div className='album-titles'>
        <p className='title-album' onClick={handleAlbumSelected}>All</p>
        <p className='title-album' onClick={handleAlbumSelected}>Vietnam</p>
      </div>

      
    <div className='photo-grid-container'>
      
      <div className="photo-grid">
            {arrayOfPhotos.map((photo) => (
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
