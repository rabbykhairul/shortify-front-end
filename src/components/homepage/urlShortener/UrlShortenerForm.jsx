import React, { useState } from "react";
import Input from "../../commons/Input";
import Button from "../../commons/Button";
import "./UrlShortenerForm.css";

const UrlShortenerForm = (props) => {
  const { onSubmit } = props;

  const [originalURL, setOriginalURL] = useState("");

  const updateOriginalURL = (e) => {
    setOriginalURL(e.currentTarget.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(originalURL);
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
      />
      <Button label="Get short URL" />
    </form>
  );
};

export default UrlShortenerForm;
