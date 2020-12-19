import React, { useState } from "react";
import { formatUrl, isValidUrl } from "../../../services/shortUrlService";
import Input from "../../commons/Input";
import Button from "../../commons/Button";
import "./UrlShortenerForm.css";

const UrlShortenerForm = (props) => {
  const { onSubmit } = props;

  const [originalURL, setOriginalURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateOriginalURL = (e) => {
    setOriginalURL(e.currentTarget.value);
    if (isValidUrl(e.currentTarget.value)) setErrorMessage("");
    else setErrorMessage("Please type in a valid url!");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const urlString = formatUrl(originalURL);
    if (urlString) onSubmit(urlString);
    else setErrorMessage("Please type in a valid url!");
  };

  const shouldSubmitButtonBeDisabled = () => {
    return originalURL.length === 0;
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        type="text"
        label="Original URL"
        name="originalURL"
        placeholder="Paste your link here..."
        value={originalURL}
        onChange={updateOriginalURL}
        errorMessage={errorMessage}
      />
      <Button label="Get short URL" disabled={shouldSubmitButtonBeDisabled()} />
    </form>
  );
};

export default UrlShortenerForm;
