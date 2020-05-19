import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import PlaceList from "./PlaceList";

class Places extends Component {
  state = {
    places: [],
  };

  getAllPlaces = () => {
    axios
      .get("/api/places")
      .then((responseFromApi) => {
        console.log(responseFromApi.data);
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

export default withRouter(Places);
