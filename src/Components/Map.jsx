import React from 'react'
import {MapContainer} from 'react-leaflet/MapContainer'
import {TileLayer} from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css'
import '../Styles/Map.css'


const Map = () => {
    const center = [10.772347575083762, 106.69750624727703]
    return (
        <MapContainer
        center={center}
        zoom={5}
        style={{width:'100vw',height:'100vh'}}>
        
            <TileLayer
            url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=bCJm1FRgtc2tZsmRppy7'
            attribution={'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}
            >

            </TileLayer>
        </MapContainer>

    );
}

export default Map;