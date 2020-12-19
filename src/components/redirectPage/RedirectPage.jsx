import React, { useEffect, useState } from "react";
import { getOriginalUrl } from "../../services/shortUrlService";
import "./RedirectPage.css";

const RedirectPage = (props) => {
  const { match } = props;
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    const tryToRedirectToOriginalUrl = async () => {
      const originalURL = await getOriginalUrl(match.params.shortCode);
      if (originalURL) return (window.location = originalURL);
      setErrorStatus(true);
    };
    tryToRedirectToOriginalUrl();
  }, [match]);

  const showRedirectMessage = () => {
    if (!errorStatus)
      return (
        <h1>
          Redirecting
          <span className="circle-animation">.</span>
          <span className="circle-animation">.</span>
          <span className="circle-animation">.</span>
        </h1>
      );
  };

  const showErrorMessage = () => {
    if (errorStatus)
      return (
        <h1 className="error-message">
          This short url doesn't exist! To create a short url{" "}
          <span>click here!</span>
        </h1>
      );
  };

  return (
    <div className="redirect-page-container">
      {showRedirectMessage()}
      {showErrorMessage()}
    </div>
  );
};

export default RedirectPage;
