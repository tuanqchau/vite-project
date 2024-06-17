import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "../Styles/Map.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import cr from "../assets/vn/cr.jpg";
import cr2 from "../assets/vn/cr \(2\).jpg";
import cr3 from "../assets/vn/cr \(3\).jpg";

import dn from "../assets/vn/dn.jpg"
import dn2 from "../assets/vn/dn \(2\).jpg"
import dn3 from "../assets/vn/dn \(3\).jpg"

import ha from "../assets/vn/ha.jpg";
import ha2 from "../assets/vn/ha \(2\).jpg";
import ha3 from "../assets/vn/ha \(3\).jpg";
import ha4 from "../assets/vn/ha \(4\).jpg";
import ha5 from "../assets/vn/ha \(5\).jpg";
import ha6 from "../assets/vn/ha \(6\).jpg";
import ha7 from "../assets/vn/ha \(7\).jpg";
import ha8 from "../assets/vn/ha \(8\).jpg";
import ha9 from "../assets/vn/ha \(9\).jpg";
import ha10 from "../assets/vn/ha \(10\).jpg";

import hg from "../assets/vn/hg.jpg";
import hg2 from "../assets/vn/hg \(2\).jpg";
import hg3 from "../assets/vn/hg \(3\).jpg";
import hg4 from "../assets/vn/hg \(4\).jpg";
import hg5 from "../assets/vn/hg \(5\).jpg";
import hg6 from "../assets/vn/hg \(6\).jpg";
import hg7 from "../assets/vn/hg \(7\).jpg";
import hg8 from "../assets/vn/hg \(8\).jpg";
import hg9 from "../assets/vn/hg \(9\).jpg";
import hg10 from "../assets/vn/hg \(10\).jpg";
import hg11 from "../assets/vn/hg \(11\).jpg";
import hg12 from "../assets/vn/hg \(12\).jpg";
import hg13 from "../assets/vn/hg \(13\).jpg";
import hg14 from "../assets/vn/hg \(14\).jpg";
import hg15 from "../assets/vn/hg \(15\).jpg";
import hg16 from "../assets/vn/hg \(16\).jpg";
import hg17 from "../assets/vn/hg \(17\).jpg";
import hg18 from "../assets/vn/hg \(18\).jpg";
import hg19 from "../assets/vn/hg \(19\).jpg";
import hg20 from "../assets/vn/hg \(20\).jpg";
import hg21 from "../assets/vn/hg \(21\).jpg";
import hg22 from "../assets/vn/hg \(22\).jpg";
import hg23 from "../assets/vn/hg \(23\).jpg";
import hg24 from "../assets/vn/hg \(24\).jpg";
import hg25 from "../assets/vn/hg \(25\).jpg";
import hg26 from "../assets/vn/hg \(26\).jpg";
import hg27 from "../assets/vn/hg \(27\).jpg";
import hg28 from "../assets/vn/hg \(28\).jpg";
import hg29 from "../assets/vn/hg \(29\).jpg";
import hg30 from "../assets/vn/hg \(30\).jpg";
import hg31 from "../assets/vn/hg \(31\).jpg";

import hl from "../assets/vn/hl.jpg";
import hl2 from "../assets/vn/hl \(2\).jpg";
import hl3 from "../assets/vn/hl \(3\).jpg";
import hl4 from "../assets/vn/hl \(4\).jpg";
import hl5 from "../assets/vn/hl \(5\).jpg";
import hl6 from "../assets/vn/hl \(6\).jpg";
import hl7 from "../assets/vn/hl \(7\).jpg";
import hl8 from "../assets/vn/hl \(8\).jpg";
import hl9 from "../assets/vn/hl \(9\).jpg";

