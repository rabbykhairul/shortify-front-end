import React, { useState } from "react";
import { getShortUrl } from "../../../services/shortUrlService";
import UrlShortenerForm from "./UrlShortenerForm";
import "./UrlShortenerSection.css";

const UrlShortenerSection = () => {
  const [formSubmitStatus, setFormSubmitStatus] = useState(false);
  const [
    shouldDisplayFormSubmitAnimation,
    setShouldDisplayFormSubmtiAnimation,
  ] = useState(false);
  const [shouldDisplayShortUrlsInfo, setShouldDisplayShortUrlInfo] = useState(
    false
  );

  const shortenUrl = async (originalURL) => {
    console.log(originalURL);
    setFormSubmitStatus(true);
    setShouldDisplayFormSubmtiAnimation(true);

    await getShortUrl(originalURL);

    setShouldDisplayFormSubmtiAnimation(false);
    setShouldDisplayShortUrlInfo(true);
  };

  const letUserShortenAnotherLink = () => {
    setShouldDisplayShortUrlInfo(false);
    setFormSubmitStatus(false);
  };

  const renderUrlShortenerForm = () => {
    if (!formSubmitStatus) return <UrlShortenerForm onSubmit={shortenUrl} />;
  };

  const renderFormSubmitAnimation = () => {
    if (shouldDisplayFormSubmitAnimation)
      return <div className="dot-animation">...</div>;
  };

  const renderShortUrlInfo = () => {
    if (shouldDisplayShortUrlsInfo)
      return (
        <>
          <p className="url-type">Original URL</p>
          <p className="url-string-box">https://google.com</p>
          <p className="url-type">Short URL</p>
          <p className="url-string-box">
            https://shortify.netlify.app/aBcd8o/abcowoeiwl
          </p>
          <div className="copy-btn-container">
            <button className="copy-btn">Copy short URL!</button>
          </div>
          <p
            className="short-new-url-prompt"
            onClick={letUserShortenAnotherLink}
          >
            Click here to shorten another link.
          </p>
        </>
      );
  };

  return (
    <div className="url-shortener-section">
      <div className="card-style-container">
        {renderUrlShortenerForm()}
        {renderFormSubmitAnimation()}
        {renderShortUrlInfo()}
      </div>
    </div>
  );
};

export default UrlShortenerSection;
