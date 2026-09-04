import React, {useState, useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams, useLocation } from "react-router-dom";

//import photos:
//Washington
import wa from '../assets/img-small/img12-small.jpg'
import wa2 from '../assets/img-small/img13-small.jpg'
import wa3 from '../assets/img-small/img14-small.jpg'
import wa4 from '../assets/img-small/img15-small.jpg'
import wa5 from '../assets/img-small/img16-small.jpg'

//vn
import hn4 from "../assets/vn/hn \(4\).jpg";
import hn5 from "../assets/vn/hn \(5\).jpg";
import hn7 from "../assets/vn/hn \(7\).jpg";
import hn9 from "../assets/vn/hn \(9\).jpg";
import hn10 from "../assets/vn/hn \(10\).jpg";
import hn13 from "../assets/vn/hn \(13\).jpg";
import hn18 from "../assets/vn/hn \(18\).jpg";
import hn21 from "../assets/vn/hn \(21\).jpg";
import dn2 from "../assets/vn/dn \(2\).jpg"
import hg2 from "../assets/vn/hg \(2\).jpg";
import hg11 from "../assets/vn/hg \(11\).jpg";
import nb5 from "../assets/vn/nb \(5\).jpg";

//nyc
import nyc from '../assets/img-small/img5-small.jpg'
import nyc2 from '../assets/img-small/img6-small.jpg'
import nyc3 from '../assets/img-small/img7-small.jpg'
import nyc4 from '../assets/img-small/img8-small.jpg'


//az
import az from '../assets/img-small/img2-small.jpg'
import az2 from '../assets/img-small/img3-small.jpg'
import az3 from '../assets/img-small/img4-small.jpg'

//summer25
import wy1 from  "../assets/summer25/WY-1.jpg";
import wy2 from  "../assets/summer25/WY-2.jpg";
import wy3 from  "../assets/summer25/WY-3.jpg";
import wy4 from  "../assets/summer25/WY-4.jpg";
import mt1 from  "../assets/summer25/MT-1.jpg";
import mt2 from  "../assets/summer25/MT-2.jpg";
import mt3 from  "../assets/summer25/MT-3.jpg";
import mt4 from  "../assets/summer25/MT-4.jpg";
const ImageView = ({imageData}) => {
  const { id } = useParams();
  const location = useLocation();
  const photo = location.state?.photo || photosData.find(photo => photo.id === Number(id));
  const [photosList, setPhotoList] = useState([])

  const vnPhotos = [
    { id: 1, src: hn4},
    { id: 2, src: hn5},
    { id: 3, src: hn7},
    { id: 4, src: hn9},
    { id: 5, src: hn10},
    { id: 6, src: hn13},
    { id: 7, src: hn18},
    { id: 8, src: hn21},
    { id: 9, src: dn2},
    { id: 10, src: hg2},
    { id: 11, src: hg11},
    { id: 12, src: nb5},
  ]

  const washingtonPhotos = [
    { id: 1, src: wa },
    { id: 2, src: wa2 },
    { id: 3, src: wa3 },
    { id: 4, src: wa4 },
    { id: 5, src: wa5 },
  ]

  const nycPhotos = [
    { id: 1, src: nyc },
    { id: 2, src: nyc2 },
    { id: 3, src: nyc3 },
    { id: 4, src: nyc4 },
  ]
  
  const azPhotos = [
    { id: 1, src: az },
    { id: 2, src: az2 },
    { id: 3, src: az3 }
  ]

  const summer25Photos = [
    { id: 1, src: wy1 },
    { id: 2, src: wy2 },
    { id: 3, src: wy3 },
    { id: 4, src: wy4 },
    { id: 5, src: mt1 },
    { id: 6, src: mt2 },
    { id: 7, src: mt3 },
    { id: 8, src: mt4 }
  ]


  useEffect(() => {
    if (photo.title==='Vietnam') {
      setPhotoList(vnPhotos)
    }
    else if (photo.title==='Washington') {
      setPhotoList(washingtonPhotos)
    }
    else if (photo.title==='New York City') {
      setPhotoList(nycPhotos)
    }
    else if (photo.title==='Arizona') {
      setPhotoList(azPhotos)
    }
    else if (photo.title==='Summer 2025') {
      setPhotoList(summer25Photos)
    }
  },[])
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "60vw",
          margin: "0 auto", // Center horizontally
          minHeight: "100vh", // Center vertically
          
        }}
      >
          {/* {photo ? (
            <>
              <h1>{photo.title}</h1>
              <p>{photo.date}</p>
              <img src={photo.src} alt={photo.title} />
            </>
          ) : (
            <p>No photo data available</p>
          )} */}
          {photosList.map((eachPhoto) =>(
            <img src={eachPhoto.src} alt={`Photo ${photo.id}`}
             style={{marginBottom: "50px", maxWidth: "70%", height: "auto" }}
             key={eachPhoto.id}/>
          ))}
      </div>
    )
}

export default ImageView;