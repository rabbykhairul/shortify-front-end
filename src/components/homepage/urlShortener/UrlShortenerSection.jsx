import React from "react";
import UrlShortenerForm from "./UrlShortenerForm";
import "./UrlShortenerSection.css";

const UrlShortenerSection = () => {
  const shortenUrl = (originalURL) => {
    console.log(originalURL);
  };

  return (
    <div className="url-shortener-section">
      <div className="card-style-container">
        <UrlShortenerForm onSubmit={shortenUrl} />
      </div>
    </div>
  );
};

export default UrlShortenerSection;
