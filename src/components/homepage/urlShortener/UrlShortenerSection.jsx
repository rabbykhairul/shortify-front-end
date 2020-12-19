import React, { useState } from "react";
import UrlShortenerForm from "./UrlShortenerForm";
import "./UrlShortenerSection.css";

const UrlShortenerSection = () => {
  const [formSubmitStatus, setFormSubmitStatus] = useState(false);

  const shortenUrl = (originalURL) => {
    console.log(originalURL);
    setFormSubmitStatus(true);
  };

  const renderUrlShortenerForm = () => {
    if (!formSubmitStatus) return <UrlShortenerForm onSubmit={shortenUrl} />;
  };

  const renderFormSubmitAnimation = () => {
    if (formSubmitStatus) return <div className="dot-animation">...</div>;
  };

  return (
    <div className="url-shortener-section">
      <div className="card-style-container">
        {renderUrlShortenerForm()}
        {renderFormSubmitAnimation()}
      </div>
    </div>
  );
};

export default UrlShortenerSection;
