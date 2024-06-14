import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../Styles/Map.css";

import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import hn from '../assets/vn/hn.jpg';
import hn2 from '../assets/vn/hn2.jpg';
import hn3 from '../assets/vn/hn3.jpg';

const Map = () => {
  const pos = [15.877993203699853, 108.32814843938998];
  const hnpos = [21.03408902244992, 105.8506367973026];
  const hgpos = []
  const hlpos = []
  const nbpos = []
  const dnpos = []
  const hapics = [];
  const hgpics = [];
  const hnpics = [
    {original: hn,
    thumbnail:hn},
    { original: hn2,
        thumbnail:hn2 },
    { original: hn3,
        thumbnail:hn3 },
  ];
  const sgpics = [];
  const dnpics = [];
  const nbpics = [];
  const hlpics = [];
  const [location, setLocation] = useState("");

  const handleHoiAnClick = (e) => {
    console.log("marker clicked");
    setLocation("Hoi An")
    console.log(location);  
  };

  const handleLocationChange = () => {
    if (location === "Hoi An") {

    } else if (location === "Da Nang") {
        
    } else if (location === "Ha Noi") {
        
    } else if (location === "Sai Gon") {
        
    } else if (location === "Ha Giang") {
        
    } else if (location === "Ninh Binh") {
        
    } else if (location === "Ha Long") {

    }
  }
  return (
    <div className="container">
      <MapContainer
        center={pos}
        zoom={6}
        style={{ width: "30vw", height: "70vh", display: "inline-block" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=bCJm1FRgtc2tZsmRppy7"
          attribution={
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          }
        />

        <Marker
          position={pos}
          eventHandlers={{
            click: handleHoiAnClick,
          }}
          attribution="Hoi An"
        >
          <Popup>Hoi An</Popup>
        </Marker>
      </MapContainer>
      <div className="photo-container">
        {<img className='photo-item'src={hnpics[0].src}/>}
        <ImageGallery items={hnpics}/>
      </div>
    </div>
  );
};

export default Map;
