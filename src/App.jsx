import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {motion} from 'framer-motion';
import React, {useContext} from 'react';
import About from "./Pages/About";
import Photos from './Pages/Photos';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Map from './Components/Map'
import Gallery from './Pages/Gallery';
import ImageView from './Pages/ImageView';
import Contact from './Pages/Contact';
//import {CursorContext} from './context/CursorContext'
function App() {
  //const {cursorVariants, cursorBG} = useContext(CursorContext);
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<Gallery/>} />
            {/* <Route index element={<Home />} /> */}
            <Route path="home" element={<Gallery/>}/>
            <Route path="photos" element={<Photos />} />
            <Route path="map" element={<Map />} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="view/:id" element={<ImageView />} />
            <Route path="*" element={<Gallery />} />
            
        </Routes>
      </BrowserRouter>
      
      {/* <motion.div
        //variants={cursorVariants}
        //</>animate={cursorBG} 
        className='cursor-context'></motion.div> */}
    </>
    
  );
}

export default App;
