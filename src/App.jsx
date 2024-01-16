import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import About from "./pages/About";
import Photos from './pages/Photos';
import Navbar from './Components/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route index element={<Home />} />
          <Route path="photos" element={<Photos />} />
          <Route path="about" element={<About/>} />
          <Route path="*" element={<Photos />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
