import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "../Styles/Map.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import hn from "../assets/vn/hn.jpg";
import hn2 from "../assets/vn/hn2.jpg";
import hn3 from "../assets/vn/hn3.jpg";
import ha from "../assets/vn/ha.jpg";
import ha2 from "../assets/vn/ha2.jpg";
import ha3 from "../assets/vn/ha3.jpg";
import ha4 from "../assets/vn/ha4.jpg";
const Map = () => {
  const pos = [15.877993203699853, 108.32814843938998];
  const hnpos = [21.03408902244992, 105.8506367973026];
  const hgpos = [];
  const hlpos = [];
  const nbpos = [];
  const dnpos = [];
  const hapics = [
    { original: ha, thumbnail: ha },
    { original: ha2, thumbnail: ha2 },
    { original: ha3, thumbnail: ha3 },
    { original: ha4, thumbnail: ha4 },
  ];
  const hgpics = [];
  const hnpics = [
    { original: hn, thumbnail: hn },
    { original: hn2, thumbnail: hn2 },
    { original: hn3, thumbnail: hn3 },
  ];
  const sgpics = [];
  const dnpics = [];
  const nbpics = [];
  const hlpics = [];
  const [location, setLocation] = useState("");
  const [photosData, setPhotosData] = useState(hapics);

  const handleHoiAnClick = (e) => {
    //console.log("Hoi An clicked");
    setLocation("Hoi An");
  };

  const handleHanoiClick = (e) => {
    //console.log("Ha Noi clicked");
    setLocation("Ha Noi");
  };

  const handleLocationChange = () => {
    console.log("triggering");
    if (location === "Hoi An") {
      setPhotosData(hapics);
    } else if (location === "Da Nang") {
    } else if (location === "Ha Noi") {
      setPhotosData(hnpics);
    } else if (location === "Sai Gon") {
    } else if (location === "Ha Giang") {
    } else if (location === "Ninh Binh") {
    } else if (location === "Ha Long") {
    }
  };

  useEffect(() => {
    handleLocationChange();
  }, [location]);

  return (
    <div className="container">
      <MapContainer
        center={pos}
        zoom={6}
        style={{ width: "75vw", height: "70vh", display: "inline-block" }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=bCJm1FRgtc2tZsmRppy7"
          attribution={
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          }
        />

        <Marker
          position={hnpos}
          eventHandlers={{
            click: handleHanoiClick,
          }}
          icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
        >
          <Popup>Hà Nội</Popup>
        </Marker>

        <Marker
          position={pos}
          eventHandlers={{
            click: handleHoiAnClick,
          }}
          icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
        >
          <Popup>Hội An</Popup>
        </Marker>
      </MapContainer>

      <div className="photo-container">
        <ImageGallery
          items={photosData}
          showPlayButton={false}
          showIndex={true}
        />
      </div>
    </div>
  );
};

export default Map;
