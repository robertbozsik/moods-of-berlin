import React from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PlacesByMoodPage from "./pages/PlacesByMoodPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/places" component={PlacesByMoodPage} />
      <Footer />
    </div>
  );
}
