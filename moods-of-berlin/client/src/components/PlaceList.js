import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const PlaceList = (props) => {
  console.log(props.places);
  return (
    <div>
      <div className="card-columns" style={{ margin: "0 35px" }}>
        {props.places.map((place) => {
          return (
            <div>
              <div className="card" key={place._id}>
                <img
                  className="card-img-top"
                  src={place.imgPath}
                  alt={place.title}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <h3>{place.title}</h3>
                    <b>Mood: </b> {place.mood}
                  </h5>
                  <p className="card-text">
                    {" "}
                    <p>
                      <b>Address: </b>
                      {place.street} {place.zip} {place.city}
                    </p>
                  </p>
                </div>
                <div className="card-footer">
                  <Link to={`/places/${place._id}`}>
                    <button type="button" className="btn btn-info btn-block">
                      See place
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlaceList;
