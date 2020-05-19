import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const HomePage = (props) => {
  return (
    <div className="slider">
      <div className="bg-info row d-flex">
        <div className="col-6 px-5">
          <img
            src="\Plutchik-wheel.png"
            class="img-fluid p-5"
            alt="Responsive image"
          ></img>
        </div>
        <div className="col-6 align-self-center">
          <h6 className="text-white">How do you feel today?</h6>
          <h1 className="text-white title">Moods of Berlin</h1>
          <h6 className="text-white">what would you like to do?</h6>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">COLOR SQUARES</div>
        <div className="col-lg-6">INTRO TEXT</div>
      </div>
    </div>
  );
};

export default HomePage;
