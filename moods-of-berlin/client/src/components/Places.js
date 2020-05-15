import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PlaceList from "./PlaceList";
// import Search from "./Search.js";
import axios from "axios";
class Places extends Component {
  state = {
    places: [],
  };
  getAllPlaces = () => {
    axios
      .get(`/api/places`)
      .then((responseFromApi) => {
        console.log(responseFromApi);
        this.setState({
          places: responseFromApi.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getAllPlaces();
  }
  render() {
    console.log("<Places/> RENDER");
    console.log(this.state);
    return (
      <div>
        {this.state.places.length ? (
          <PlaceList places={this.state.places} />
        ) : null}
      </div>
    );
  }
}

export default Places;
