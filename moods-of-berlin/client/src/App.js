import React, {Component, Fragment} from 'react';
import './App.css';
import places from "./placesFrontend.json"
import PlacesList from "./PlacesList"
import Search from "./Search.js"

class App extends Component {

  state = {
    places: places,
    query: "",
  };

  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  render() {

    return (
      
      <Fragment>
      <Search query={this.state.query} triggerSetQuery={this.setQuery} />
      
      <PlacesList places={this.state.places} query={this.state.query} />

      </Fragment>
      
    );



  }
  
}

export default App;
