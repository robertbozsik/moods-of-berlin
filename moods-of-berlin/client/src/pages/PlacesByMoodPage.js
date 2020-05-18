import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Colorbar from "../components/Colorbar";
import Map from "../components/Map";
import Places from "../components/Places.js";
import { Link } from "react-router-dom";

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
