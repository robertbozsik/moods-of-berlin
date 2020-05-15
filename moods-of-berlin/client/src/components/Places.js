import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PlacesList from "./Placeslist";
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
          <PlacesList places={this.state.places} />
        ) : null}
      </div>
    );
  }
}

//   state = {
//     places: places, // should be [] after conecting to backend
//     query: "",
//   };

//   // not used - >

//   componentDidMount = () => {
//     this.getData();
//   };

//   getData = () => {
//     axios
//       .get("/api/places")
//       .then((response) => {
//         console.log(response.data);
//         this.setState({
//           places: response.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   // < - not used

//   setQuery = (query) => {
//     this.setState({
//       query: query,
//     });
//   };

//   render() {
//     return (
//       <Fragment>
//         <Search query={this.state.query} triggerSetQuery={this.setQuery} />
//         <PlacesList places={this.state.places} query={this.state.query} />
//       </Fragment>
//     );
//   }
// }

export default Places;
