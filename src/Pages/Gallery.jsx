    import ha from "../assets/vn/ha.jpg";
    import ny from "../assets/img/img8.jpg";
    import React, { useState, useContext } from 'react';
    import '../Styles/Gallery.css';
    const Gallery = () => {
        const [hoveredPhotoId, setHoveredPhotoId] = useState(null);

        const photosData = [
            {id: 1, src: ny, title: "New York City", date: "June 2022"},
            {id: 2, src: ha, title: "Vietnam", date: "May 2024"}
        ];



        const handlePhotoHover = (photoId) => {
            setHoveredPhotoId(photoId);
        };
    
        const handlePhotoMouseLeave = () => {
            setHoveredPhotoId(null);
        };

        return (
        <div style={{ display: "flex", flexDirection:"column",justifyContent: "center", alignItems: "center" }}>
            {photosData.map((photo) => (
                <div key={photo.id} className="gallery-front-container" style={{ width: "50vw", marginBottom: "20px", position: "relative" }}>
                    <img className="darker" src={photo.src} style={{ width: "100%", height: "auto" }} alt={`Photo ${photo.id}`} onMouseEnter={()=>handlePhotoHover(photo.id)} onMouseLeave={handlePhotoMouseLeave}/>
                    {hoveredPhotoId === photo.id && (
                        <div className="overlay">
                            <p>{photo.title}</p>
                            <p>{photo.date}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    }

    export default Gallery;