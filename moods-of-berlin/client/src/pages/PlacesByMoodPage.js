import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Map from "../components/Map";
import Places from "../components/Places.js";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <Fragment>
      <Map />

      <div
        className="alert alert-success"
        style={{ marginBottom: "-1em" }}
        role="alert"
      >
        <h4 className="alert-heading">Moods of Berlin</h4>
        <p>Please fill the form to add a Place.</p>
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
