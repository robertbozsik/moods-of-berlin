import React, { Component } from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PlacesByMoodPage from "./pages/PlacesByMoodPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AddPlaceForm from "./pages/AddPlaceForm";
import PlaceDetails from "./components/PlaceDetails";

export class App extends Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <div>
        <Navbar user={this.state.user} setUser={this.setUser} />

        <Route exact path="/" component={HomePage} />

        <Route exact path="/about" component={AboutPage} />

        <Route exact path="/places" component={PlacesByMoodPage} />

        <Route exact path="/addPlace" component={AddPlaceForm} />

        <Route exact path="/places/:id" component={PlaceDetails} />

        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
