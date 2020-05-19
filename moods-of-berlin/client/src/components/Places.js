import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import PlaceList from "./PlaceList";
import colorbar from "./Colorbar";

class Places extends Component {
  state = {
    places: [],
  };

  getAllPlaces = () => {
    axios
      .get("/api/places")
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

  getPlacesByMood = (mood) => {
    axios
      .get("/api/places")
      .then((responseFromApi) => {
        console.log(responseFromApi.data);
        this.setState({
          places: responseFromApi.data.filter((place) => place.mood === mood),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllPlaces();
    /*   this.getPlacesByMood(); */
  }

  render() {
    console.log("<Places/> RENDER");
    // console.log(this.state);
    console.log(this.props.match.params.mood);
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
