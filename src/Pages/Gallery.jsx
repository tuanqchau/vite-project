import vn from "../assets/vn/dn (2).jpg";
import ny from "../assets/img/img5.jpg";
import wa from "../assets/img/img11.jpg";
import az from "../assets/img-small/img2-small.jpg";
import React, { useState, useContext } from "react";
import "../Styles/Gallery.css";
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const [hoveredPhotoId, setHoveredPhotoId] = useState(null);
  const navigate = useNavigate();
  const photosData = [
    { id: 2, src: vn, title: "Vietnam", date: "May 2024" },
    { id: 3, src: wa, title: "Washington", date: "July 2023" },
    { id: 1, src: ny, title: "New York City", date: "May 2022" }, 
    { id: 4, src: az, title: "Arizona", date: "January 2022"}
  ];

  const handlePhotoHover = (photoId) => {
    setHoveredPhotoId(photoId);
  };

  const handlePhotoMouseLeave = () => {
    setHoveredPhotoId(null);
  };

  const handlePhotoClick = (photo) => {
    //event.stopPropagation()
    navigate(`/view/${photo.id}`, { state: { photo } })
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {photosData.map((photo) => (
        <div
          key={photo.id}
          className="gallery-front-container"
          style={{ width: "60vw", marginBottom: "20px", position: "relative" }}
          
        >
          <img
            className="darker"
            src={photo.src}
            style={{ width: "100%", height: "auto" }}
            alt={`Photo ${photo.id}`}
            onClick={() => handlePhotoClick(photo)}
            onMouseEnter={() => handlePhotoHover(photo.id)}
            onMouseLeave={handlePhotoMouseLeave}            
          />

          {hoveredPhotoId === photo.id && (
            <div className="overlay">
              <p style={{ fontSize: "25px" }}>{photo.title}</p>
              <p>{photo.date}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
