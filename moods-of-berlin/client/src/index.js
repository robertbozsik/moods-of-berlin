import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import axios from "axios";

// Get logged in user and pass it as a prop to <App.js />
axios
  .get("/api/auth/loggedin")
  .then((response) => {
    const user = response.data;
    ReactDOM.render(
      <BrowserRouter>
        <App user={user} />
      </BrowserRouter>,
      document.getElementById("root")
    );
  })
  .catch((err) => {
    console.log(err);
  });
=======
import HomeTest from "./components/pages/HomeTest";
import AboutTest from "./components/pages/AboutTest";
import ProtectedAreaTest from "./components/pages/ProtectedAreaTest";
import PlaceDetails from "./components/PlaceDetails";
import AddPlaceForm from "./components/pages/AddPlaceForm";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomeTest} />
      <Route exact path="/about" component={AboutTest} />
      <Route exact path="/places" component={App} />
      <Route exact path="/addPlace" component={AddPlaceForm} />
      <Route exact path="/places/protected" component={ProtectedAreaTest} />
      <Route exact path="/places/:id" component={PlaceDetails} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
>>>>>>> 73d2b5c4054f9ccd03fe72d7d7ac4c1a60385b15

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
