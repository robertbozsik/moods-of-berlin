import React, { Component, Fragment, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Colorbar from "./components/Colorbar.js";
// import axios from "axios";
import Places from "./components/Places.js";
import NavbarTest from "./components/NavbarTest";
import Navbar from "./components/Navbar";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 52.5170365,
    longitude: 13.3888599,
    width: "100vw",
    height: "50vh",
    zoom: 10,
  });

  return (
    <Fragment>
      <Navbar />

      <NavbarTest />

      <h1>Moods of Berlin</h1>
      <p>
        Here will be displayed a list of the places based on a certain mood. It
        can be visited by every user even without sign up and login.
      </p>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/benchberlin/cka8f1pe629161iqu0304nkde"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL>

      <Colorbar />

      <Places />
    </Fragment>
  );
}