import hn from "../assets/vn/hn.jpg";
import hn2 from "../assets/vn/hn \(2\).jpg";
import hn3 from "../assets/vn/hn \(3\).jpg";
import hn4 from "../assets/vn/hn \(4\).jpg";
import hn5 from "../assets/vn/hn \(5\).jpg";
import hn6 from "../assets/vn/hn \(6\).jpg";
import hn7 from "../assets/vn/hn \(7\).jpg";
import hn8 from "../assets/vn/hn \(8\).jpg";
import hn9 from "../assets/vn/hn \(9\).jpg";
import hn10 from "../assets/vn/hn \(10\).jpg";
import hn11 from "../assets/vn/hn \(11\).jpg";
import hn12 from "../assets/vn/hn \(12\).jpg";
import hn13 from "../assets/vn/hn \(13\).jpg";
import hn14 from "../assets/vn/hn \(14\).jpg";
import hn15 from "../assets/vn/hn \(15\).jpg";
import hn16 from "../assets/vn/hn \(16\).jpg";
import hn17 from "../assets/vn/hn \(17\).jpg";
import hn18 from "../assets/vn/hn \(18\).jpg";
import hn19 from "../assets/vn/hn \(19\).jpg";
import hn20 from "../assets/vn/hn \(20\).jpg";
import hn21 from "../assets/vn/hn \(21\).jpg";
import hn22 from "../assets/vn/hn \(22\).jpg";
import hn23 from "../assets/vn/hn \(23\).jpg";

import nb from "../assets/vn/nb.jpg";
import nb2 from "../assets/vn/nb \(2\).jpg";
import nb3 from "../assets/vn/nb \(3\).jpg";
import nb4 from "../assets/vn/nb \(4\).jpg";
import nb5 from "../assets/vn/nb \(5\).jpg";
import nb6 from "../assets/vn/nb \(6\).jpg";
import nb7 from "../assets/vn/nb \(7\).jpg";
import nb8 from "../assets/vn/nb \(8\).jpg";
  

