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
import hg from "../assets/vn/hg.jpg";
import hg2 from "../assets/vn/hg2.jpg";
import hg3 from "../assets/vn/hg3.jpg";
import hg4 from "../assets/vn/hg4.jpg";
import nb from "../assets/vn/nb.jpg";
import nb2 from "../assets/vn/nb2.jpg";
import nb3 from "../assets/vn/nb3.jpg";
import nb4 from "../assets/vn/nb4.jpg";
import nb5 from "../assets/vn/nb5.jpg";
import nb6 from "../assets/vn/nb6.jpg";
import nb7 from "../assets/vn/nb7.jpg";
import sg from "../assets/vn/sg.jpg";
import sg2 from "../assets/vn/sg2.jpg";
import sg3 from "../assets/vn/sg3.jpg";
import sg4 from "../assets/vn/sg4.jpg";
import sg5 from "../assets/vn/sg5.jpg";
import sg6 from "../assets/vn/sg6.jpg";
import sg7 from "../assets/vn/sg7.jpg";
import sg8 from "../assets/vn/sg8.jpg";
import sg9 from "../assets/vn/sg9.jpg";
import sg10 from "../assets/vn/sg10.jpg";
import sg11 from "../assets/vn/sg11.jpg";
import sg12 from "../assets/vn/sg12.jpg";
const Map = () => {
  const pos = [15.877993203699853, 108.32814843938998];
  const hnpos = [21.03408902244992, 105.8506367973026];
  const hgpos = [23.228419025335256, 105.41669699011631];
  const hlpos = [20.81736995266828, 107.17743501592064];
  const nbpos = [20.21634944578809, 105.93746406534049];
  const dnpos = [16.04752386149753, 108.24988971223084];
  const sgpos = [10.771565272663798, 106.70420637546121];
  const crpos = [12.058755295515398, 109.20293850930608]
  const hapics = [
    { original: ha, thumbnail: ha },
    { original: ha2, thumbnail: ha2 },
    { original: ha3, thumbnail: ha3 },
    { original: ha4, thumbnail: ha4 },
  ];
  const hgpics = [
    { original: hg, thumbnail: hg },
    { original: hg2, thumbnail: hg2 },
    { original: hg3, thumbnail: hg3 },
    { original: hg4, thumbnail: hg4 },
  ];
  const hnpics = [
    { original: hn, thumbnail: hn },
    { original: hn2, thumbnail: hn2 },
    { original: hn3, thumbnail: hn3 },
  ];
  const sgpics = [
    { original: sg, thumbnail: nb },
    { original: sg2, thumbnail: sg2 },
    { original: sg12, thumbnail: sg12 },
    { original: sg3, thumbnail: sg3 },
    { original: sg4, thumbnail: sg4 },
    { original: sg5, thumbnail: sg5 },
    { original: sg6, thumbnail: sg6 },
    { original: sg7, thumbnail: sg7 },
    { original: sg8, thumbnail: sg8 },
    { original: sg9, thumbnail: sg9 },
    { original: sg10, thumbnail: sg10 },
    { original: sg11, thumbnail: sg11 },
  ];
  const dnpics = [];
  const nbpics = [ { original: nb, thumbnail: nb },
    { original: nb2, thumbnail: nb2 },
    { original: nb3, thumbnail: nb3 },
    { original: nb4, thumbnail: nb4 },
    { original: nb5, thumbnail: nb5 },
    { original: nb6, thumbnail: nb6 },
    { original: nb7, thumbnail: nb7 }
  ];
  const hlpics = [];
  const crpics = [];
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

  const handleSaiGonClick = (e) => {
    //console.log("Sai Gon clicked");
    setLocation("Sai Gon");
  };

  const handleHaLongClick = (e) => {
    //console.log("Ha Long clicked");
    setLocation("Ha Long");
  };

  const handleDaNangClick = (e) => {
    //console.log("Da Nang clicked");
    setLocation("Da Nang");
  };

  const handleNinhBinhClick = (e) => {
    //console.log("Ninh Binh clicked");
    setLocation("Ninh Binh");
  };

  const handleHaGiangClick = (e) => {
    //console.log("Ha Giang clicked");
    setLocation("Ha Giang");
  };

  const handleLocationChange = () => {
    console.log("triggering");
    if (location === "Hoi An") {
      setPhotosData(hapics);
    } else if (location === "Da Nang")  {
        setPhotosData(dnpics);
    } else if (location === "Ha Noi") {
      setPhotosData(hnpics);
    } else if (location === "Sai Gon") {
        setPhotosData(sgpics);
    } else if (location === "Ha Giang") {
        setPhotosData(hgpics);
    } else if (location === "Ninh Binh") {
        setPhotosData(nbpics);
    } else if (location === "Ha Long") {
        setPhotosData(hlpics);
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
          position={hgpos}
          eventHandlers={{
            click: handleHaGiangClick,
          }}
          icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
        >
          <Popup>Hà Giang</Popup>
        </Marker>

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
          position={hlpos}
          eventHandlers={{
            click: handleHaLongClick,
          }}
          icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
        >
          <Popup>Hạ Long</Popup>
        </Marker>

        <Marker
          position={nbpos}
          eventHandlers={{
            click: handleNinhBinhClick,
          }}
          icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
        >
          <Popup>Ninh Bình</Popup>
        </Marker>

        <Marker
          position={dnpos}
          eventHandlers={{
            click: handleDaNangClick,
          }}
          icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
        >
          <Popup>Đà Nẵng</Popup>
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

        <Marker
          position={sgpos}
          eventHandlers={{
            click: handleSaiGonClick,
          }}
          icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
        >
          <Popup>Sài Gòn</Popup>
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
