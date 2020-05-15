import React, { Component } from "react";
import { Link } from "react-router-dom";

const PlacesList = (props) => {
  console.log(props.places);

  return (
    <div>
      <div style={{ width: "60%", float: "left" }}>
        {props.places.map((place) => {
          return (
            <div key={place._id}>
              <h3>{place.title}</h3>
              <h3>{place.description}</h3>
              <h3>{place.mood}</h3>
              <h3>{place.imgPath}</h3>
              <h3>{place.street}</h3>
              <h3>{place.zip}</h3>
              <h3>{place.city}</h3>

              {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlacesList;
