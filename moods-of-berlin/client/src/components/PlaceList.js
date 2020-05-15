import React from "react";

const PlaceList = (props) => {
  console.log(props.places);
  return (
    <div>
      <div style={{ width: "60%", float: "left" }}>
        {props.places.map((place) => {
          return (
            <div key={place._id}>
              <img src={place.imgPath} alt={place.title} />
              <h3>{place.title}</h3>
              {/*<p><b>Description: </b>{place.description}</p>*/}
              <h4>
                <b>Mood: </b>
                {place.mood}
              </h4>
              <p>
                <b>Address: </b>
                {place.street} {place.zip} {place.city}
              </p>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlaceList;
