import React from "react";
import Navbar from "./components/layout/Navbar";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import GallerySection from "./sections/GallerySection";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <GallerySection />
      </main>
    </div>
  );
}

export default App;
