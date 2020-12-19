import React from "react";
import "./RedirectPage.css";

const RedirectPage = (props) => {
  const { match } = props;
  return (
    <div className="redirect-page-container">
      <h1>
        Redirecting
        <span className="circle-animation">.</span>
        <span className="circle-animation">.</span>
        <span className="circle-animation">.</span>
      </h1>
    </div>
  );
};

export default RedirectPage;
