import React, { Component, Fragment } from "react";
import Places from "./components/Places.js";
import Navbar from "./components/Navbar.js";
import { Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
              <Navbar />
        <Route exact path='/places'
          component={Places}
        />
      </Fragment>
    );
  }
}

export default App;
