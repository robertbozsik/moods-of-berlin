import React, { Component, Fragment } from "react";
import Places from "./components/Places.js";
import Navbar from "./components/Navbar.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Places />
      </Fragment>
    );
  }
}

export default App;
