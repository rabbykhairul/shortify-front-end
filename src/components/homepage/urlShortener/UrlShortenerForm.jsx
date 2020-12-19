import React, { useState } from "react";
import Input from "../../commons/Input";
import "./UrlShortenerForm.css";

const UrlShortenerForm = () => {
  const [originalURL, setOriginalURL] = useState("");

  const updateOriginalURL = (e) => {
    setOriginalURL(e.currentTarget.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        type="text"
        label="Original URL"
        name="originalURL"
        placeholder="Paste your link here..."
        value={originalURL}
        onChange={updateOriginalURL}
      />
    </form>
  );
};

export default UrlShortenerForm;
