import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import PlaceList from "./PlaceList";
import Colorbar from "./Colorbar";

class Places extends Component {
  state = {
    places: [],
    mood: "",
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
      .get(`/api/places/moods?mood=${mood}`)
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
    /*   this.getPlacesByMood(); */
  }

  changeMood = (e) => {
    this.setState(
      {
        mood: e.target.name,
      },
      () => {
        this.getPlacesByMood(this.state.mood);
      }
    );
  };

  render() {
    console.log("<Places/> RENDER");
    console.log(this.state.mood);

    // console.log(this.props.match.params.mood);
    return (
      <div>
        <Colorbar changeMood={this.changeMood} />
        {this.state.places.length ? (
          <PlaceList places={this.state.places} />
        ) : null}
      </div>
    );
  }
}

export default withRouter(Places);
