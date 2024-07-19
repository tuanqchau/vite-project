import React, { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams, useLocation } from "react-router-dom";

const ImageView = ({imageData}) => {
  const { id } = useParams();
  const location = useLocation();
  const photo = location.state?.photo || photosData.find(photo => photo.id === Number(id));

    
    // useEffect(() => {
    //   console.log(imageData.title);
    // })
    return (
      
      //   <div className="photo-thumbnails-container">
      //     {console.log(title)}
      //   <ImageGallery
      //     items={props.photosData}
      //     showPlayButton={false}
      //     showIndex={true}
      //   />
      // </div>

      <div>
      {photo ? (
        <>
          <h1>{photo.title}</h1>
          <p>{photo.date}</p>
          <img src={photo.src} alt={photo.title} />
        </>
      ) : (
        <p>No photo data available</p>
      )}
    </div>
    )
}

export default ImageView;