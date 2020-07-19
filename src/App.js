import React, { Fragment } from "react";
import Units from "./components/units";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Unit from "./components/unit";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/units/:id" component={Unit} />
        <Route path="/units" component={Units} />
        <Route path="/not-found" component={NotFound} />
        <Redirect exact from="/" to="/units" />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
