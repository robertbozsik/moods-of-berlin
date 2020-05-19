import React, { Component } from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PlacesByMoodPage from "./pages/PlacesByMoodPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AddPlaceForm from "./pages/AddPlaceForm";
import PlaceDetails from "./components/PlaceDetails";
import ProtectedRoute from "./components/ProtectedRoute";

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

        <ProtectedRoute
          exact
          path="/places"
          user={this.state.user}
          component={PlacesByMoodPage}
        />

        <Route exact path="/addPlace" component={AddPlaceForm} />

        <Route
          exact
          path="/places/:id"
          // This is the correct way to send porps down
          render={(props) => <PlaceDetails user={this.state.user} {...props} />}
        />

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
=======
import Colorbar from "./components/Colorbar.js";
import axios from "axios";
import Places from "./components/Places.js";
// import Navbar from "./components/Navbar.js";
import NavbarTest from "./components/NavbarTest";
import PlaceDetails from "./components/PlaceDetails";
import { Link } from "react-router-dom";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 52.5170365,
    longitude: 13.3888599,
    width: "100vw",
    height: "50vh",
    zoom: 10,
  });

  return (
    <Fragment>
      {/*<Navbar />
    <Places />*/}
      <NavbarTest />
      <h1>Moods of Berlin</h1>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/benchberlin/cka8f1pe629161iqu0304nkde"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL>
      <Colorbar />

      <div className="alert alert-success mx-4" role="alert">
        <h4 class="alert-heading">Moods of Berlin</h4>
        <p>
          Here will be displayed a list of the places based on a certain mood.
          It can be visited by every user even without sign up and login.
        </p>
        <hr></hr>
        <Link to={`/addPlace`}>
          <button type="button" className="btn btn-success btn-lg">
            Add a Place
          </button>
        </Link>
      </div>

      <Places />
    </Fragment>
  );
>>>>>>> 73d2b5c4054f9ccd03fe72d7d7ac4c1a60385b15
}

export default App;
