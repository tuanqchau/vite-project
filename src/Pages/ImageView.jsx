import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageView = ({photosData}) => {
    return (
        <div className="photo-thumbnails-container">
        <ImageGallery
          items={photosData}
          showPlayButton={false}
          showIndex={true}
        />
      </div>
    )
}

export default ImageView;