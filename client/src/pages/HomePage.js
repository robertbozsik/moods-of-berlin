import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div className="slider" style={{ borderTop: "solid 2px white" }}>
      <div className="bg-info row d-flex">
        <div className="col-lg-6 px-5">
          <img
            src="\Plutchik-wheel.png"
            className="img-fluid p-5"
            alt="Responsive image"
          ></img>
        </div>
        <div className="col-lg-6 align-self-center">
          <h6 style={{ fontSize: "2rem" }} className="text-white display-4">
            How do you feel today?
          </h6>
          <h1 className="text-white display-2">Moods of Berlin</h1>
          <h6 style={{ fontSize: "2rem" }} className="text-white display-4">
            what would you like to do?
          </h6>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 containerBox">
          <div className="row">
            <div className="col-6 ">
              <div className="row">
                <div className="col-6">
                  <Link to="/places">
                    <div className="overlay-effect-yellow"></div>
                    <div className="item1"></div>
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/places">
                    <div className="overlay-effect-green"></div>
                    <div className="item2"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <Link to="/places">
                <div className="overlay-effect-orange"></div>
                <div className="item3"></div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-6 ">
              <Link to="/places">
                <div className="overlay-effect-violet"></div>
                <div className="item4"></div>
              </Link>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <Link to="/places">
                    <div className="overlay-effect-turquoise"></div>
                    <div className="item5"></div>
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/places">
                    <div className="overlay-effect-red"></div>
                    <div className="item6"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row col-9 pullToTop">
            <div className="col-3">
              <Link to="/places">
                <div className="overlay-effect-blue"></div>
                <div className="item7"></div>
              </Link>
            </div>
            <div className="col-9">
              <Link to="/places">
                <div className="overlay-effect-greenyellow"></div>
                <div className="item8"></div>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 p-3">
          <p>
            We are driven by feelings. We often decide where to go or what to do
            based on our actual mood.
            <br />
            Most of the Websites that you can find on the internet recommend you
            places to visit based on popularity, price, or some other touristic
            point of view.
            <br />
            <br />
            MOODS OF BERLIN recommends places to visit in Berlin, however, based
            on your actual mood and helps your choice visualizing all the moods
            and places by colors.
            <br />
            The categories of the moods and their colorful representation are
            inspired by the theories of psychologist Robert Plutchik’s.
            <br />
            <br />
            If you have been living in a city for some years you must found some
            places where you go when you feel in a certain way.
            <br />
            For example, you go to the cinema in case you feel bored, or for a
            run, if you feel angry in order to get calmed, or visit a place that
            you love if you feel joyful.
            <br />
            <br />
            Our App will help you to save and organize your favorite places and
            share them with others. Users are able to add a personal description
            to their beloved places.
            <br />
            Create a common database in order to inspire others with your own
            stories and help each other to feel better by finding the perfect
            place for the given mood.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
