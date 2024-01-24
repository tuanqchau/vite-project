import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {motion} from 'framer-motion';
import React, {useContext} from 'react';
import About from "./Pages/About";
import Photos from './Pages/Photos';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {CursorContext} from './context/CursorContext'
function App() {
  const {cursorVariants, cursorBG} = useContext(CursorContext);
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home/>}/>
            <Route path="photos" element={<Photos />} />
            <Route path="about" element={<About/>} />
            <Route path="*" element={<Photos />} />
        </Routes>
      </BrowserRouter>
      
      <motion.div
        variants={cursorVariants}
        animate={cursorBG} className='cursor-context'></motion.div>
    </>
    
  );
}

export default App;
