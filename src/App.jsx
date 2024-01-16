import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import About from "./Pages/About";
import Photos from './Pages/Photos';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {

  return (
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
    
  );
}

export default App;
