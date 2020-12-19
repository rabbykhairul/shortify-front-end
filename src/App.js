import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import RedirectPage from "./components/redirectPage/RedirectPage";

function App() {
  return (
    <Switch>
      <Route path="/:shortCode" component={RedirectPage} />
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
}

export default App;
