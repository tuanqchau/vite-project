import vn from "../assets/vn/dn (2).jpg";
import ny from "../assets/img/img5.jpg";
import wa from "../assets/img/img11.jpg";
import az from "../assets/img-small/img2-small.jpg";
import su25 from "../assets/summer25/WY-1.jpg";
import React, { useState } from "react";
import "../Styles/Gallery.css";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Gallery = () => {
  const navigate = useNavigate();
  const photosData = [
    { id: 2, src: vn, title: "Vietnam", date: "May 2024" },
    { id: 3, src: wa, title: "Washington", date: "July 2023" },
    { id: 1, src: ny, title: "New York City", date: "May 2022" }, 
    { id: 4, src: az, title: "Arizona", date: "January 2022"},
    { id: 5, src: su25, title: "Summer 2025", date: "August 2025" }
  ];

  const handlePhotoClick = (photo) => {
    navigate(`/view/${photo.id}`, { state: { photo } })
  }

  return (
    <div className="gallery-container">
      {/* <div className="gallery-header">
        <h1>Photo Gallery</h1>
        <p>Explore my journey through these captured moments from around the world</p>
      </div> */}
      <div className="gallery-grid">
        {photosData.map((photo, idx) => (
          <motion.div
            key={photo.id}
            className="gallery-front-container"
            onClick={() => handlePhotoClick(photo)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: 'easeOut' }}
          >
            <img
              src={photo.src}
              alt={`Photo ${photo.id}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
