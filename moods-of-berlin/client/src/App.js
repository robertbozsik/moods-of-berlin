import React, { Component, Fragment, useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "./App.css";
import Colorbar from "./components/Colorbar.js";
import axios from "axios";
import Places from "./components/Places.js";
// import Navbar from "./components/Navbar.js";
import NavbarTest from "./components/NavbarTest";
import PlaceDetails from "./components/PlaceDetails";
import { Link } from "react-router-dom";

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
      {/*<Navbar />
    <Places />*/}
      <NavbarTest />
      <h1>Moods of Berlin</h1>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/benchberlin/cka8f1pe629161iqu0304nkde"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL>
      <Colorbar />

      <div className="alert alert-success mx-4" role="alert">
        <h4 class="alert-heading">Moods of Berlin</h4>
        <p>
          Here will be displayed a list of the places based on a certain mood.
          It can be visited by every user even without sign up and login.
        </p>
        <hr></hr>
        <Link to={`/addPlace`}>
          <button type="button" className="btn btn-success btn-lg">
            Add a Place
          </button>
        </Link>
      </div>

      <Places />
    </Fragment>
  );
}
