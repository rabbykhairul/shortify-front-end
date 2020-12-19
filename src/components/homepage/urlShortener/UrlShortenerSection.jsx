import React, { useState } from "react";
import { getShortUrl } from "../../../services/shortUrlService";
import UrlShortenerForm from "./UrlShortenerForm";
import "./UrlShortenerSection.css";

const UrlShortenerSection = () => {
  // state variables
  const [formSubmitStatus, setFormSubmitStatus] = useState(false);
  const [
    shouldDisplayFormSubmitAnimation,
    setShouldDisplayFormSubmtiAnimation,
  ] = useState(false);
  const [shouldDisplayShortUrlsInfo, setShouldDisplayShortUrlInfo] = useState(
    false
  );
  const [shortUrlString, setShortUrlString] = useState("");
  const [originalUrlString, setOriginalUrlString] = useState("");

  // event handlers
  const shortenUrl = async (originalURL) => {
    setOriginalUrlString(originalURL);
    setFormSubmitStatus(true);
    setShouldDisplayFormSubmtiAnimation(true);

    setShortUrlString(await getShortUrl(originalURL));

    setShouldDisplayFormSubmtiAnimation(false);
    setShouldDisplayShortUrlInfo(true);
  };

  const copyShortUrlToClipboard = () => {
    let shortUrlParagraph = document.createElement("textarea");
    shortUrlParagraph.innerText = shortUrlString;
    document.body.appendChild(shortUrlParagraph);
    shortUrlParagraph.select();
    document.execCommand("copy");
    shortUrlParagraph.remove();
  };

  const letUserShortenAnotherLink = () => {
    setShouldDisplayShortUrlInfo(false);
    setFormSubmitStatus(false);
  };

  // helper methods for rendering
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
          <p className="url-string-box">{originalUrlString}</p>
          <p className="url-type">Short URL</p>
          <p className="url-string-box">{shortUrlString}</p>
          <div className="copy-btn-container">
            <button className="copy-btn" onClick={copyShortUrlToClipboard}>
              Copy short URL!
            </button>
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
