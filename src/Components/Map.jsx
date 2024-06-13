import React from 'react'
import {MapContainer} from 'react-leaflet/MapContainer'
import {TileLayer} from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css'
import '../Styles/Map.css'


const Map = () => {
    const center = [15.877993203699853, 108.32814843938998]
    return (
        <MapContainer
        center={center}
        zoom={6}
        style={{width:'50vw',height:'100vh'}}
        >
            <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=bCJm1FRgtc2tZsmRppy7'
            attribution={'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}
            >
            </TileLayer>
        </MapContainer>

    );
}

export default Map;