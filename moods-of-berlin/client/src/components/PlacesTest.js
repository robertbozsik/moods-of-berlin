import React, { Component } from "react";
import axios from "axios";

export class PlacesTest extends Component {
  state = {
    places: [],
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    axios
      .get("/api/places")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return <div></div>;
  }
}

export default PlacesTest;
