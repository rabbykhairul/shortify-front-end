import React, { useEffect, useState } from "react";
import { getShortUrl } from "../../../services/shortUrlService";
import UrlShortenerForm from "./UrlShortenerForm";
import "./UrlShortenerSection.css";

// regular variables moved outside to remove useEffect missing dependency warnings
const roundCardContainerStyles = {
  width: "21.5vw",
  height: "21.5vw",
  borderRadius: "50%",
};

const regularCardContainerStyles = {
  width: "100%",
  height: "fit-content",
  borderRadius: "1.25vw",
};

// component functions starts here

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

  const [
    urlShorteningOperationFailed,
    setUrlShorteningOperationFailed,
  ] = useState(false);

  const [shortUrlString, setShortUrlString] = useState("");
  const [originalUrlString, setOriginalUrlString] = useState("");

  const [cardStyleContainerStyles, setCardStyleContainerStyles] = useState(
    regularCardContainerStyles
  );

  // useEffect hooks
  // animate card-style-container div if user submits url shortener form
  useEffect(() => {
    if (shouldDisplayFormSubmitAnimation)
      setCardStyleContainerStyles(roundCardContainerStyles);
    else setCardStyleContainerStyles(regularCardContainerStyles);
  }, [shouldDisplayFormSubmitAnimation]);

  // event handlers
  const shortenUrl = async (originalURL) => {
    setOriginalUrlString(originalURL);
    setFormSubmitStatus(true);
    setShouldDisplayFormSubmtiAnimation(true);

    try {
      setShortUrlString(await getShortUrl(originalURL));
      setShouldDisplayShortUrlInfo(true);
    } catch (err) {
      console.log(err.message);
      console.log(err.response);
      setUrlShorteningOperationFailed(true);
    }

    setShouldDisplayFormSubmtiAnimation(false);
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
    setUrlShorteningOperationFailed(false);
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

  const renderMessageToIndicateUrlShorteningError = () => {
    if (urlShorteningOperationFailed)
      return (
        <>
          <p className="url-shortening-error-indicator">
            Shortening operation failed! May be -
            <ul>
              <li>the server is down</li>
              <li>or you tried to shorten an invalid url</li>
            </ul>
          </p>
          <p
            className="short-new-url-prompt"
            onClick={letUserShortenAnotherLink}
          >
            Click here to try again!
          </p>
        </>
      );
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
      <div className="card-style-container" style={cardStyleContainerStyles}>
        {renderUrlShortenerForm()}
        {renderFormSubmitAnimation()}
        {renderMessageToIndicateUrlShorteningError()}
        {renderShortUrlInfo()}
      </div>
    </div>
  );
};

export default UrlShortenerSection;