import sg from "../assets/vn/sg.jpg";
import sg2 from "../assets/vn/sg \(2\).jpg";
import sg3 from "../assets/vn/sg \(3\).jpg";
import sg4 from "../assets/vn/sg \(4\).jpg";
import sg5 from "../assets/vn/sg \(5\).jpg";
import sg6 from "../assets/vn/sg \(6\).jpg";
import sg7 from "../assets/vn/sg \(7\).jpg";
import sg8 from "../assets/vn/sg \(8\).jpg";
import sg9 from "../assets/vn/sg \(9\).jpg";
import sg10 from "../assets/vn/sg \(10\).jpg";
import sg11 from "../assets/vn/sg \(11\).jpg";
const Map = () => {
  const pos = [15.877993203699853, 108.32814843938998];
  const hnpos = [21.03408902244992, 105.8506367973026];
  const hgpos = [23.228419025335256, 105.41669699011631];
  const hlpos = [20.81736995266828, 107.17743501592064];
  const nbpos = [20.21634944578809, 105.93746406534049];
  const dnpos = [16.04752386149753, 108.24988971223084];
  const sgpos = [10.771565272663798, 106.70420637546121];
  const crpos = [12.058755295515398, 109.20293850930608]

  const crpics = [
    { original: cr, thumbnail: cr },
    { original: cr2, thumbnail: cr2 },
    { original: cr3, thumbnail: cr3 },
  ];

  const dnpics = [
    { original: dn, thumbnail: dn },
    { original: dn2, thumbnail: dn2 },
    { original: dn3, thumbnail: dn3 },
  ];
  const hapics = [
    { original: ha, thumbnail: ha },
    { original: ha2, thumbnail: ha2 },
    { original: ha3, thumbnail: ha3 },
    { original: ha4, thumbnail: ha4 },
    { original: ha5, thumbnail: ha5 },
    { original: ha6, thumbnail: ha6 },
    { original: ha7, thumbnail: ha7 },
    { original: ha8, thumbnail: ha8 },
    { original: ha9, thumbnail: ha9 },
    { original: ha10, thumbnail: ha10 },
  ];
  const hgpics = [
    { original: hg, thumbnail: hg },
    { original: hg2, thumbnail: hg2 },
    { original: hg3, thumbnail: hg3 },
    { original: hg4, thumbnail: hg4 },
    { original: hg5, thumbnail: hg5 },
    { original: hg6, thumbnail: hg6 },
    { original: hg7, thumbnail: hg7 },
    { original: hg8, thumbnail: hg8 },
    { original: hg9, thumbnail: hg9 },
    { original: hg10, thumbnail: hg10 },
    { original: hg11, thumbnail: hg11 },
    { original: hg12, thumbnail: hg12 },
    { original: hg13, thumbnail: hg13 },
    { original: hg14, thumbnail: hg14 },
    { original: hg15, thumbnail: hg15 },
    { original: hg16, thumbnail: hg16 },
    { original: hg17, thumbnail: hg17 },
    { original: hg18, thumbnail: hg18 },
    { original: hg19, thumbnail: hg19 },
    { original: hg20, thumbnail: hg20 },
    { original: hg21, thumbnail: hg21 },
    { original: hg22, thumbnail: hg22 },
    { original: hg23, thumbnail: hg23 },
    { original: hg24, thumbnail: hg24 },
    { original: hg25, thumbnail: hg25 },
    { original: hg26, thumbnail: hg26 },
    { original: hg27, thumbnail: hg27 },
    { original: hg28, thumbnail: hg28 },
    { original: hg29, thumbnail: hg29 },
    { original: hg30, thumbnail: hg30 },
    { original: hg31, thumbnail: hg31 },

  ];
  const hnpics = [
    { original: hn, thumbnail: hn },
    { original: hn2, thumbnail: hn2 },
    { original: hn3, thumbnail: hn3 },
    { original: hn4, thumbnail: hn4 },
    { original: hn5, thumbnail: hn5 },
    { original: hn6, thumbnail: hn6 },
    { original: hn7, thumbnail: hn7 },
    { original: hn8, thumbnail: hn8 },
    { original: hn9, thumbnail: hn9 },
    { original: hn10, thumbnail: hn10 },
    { original: hn11, thumbnail: hn11 },
    { original: hn12, thumbnail: hn12 },
    { original: hn13, thumbnail: hn13 },
    { original: hn14, thumbnail: hn14 },
    { original: hn15, thumbnail: hn15 },
    { original: hn16, thumbnail: hn16 },
    { original: hn17, thumbnail: hn17 },
    { original: hn18, thumbnail: hn18 },
    { original: hn19, thumbnail: hn19 },
    { original: hn20, thumbnail: hn20 },
    { original: hn21, thumbnail: hn21 },
    { original: hn22, thumbnail: hn22 },
    { original: hn23, thumbnail: hn23 },
    
  ];
  const sgpics = [
    { original: sg, thumbnail: sg },
    { original: sg2, thumbnail: sg2 },
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

  const nbpics = [ { original: nb, thumbnail: nb },
    { original: nb2, thumbnail: nb2 },
    { original: nb3, thumbnail: nb3 },
    { original: nb4, thumbnail: nb4 },
    { original: nb5, thumbnail: nb5 },
    { original: nb6, thumbnail: nb6 },
    { original: nb7, thumbnail: nb7 },
    { original: nb8, thumbnail: nb8 },
  ];
  const hlpics = [
    { original: hl, thumbnail: hl},
    { original: hl2, thumbnail:hl2 },
    { original: hl3, thumbnail:hl3 },
    { original: hl4, thumbnail:hl4 },
    { original: hl5, thumbnail:hl5 },
    { original: hl6, thumbnail:hl6 },
    { original: hl7, thumbnail:hl7 },
    { original: hl8, thumbnail:hl8 },
    { original: hl9, thumbnail:hl9 },
  ];

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

  const handleCamRanhClick = (e) => {
    //console.log("Ha Giang clicked");
    setLocation("Cam Ranh");
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
    } else if (location === "Cam Ranh") {
        setPhotosData(crpics);
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
          position={crpos}
          eventHandlers={{
            click: handleCamRanhClick,
          }}
          icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
        >
          <Popup>Cam Ranh</Popup>
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
