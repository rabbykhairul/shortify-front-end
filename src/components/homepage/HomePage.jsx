import React from "react";
import HeroHeader from "./HeroHeader";
import UrlShortenerSection from "./urlShortener/UrlShortenerSection";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <HeroHeader />
      <UrlShortenerSection />
    </div>
  );
};

export default HomePage;
