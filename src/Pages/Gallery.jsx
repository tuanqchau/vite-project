import vn from "../assets/vn/dn (2).jpg";
import ny from "../assets/img/img5.jpg";
import wa from "../assets/img/img11.jpg";
import az from "../assets/img-small/img2-small.jpg";
import az2 from "../assets/img-small/img3-small.jpg";
import su25 from "../assets/summer25/WY-1.jpg";
import wy2 from  "../assets/summer25/WY-2.jpg";
import wy3 from  "../assets/summer25/WY-3.jpg";
import wy4 from  "../assets/summer25/WY-4.jpg";
import mt1 from  "../assets/summer25/MT-1.jpg";
import mt2 from  "../assets/summer25/MT-2.jpg";
import mt3 from  "../assets/summer25/MT-3.jpg";
import mt4 from  "../assets/summer25/MT-4.jpg";
import wa2 from "../assets/img-small/img13-small.jpg";
import ny2 from "../assets/img-small/img7-small.jpg";
import ny3 from "../assets/img-small/img8-small.jpg";

import React, { useState, useEffect } from "react";
import "../Styles/Gallery.css";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence  } from 'framer-motion';
import Arrow from "../Components/Arrow";
import Masonry from "react-masonry-css";
import Footer from "../Components/Footer";
const Gallery = () => {

    // Define how many columns for different screen sizes
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };
  //const navigate = useNavigate();
  // const [isDarkMode, setIsDarkMode] = useState(
  //   // Initialize state from local storage or default to false (light mode)
  //   () => localStorage.getItem('theme') === 'dark' || false
  // );
  const photosData = [
    { id: 2, src: vn, title: "Vietnam", date: "May 2024" },
    { id: 3, src: wa, title: "Washington", date: "July 2023" },
    { id: 1, src: ny, title: "New York City", date: "May 2022" }, 
    //{ id: 4, src: az, title: "Arizona", date: "January 2022"},
    { id: 5, src: su25, title: "Summer 2025", date: "August 2025" },
    { id: 6, src: wy2, title: "Wyoming 2", date: "August 2025" },
    { id: 7, src: wy3, title: "Wyoming 3", date: "August 2025" },
    //{ id: 8, src: wy4, title: "Wyoming 4", date: "August 2025" },
    { id: 9, src: mt1, title: "Montana 1", date: "August 2025" },
    { id: 11, src: mt3, title: "Montana 3", date: "August 2025" },
    { id: 10, src: mt2, title: "Montana 2", date: "August 2025" },
    { id: 12, src: mt4, title: "Montana 4", date: "August 2025" },
    { id: 13, src: wa2, title: "Washington 2", date: "July 2023" },
    { id: 16, src: az2, title: "Arizona 2", date: "January 2022" },
    { id: 14, src: ny2, title: "New York City 2", date: "May 2022" },
    { id: 15, src: ny3, title: "New York City 3", date: "May 2022" },
    
  ];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(null); // null means no photo is open

  const openLightbox = (index) => {
    setCurrentPhotoIndex(index);
  };

  const closeLightbox = () => {
    setCurrentPhotoIndex(null);
  };

  const showPrev = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? photosData.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentPhotoIndex((prev) => (prev === photosData.length - 1 ? 0 : prev + 1));
  };
  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.body.classList.add('dark-mode');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //     localStorage.setItem('theme', 'light');
  //   }
  // }, [isDarkMode]);

  // // 👆 Toggle function
  // const toggleDarkMode = () => {
  //   setIsDarkMode(prevMode => !prevMode);
  // };

  // const handlePhotoClick = (photo) => {
  //   navigate(`/view/${photo.id}`, { state: { photo } })
  // }

  // return (
  //   <div className="gallery-container">   
      
  //     <div className="gallery-grid">
  //       {photosData.map((photo, idx) => (
  //         <motion.div
  //           key={photo.id}
  //           className="gallery-front-container"
  //           onClick={() => openLightbox(idx)}
  //           initial={{ opacity: 0, y: 40 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           viewport={{ amount: 0.3 }}
  //           transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
  //         >
  //           <img
  //             src={photo.src}
  //             alt={`Photo ${photo.id}`}
  //           />
  //         </motion.div>
  //       ))}
  //     </div>

  //     {/* Lightbox */}
  //     <AnimatePresence>
  //       {currentPhotoIndex !== null && (
  //         <motion.div
  //           className="lightbox-overlay"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //         >
  //           <motion.img
  //             key={photosData[currentPhotoIndex].id}
  //             src={photosData[currentPhotoIndex].src}
  //             alt={photosData[currentPhotoIndex].title}
  //             className="lightbox-image"
  //             initial={{ scale: 0.8 }}
  //             animate={{ scale: 1 }}
  //             exit={{ scale: 0.8 }}
  //             transition={{ duration: 0.3 }}
  //           />

  //           <span className="close-btn" onClick={closeLightbox}>
  //             ×
  //           </span>
  //           {/* <span className="prev-btn" onClick={showPrev}>
  //             ‹
  //           </span>
  //           <span className="next-btn" onClick={showNext}>
  //             ›
  //           </span> */}
  //           <Arrow direction="left" onClick={showPrev} />
  //           <Arrow direction="right" onClick={showNext} />
  //         </motion.div>
  //       )}
  //     </AnimatePresence>

  //   </div>
  // );
  return (
    <div className="gallery-container">
      {/* Masonry Layout */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="gallery-masonry"
        columnClassName="gallery-masonry-column"
      >
        {photosData.map((photo, idx) => (
          <motion.div
            key={photo.id}
            className="gallery-front-container"
            onClick={() => openLightbox(idx)}
            // initial={{ opacity: 1, y: 20 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ amount: 0.3 }}
            // transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
          >
            <img src={photo.src} alt={`Photo ${photo.id}`} />
          </motion.div>
        ))}
      </Masonry>

      {/* Lightbox */}
      <AnimatePresence>
        {currentPhotoIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              key={photosData[currentPhotoIndex].id}
              src={photosData[currentPhotoIndex].src}
              alt={photosData[currentPhotoIndex].title}
              className="lightbox-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <span className="close-btn" onClick={closeLightbox}>
              ×
            </span>
            <Arrow direction="left" onClick={showPrev} />
            <Arrow direction="right" onClick={showNext} />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
