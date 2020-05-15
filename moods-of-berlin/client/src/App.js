import React, { Component, Fragment } from "react";
import Places from "./components/Places.js";
// import Navbar from "./components/Navbar.js";
import NavbarTest from "./components/NavbarTest";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavbarTest />
        <h1>Places by mood</h1>
        <p>
          Here will be displayed a list of the places based on a certain mood.
          It can be visited by every user even without sign up and login.
        </p>
        <Places />
      </Fragment>
    );
  }
}

export default App;
