import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Navbar from './Components/Navbar';
import Gallery from './Pages/Gallery';

const About = lazy(() => import('./Pages/About'));
const Photos = lazy(() => import('./Pages/Photos'));
const Map = lazy(() => import('./Components/Map'));
const Contact = lazy(() => import('./Pages/Contact'));
const ImageView = lazy(() => import('./Pages/ImageView'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<main className="page-loading" aria-live="polite">Loading…</main>}>
        <Routes>
          <Route index element={<Gallery />} />
          <Route path="home" element={<Gallery />} />
          <Route path="photos" element={<Photos />} />
          <Route path="map" element={<Map />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="view/:id" element={<ImageView />} />
          <Route path="*" element={<Gallery />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
