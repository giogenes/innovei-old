import React, { Fragment } from "react";
import Units from "./components/units";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Units />
      <Footer />
    </Fragment>
  );
}

export default App;
