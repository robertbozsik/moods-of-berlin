import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Colorbar from "../components/Colorbar";
import Map from "../components/Map";
import Places from "../components/Places.js";

export default function App() {
  return (
    <Fragment>
      <h1>Moods of Berlin</h1>
      <p>
        Here will be displayed a list of the places based on a certain mood. It
        can be visited by every user even without sign up and login.
      </p>

      <Map />

      <Colorbar />

      <Places />
    </Fragment>
  );
}
