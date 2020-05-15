import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import HomeTest from "./components/pages/HomeTest";
import AboutTest from "./components/pages/AboutTest";
import ProtectedAreaTest from "./components/pages/ProtectedAreaTest";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomeTest} />
      <Route exact path="/about" component={AboutTest} />
      <Route exact path="/api/places" component={App} />
      <Route exact path="/api/places/protected" component={ProtectedAreaTest} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
