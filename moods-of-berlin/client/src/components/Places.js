import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import places from "../placesFrontend.json";
import PlacesList from "./Placeslist";
import Search from "./Search.js";
import axios from "axios"; // not used
import Colorbar from "./Colorbar";

class App extends Component {
  state = {
    places: places, // should be [] after conecting to backend
    query: "",
    mood: {
rage: false,
bored: false,
    },
  };

  // not used - >

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    axios
      .get("/api/places")
      .then((response) => {
        console.log(response.data);
        this.setState({
          places: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // < - not used

  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  setMood = (mood) => {
    this.setState({
      mood: mood,
    });
  };

  render() {
   

    return (
      <Fragment>
        <Colorbar mood="rage" triggerSetMood={this.setMood} />
        <Search query={this.state.query} triggerSetQuery={this.setQuery} />
        <PlacesList places={this.state.places} query={this.state.query} />
      </Fragment>
    );
  }
}

export default App;
