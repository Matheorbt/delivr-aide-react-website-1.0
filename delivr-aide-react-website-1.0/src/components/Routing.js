import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components import for routing

import AddKit from "./AddKit";
import AddTechKit from "./AddTechKit";
import Charte from "./Charte";
import Politique from "./Politique";
import PageNotFound from "./PageNotFound";
import Contact from "./Contact";
import App from "./App";
import HiddenSection from "./HiddenSection";

function Routing() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/politique">
            <Politique />
          </Route>
          <Route path="/charte">
            <Charte />
          </Route>
          <Route path="/addkit">
            <AddKit />
          </Route>
          <Route path="/operationrentree2021">
            <AddTechKit />
          </Route>
          <Route path="/yovann">
            <HiddenSection />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routing;
