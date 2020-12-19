import React from "react";
import UrlShortenerForm from "./UrlShortenerForm";
import "./UrlShortenerSection.css";

const UrlShortenerSection = () => {
  return (
    <div className="url-shortener-section">
      <div className="card-style-container">
        <UrlShortenerForm />
      </div>
    </div>
  );
};

export default UrlShortenerSection;
