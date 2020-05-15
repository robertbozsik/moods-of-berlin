import React, { Component, Fragment } from "react";
import PlacesList from "./components/Placeslist.js";
import Places from "./components/Places.js";
// import Navbar from "./components/Navbar.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Places />
        <h1>Places by mood</h1>
        <p>
          Here will be displayed a list of the places based on a certain mood.
          It can be visited by every user even without sign up and login.
        </p>
      </Fragment>
    );
  }
}

export default App;
